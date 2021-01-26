import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CVDataService {

  allCvData: any;

  constructor(private http: HttpClient) { }

  setData(data){
    this.allCvData = data;
  }
  getData(data){
    return this.allCvData;
  }

  renderPDF(m, d){
    return this.http.post('http://localhost:3000/generateCV/render', {modelo: m, data: d}, { responseType: 'text' })
      .toPromise().then(value => {
        return value;
      });
  }

  getPDF(){
    return this.http.get('/users', { responseType: 'text' })
      .toPromise().then(value => {
        return value;
    });
  }
}
