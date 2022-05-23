import { selectCurrentlySelectedPicture } from './../../store/selectors/slideshow.selectors';
import {
  UpdateSelectedSlideShowImage,
  DeleteSlideShowImage,
} from './../../store/actions/slideshow.action';
import { IAppState } from './../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { selectSlideShowPictures } from '../../store/selectors/slideshow.selectors';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { map, take, withLatestFrom } from 'rxjs/operators';
import { combineLatest, pipe, Observable } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit {
  public slideShowPictures$ = this.store.pipe(select(selectSlideShowPictures));
  public currentSelectedPicuture$ = this.store.pipe(
    select(selectCurrentlySelectedPicture)
  );

  @ViewChild('myCarousel', { static: true }) ngCarousel!: NgbCarousel;
  constructor(public store: Store<IAppState>) {}
  ngOnInit(): void {}

  slideChange(ngbSlideEvent: NgbSlideEvent) {
    let index = Number(ngbSlideEvent.current.replace('ngb-slide-', ''));
    this.slideShowPictures$.pipe(take(1)).subscribe((data) => {
      let image = data.find((val) => val.index == index);
      this.store.dispatch(UpdateSelectedSlideShowImage({ payload: image }));
    });
  }

  deleteSlideShowImage() {
      this.currentSelectedPicuture$.pipe(take(1)).subscribe((data) => {
      this.store.dispatch(DeleteSlideShowImage({ payload: [data] }));
      this.ngCarousel.next();
    });
  }
}
