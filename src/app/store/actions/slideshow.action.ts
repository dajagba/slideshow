import { createAction, props } from '@ngrx/store';
import { IPicture } from '../../model/model';

export enum ESlideShowActions {
  GET_INITIAL_SLIDESHOW_DATA = '[SlideShow] Fetch Initial Data',
  GET_INITIAL_SLIDESHOW_DATA_SUCCESS = '[SlideShow] Fetch Initial Data Success',
  ADD_SLIDESHOW_IMAGE = '[SlideShow] Add SlideShow Image',
  ADD_SLIDESHOW_IMAGE_SUCCESS = '[SlideShow] Add SlideShow Image Success',
  DELETE_SLIDESHOW_IMAGE = '[SlideShow] Delete SlideShow Image ',
  DELETE_SLIDESHOW_IMAGE_SUCCESS = '[SlideShow] Delete Slideshow Image Sucess',
  UPDATE_SELECTED_SLIDESHOW_IMAGE = '[SlideShow] Update Selected SlideShow Image',
}

export const GetInitialSlideShowData = createAction(
  ESlideShowActions.GET_INITIAL_SLIDESHOW_DATA
);
export const GetInitialSlideShowDataSuccess = createAction(
  ESlideShowActions.GET_INITIAL_SLIDESHOW_DATA_SUCCESS,
  props<{ payload: IPicture[] }>()
);
export const AddSlideShowImage = createAction(
  ESlideShowActions.ADD_SLIDESHOW_IMAGE,
  props<{ payload: string | File }>()
);
export const AddSlideShowImageSuccess = createAction(
  ESlideShowActions.ADD_SLIDESHOW_IMAGE_SUCCESS,
  props<{ payload: IPicture[] }>()
);
export const DeleteSlideShowImage = createAction(
  ESlideShowActions.DELETE_SLIDESHOW_IMAGE,
  props<{ payload: IPicture[] }>()
);
export const DeleteSlideShowImageSuccess = createAction(
  ESlideShowActions.DELETE_SLIDESHOW_IMAGE_SUCCESS,
  props<{ payload: IPicture[] }>()
);
export const UpdateSelectedSlideShowImage = createAction(
  ESlideShowActions.UPDATE_SELECTED_SLIDESHOW_IMAGE,
  props<{ payload: IPicture }>()
);
