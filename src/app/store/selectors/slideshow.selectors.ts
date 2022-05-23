import { ISlideshowState } from './../state/slideshow.state';
import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';


const selectSlideShowState = (state:IAppState) => state.slideshow;

export const selectSlideShowPictures = createSelector(
  selectSlideShowState,
 (state: ISlideshowState) => state.pictures
);

export const selectCurrentlySelectedPicture = createSelector(
  selectSlideShowState,
  (state: ISlideshowState) => state.selectedImage
);

export const selectLastUploadedPicture = createSelector(
  selectSlideShowState,
  (state: ISlideshowState) => state.lastUploadedImage
);
