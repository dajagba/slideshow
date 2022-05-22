import { selectCurrentlySelectedPicture, selectSlideShowPictures } from './../selectors/slideshow.selectors';
import { DeleteSlideShowImageSuccess, ESlideShowActions } from './../actions/slideshow.action';
import { DataService } from './../../service/api/data.service';
import { Injectable } from "@angular/core";
import { IAppState } from '../state/app.state';
import { Action, select, Store} from '@ngrx/store';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { GetInitialSlideShowDataSuccess, UpdateSelectedSlideShowImage } from '../actions/slideshow.action';
import { switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { IPicture } from 'src/app/model/model';
import { combineLatest, of } from 'rxjs';


@Injectable()
export class SlideShowEffects{
  constructor(private dataService: DataService, private store:Store<IAppState>,private actions$: Actions){}

  @Effect()
  GetInitialSlideShowData$ = this.actions$.pipe(
    ofType(ESlideShowActions.GET_INITIAL_SLIDESHOW_DATA),
    switchMap(() => this.dataService.fetchMockData()),
    switchMap((resp: IPicture[]) => {
      return of((GetInitialSlideShowDataSuccess({payload: resp})), UpdateSelectedSlideShowImage({payload: resp[0]}))
    })
  );

  @Effect()
  DeleteSlideShowImage$ = this.actions$.pipe(
    ofType(ESlideShowActions.DELETE_SLIDESHOW_IMAGE),
    withLatestFrom(this.store.select(selectCurrentlySelectedPicture), this.store.select(selectSlideShowPictures)),
      switchMap((info:any) => {
        console.log("image to delete is: ", info[0].payload);
          let imagesToDelete = info[0].payload;
          let selectedImage = info[1];
          let slideshowPictures = info[2];
          console.log("List of images:  ", slideshowPictures);
          if(new Set(imagesToDelete).has(selectedImage)){
            //If next is valid go to next... else if prev is valid go prev.. else empty array
            // let next = selectedImage.index + 1 <=  slideshowPictures.length ? selectedImage.index + 1 : slideshowPictures[0].index;
            let next = selectedImage.index + 1;
            let prev = selectedImage.index - 1;
            let target;
            if(next >= slideshowPictures.length)  {
              target = slideshowPictures[1];

            }// 5(index is 0 but index in array is 5) == 5(last image in the list)
            else{
              target = slideshowPictures.find(val => val.index == next);
            }
            console.log("next is: ", next);

            console.log("target is: ",target);
            return of(DeleteSlideShowImageSuccess({payload: info[0].payload}),UpdateSelectedSlideShowImage({payload: target}));
          }
        return of(DeleteSlideShowImageSuccess({payload: info[0].payload}));
      })
  );
}
