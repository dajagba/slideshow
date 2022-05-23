import {
  selectCurrentlySelectedPicture,
  selectLastUploadedPicture,
  selectSlideShowPictures,
} from './../selectors/slideshow.selectors';
import {
  AddSlideShowImageSuccess,
  DeleteSlideShowImageSuccess,
  ESlideShowActions,
} from './../actions/slideshow.action';
import { DataService } from './../../service/api/data.service';
import { Injectable } from '@angular/core';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  GetInitialSlideShowDataSuccess,
  UpdateSelectedSlideShowImage,
} from '../actions/slideshow.action';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { IPicture } from '../../model/model';
import { of } from 'rxjs';
import * as uuid from "uuid";

@Injectable()
export class SlideShowEffects {
  constructor(
    private dataService: DataService,
    private store: Store<IAppState>,
    private actions$: Actions<any>
  ) {}

  @Effect()
  GetInitialSlideShowData$ = this.actions$.pipe(
    ofType(ESlideShowActions.GET_INITIAL_SLIDESHOW_DATA),
    switchMap(() => this.dataService.fetchMockData()),
    switchMap((resp: IPicture[]) => {
      return of(
        GetInitialSlideShowDataSuccess({ payload: resp }),
        UpdateSelectedSlideShowImage({ payload: resp[0] })
      );
    })
  );

  @Effect()
  DeleteSlideShowImage$ = this.actions$.pipe(
    ofType(ESlideShowActions.DELETE_SLIDESHOW_IMAGE),
    withLatestFrom(
      this.store.select(selectCurrentlySelectedPicture),
      this.store.select(selectSlideShowPictures)
    ),
    switchMap((info: any) => {
      let imagesToDelete = info[0].payload;
      let selectedImage = info[1];
      let slideshowPictures = info[2];
      if (new Set(imagesToDelete).has(selectedImage)) {
        let next = selectedImage?.index + 1;
        let target;
        if (next >= slideshowPictures?.length) {
          target = slideshowPictures[1];
        } else {
          target = slideshowPictures.find((val) => val.index == next);
        }
        return of(
          DeleteSlideShowImageSuccess({ payload: info[0].payload }),
          UpdateSelectedSlideShowImage({ payload: target })
        );
      }
    })
  );

  @Effect()
  AddSlideShowImage$ = this.actions$.pipe(
    ofType(ESlideShowActions.ADD_SLIDESHOW_IMAGE),
    withLatestFrom(this.store.select(selectLastUploadedPicture)),
    switchMap(([action,lastUploadedPicture])=> {
      let index = lastUploadedPicture.index + 1;
       let image:IPicture = {
         ...action.payload,
         index: index,
         id: uuid.v4(),
       }
       return of(AddSlideShowImageSuccess({payload: [image]}))
    })
  )
}
