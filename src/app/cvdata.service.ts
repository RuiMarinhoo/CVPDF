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

  getPDF(){
    return this.http.get('https://cvserver.azurewebsites.net/users', { responseType: 'text' })
      .toPromise().then(value => {
        return value;
    });
  }
}
