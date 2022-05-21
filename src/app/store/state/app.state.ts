import { ISlideshowState, initialSlideShowState } from './slideshow.state';

export interface IAppState{
  slideshow: ISlideshowState;
}

export const iniitialAppState:IAppState = {
  slideshow: initialSlideShowState
}

export function getInitialState(): IAppState {
    return iniitialAppState;
}
