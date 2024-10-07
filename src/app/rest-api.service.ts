import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  allCvData: any;

  // urlServer = 'https://cvserverapp.herokuapp.com/generateCV';
  // urlServer = 'https://cvserver-backend-latest.onrender.com/generateCV';
  // urlServer = 'https://cvserver-cbr1.onrender.com/generateCV';
  urlServer = 'http://localhost:3000';
  urlGenerate = '/generateCV';
  urlRender = '/render';

  constructor(private http: HttpClient) { }

  setData(data){
    this.allCvData = data;
  }
  getData(){
    return this.allCvData;
  }

  renderPDF(m, d){
    return this.http.post(this.urlServer + this.urlGenerate + this.urlRender, {modelo: m, data: d}, { responseType: 'text' })
      .toPromise().then(value => {
        return value;
      });
  }

  getPDF(m, d){
    return this.http.post(this.urlServer + this.urlGenerate, {modelo: m, data: d}, { responseType: 'text' })
      .toPromise().then(value => {
        return value;
      });
  }
}
