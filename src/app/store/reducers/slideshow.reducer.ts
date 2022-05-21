import { SlideShowActions, ESlideShowActions } from './../actions/slideshow.action';
import { initialSlideShowState } from './../state/slideshow.state';
import { ISlideshowState } from '../state/slideshow.state';

export const SlideShowReducer = (
  state =  initialSlideShowState,
  action: SlideShowActions
): ISlideshowState => {

  switch(action.type){
    case ESlideShowActions.ADD_SLIDESHOW_IMAGE_SUCCESS: {
      return {
        ...state,
        pictures: [...state.pictures,...action.payload]
      };
    }
    case ESlideShowActions.DELETE_SLIDESHOW_IMAGE_SUCCESS: {
      return {
        ...state,
        pictures: state.pictures.filter(val => !action.payload.includes(val))
      };
    }
    case ESlideShowActions.GET_INITIAL_SLIDESHOW_DATA_SUCCESS: {
      return {
        ...state,
        pictures: action.payload
      }
    }
    case ESlideShowActions.UPDATE_SELECTED_SLIDESHOW_IMAGE: {
      return {
        ...state,
        selectedImage: action.payload
      }
    }

    default:
      return state;
  }
}
