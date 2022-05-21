import { IPicture } from './../../model/model';

export interface ISlideshowState{
  pictures?: IPicture[];
  lastUpdatedTime: Date;
  selectedImage: IPicture;
}

export const initialSlideShowState: ISlideshowState = {
  pictures: null,
  lastUpdatedTime: null,
  selectedImage: null,
}
