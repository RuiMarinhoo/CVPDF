import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CVDataService {

  allCvData: any;

  urlServer = 'https://cvserverapp.herokuapp.com/generateCV';
  // urlServer = 'http://localhost:3000/generateCV';
  urlRender = '/render';

  constructor(private http: HttpClient) { }

  setData(data){
    this.allCvData = data;
  }
  getData(){
    return this.allCvData;
  }

  renderPDF(m, d){
    return this.http.post(this.urlServer + this.urlRender, {modelo: m, data: d}, { responseType: 'text' })
      .toPromise().then(value => {
        return value;
      });
  }

  getPDF(m, d){
    return this.http.post(this.urlServer, {modelo: m, data: d}, { responseType: 'text' })
      .toPromise().then(value => {
        return value;
      });
  }
}
