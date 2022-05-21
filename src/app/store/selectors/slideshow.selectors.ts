import { ISlideshowState } from './../state/slideshow.state';
import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';


const selectSlideShowInfo = (state:IAppState) => state.slideshow;

export const slideshowInfo = createSelector(
  selectSlideShowInfo,
 (state: ISlideshowState) => state
);
