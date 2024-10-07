import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {RestApiService} from '../../../rest-api.service';

@Component({
  selector: 'app-input-photo',
  templateUrl: './input-photo.component.html',
  styleUrls: ['./input-photo.component.scss']
})
export class InputPhotoComponent implements OnInit {

  @Input() input: any;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  @Output() itemEvent = new EventEmitter<string>();

  foto: string;

  constructor(private api: RestApiService) {
    this.foto = this.api.urlServer + '/images/user.jpg';
    this.input = {
      value: '',
      round: false
    };
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    // const index = this.onCV.findIndex(x => x.control === 'Foto');
    // this.onCV[index].value = event.base64;
    // this.getTemplateRender();
    this.itemEvent.emit(event.base64);
  }
  // imageLoaded(image: HTMLImageElement) {
  //   // show cropper
  // }
  imageLoaded(image: any) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  ngOnInit(): void {
  }

}
