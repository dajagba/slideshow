import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { slideShowReducer } from './slideshow.reducer';

export const appReducers: ActionReducerMap<IAppState,any> = {
  slideshow: slideShowReducer
}
