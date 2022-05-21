import { DataService } from './../../service/api/data.service';
import { Injectable } from "@angular/core";
import { IAppState } from '../state/app.state';
import { Store} from '@ngrx/store';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { SlideShowActions, ESlideShowActions, GetInitialSlideShowDataSuccess, UpdateSelectedSlideShowImage } from '../actions/slideshow.action';
import { switchMap } from 'rxjs/operators';
import { IPicture } from 'src/app/model/model';
import { of } from 'rxjs';


@Injectable()
export class SlideShowEffects{
  constructor(private dataService: DataService, private store:Store<IAppState>,private actions: Actions){}

  @Effect()
  GetInitialSlideShowData$ = this.actions.pipe(
    ofType<SlideShowActions>(ESlideShowActions.GET_INITIAL_SLIDESHOW_DATA),
    switchMap(() => this.dataService.fetchMockData()),
    switchMap((resp: IPicture[]) => {
      return  of((new GetInitialSlideShowDataSuccess(resp)),new UpdateSelectedSlideShowImage(resp[0]))
    })

  );
}
