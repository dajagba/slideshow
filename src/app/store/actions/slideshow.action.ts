import { Action } from '@ngrx/store';
import { IPicture } from 'src/app/model/model';

export enum ESlideShowActions{

  GET_INITIAL_SLIDESHOW_DATA = '[SlideShow] Fetch Initial Data',
  GET_INITIAL_SLIDESHOW_DATA_SUCCESS = '[SlideShow] Fetch Initial Data Success',
  ADD_SLIDESHOW_IMAGE = '[SlideShow] Add SlideShow Image',
  ADD_SLIDESHOW_IMAGE_SUCCESS = '[SlideShow] Add SlideShow Image Success',
  DELETE_SLIDESHOW_IMAGE = '[SlideShow] Delete SlideShow Image ',
  DELETE_SLIDESHOW_IMAGE_SUCCESS = '[SlideShow] Delete Slideshow Image Sucess',
  UPDATE_SELECTED_SLIDESHOW_IMAGE = '[SlideShow] Update Selected SlideShow Image'
}

export class GetInitialSlideShowData implements Action{
  public readonly type = ESlideShowActions.GET_INITIAL_SLIDESHOW_DATA;
}

export class GetInitialSlideShowDataSuccess implements Action {
  public readonly type = ESlideShowActions.GET_INITIAL_SLIDESHOW_DATA_SUCCESS;
  constructor(public payload:IPicture[] ){}
}

export class AddSlideShowImage implements Action {
  public readonly type = ESlideShowActions.ADD_SLIDESHOW_IMAGE;
  constructor(public payload: IPicture[]){}
}

export class AddSlideShowImageSuccess implements Action {
  public readonly type = ESlideShowActions.ADD_SLIDESHOW_IMAGE_SUCCESS;
  constructor(public payload: IPicture[]){}
}

export class DeleteSlideShowImage implements Action {
  public readonly type = ESlideShowActions.DELETE_SLIDESHOW_IMAGE;
  constructor(public payload: IPicture[]){}
}

export class DeleteSlideShowImageSuccess implements Action {
  public readonly type = ESlideShowActions.DELETE_SLIDESHOW_IMAGE_SUCCESS;
  constructor(public payload: IPicture[]
    ){}
}

export class UpdateSelectedSlideShowImage implements Action {
  public readonly type = ESlideShowActions.UPDATE_SELECTED_SLIDESHOW_IMAGE;
  constructor(public payload: IPicture){}
}

export type SlideShowActions = GetInitialSlideShowData | GetInitialSlideShowDataSuccess | UpdateSelectedSlideShowImage|
AddSlideShowImage | AddSlideShowImageSuccess | DeleteSlideShowImage | DeleteSlideShowImageSuccess
