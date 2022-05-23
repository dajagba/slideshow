import { AddSlideShowImageSuccess, DeleteSlideShowImageSuccess, GetInitialSlideShowDataSuccess, UpdateSelectedSlideShowImage } from './../actions/slideshow.action';
import { initialSlideShowState } from './../state/slideshow.state';
import { createReducer, on } from '@ngrx/store';
import { selectCurrentlySelectedPicture } from '../selectors/slideshow.selectors';

export const slideShowReducer = createReducer(
  initialSlideShowState,
  on(GetInitialSlideShowDataSuccess, (state, action) => ({
    ...state,
    lastUploadedImage: action.payload[action.payload.length-1],
    pictures: action.payload})),
  on(AddSlideShowImageSuccess, (state,action)=> ({
    ...state,
    lastUploadedImage: action.payload[action.payload.length-1],
    pictures:[...state.pictures,...action.payload]
  })),
  on(DeleteSlideShowImageSuccess, (state,action)=> (
    {
    ...state,
    pictures: [...state.pictures.filter( x => !action.payload.includes(x))],
  })),
  on(UpdateSelectedSlideShowImage, (state,action)=> ({
    ...state,
    selectedImage: action.payload
  }))
  );

