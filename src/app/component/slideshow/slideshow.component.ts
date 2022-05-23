import { selectCurrentlySelectedPicture } from './../../store/selectors/slideshow.selectors';
import {
  UpdateSelectedSlideShowImage,
  DeleteSlideShowImage,
  AddSlideShowImage,
} from './../../store/actions/slideshow.action';
import { IAppState } from './../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { selectSlideShowPictures } from '../../store/selectors/slideshow.selectors';
import {
  NgbCarousel,
  NgbModal,
  NgbSlideEvent,
} from '@ng-bootstrap/ng-bootstrap';
import { map, take, withLatestFrom } from 'rxjs/operators';
import { combineLatest, pipe, Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPicture } from '../../model/model';

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

  imageUploadForm = new FormGroup({
    imageTitle: new FormControl('', Validators.required),
    imageCaption: new FormControl(''),
    imageUrl: new FormControl('https://i.imgur.com/oyTPssF.jpeg'),
    imageFile: new FormControl(File),
  });
  @ViewChild('myCarousel', { static: true }) ngCarousel!: NgbCarousel;

  constructor(public store: Store<IAppState>, private modalService: NgbModal) {}
  ngOnInit(): void {}

  slideChange(ngbSlideEvent: NgbSlideEvent) {
    let index = Number(ngbSlideEvent.current.replace('ngb-slide-', ''));
    console.log(ngbSlideEvent);
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

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log(`Closed with: ${result}`);
        },
        (reason) => {
          console.log(`Dismissed ` + reason);
        }
      );
  }
  onUpload() {
    this.modalService.dismissAll('Form Uploaded');
    let image: IPicture = {
      title: this.imageUploadForm.get('imageTitle').value,
      caption: this.imageUploadForm.get('imageCaption').value,
      url: this.imageUploadForm.get('imageUrl').value,
    };
    this.store.dispatch(AddSlideShowImage({ payload: image }));
  }
  uploadViaFiileUpload() {
    alert('Sorry this feature is still under development!! ');
  }

  openAdminConfig() {
    alert('Sorry this feature is still under development!! ');
  }
}
