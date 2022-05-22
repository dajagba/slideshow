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
    // let index = Number(ngbSlideEvent.current.replace('ngb-slide-', ''));

    combineLatest(this.currentSelectedPicuture$, this.slideShowPictures$)
      .pipe(take(1))
      .subscribe(([currentSelectedPicture, slideShowPictures]) => {
        console.log(
          `Current selected id: ${currentSelectedPicture},
         Slideshow Images: ${slideShowPictures}`
        );
        // UpdateSelectedSlideShowImage({payload: })
      });
    console.log(ngbSlideEvent);
    this.slideShowPictures$.pipe(take(1)).subscribe((data) => {
      // this.store.dispatch( UpdateSelectedSlideShowImage({payload: data[index]}));
    });
  }

  deleteSlideShowImage() {
    combineLatest(this.currentSelectedPicuture$, this.slideShowPictures$)
      .pipe(take(1))
      .subscribe(([currentSelectedPicture, slideShowPictures]) => {
        console.log(
          `Current selected id: ${currentSelectedPicture},
         Slideshow Images: ${slideShowPictures}`
        );
        // this.ngCarousel.select(`ngb-slide-${index}`);
        this.ngCarousel.next();
        console.log('DELETING: ', currentSelectedPicture);
        this.store.dispatch(
          DeleteSlideShowImage({ payload: [currentSelectedPicture] })
        );
      });

    // this.currentSelectedPicuture$.pipe(take(1)).subscribe((data) => {
    //   this.store.dispatch(DeleteSlideShowImage({payload: [data]}))
    //   this.store.dispatch( UpdateSelectedSlideShowImage({payload: data[index]}));

    // });
    // this.ngCarousel.next();
  }
  // navigateToSlide(index) {
  //   this.ngCarousel.select(`ngb-slide-${index}`);
  // }
}
