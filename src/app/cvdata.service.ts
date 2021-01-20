import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CVDataService {

  allCvData: any;

  constructor() { }

  setData(data){
    this.allCvData = data;
  }
  getData(data){
    return this.allCvData;
  }
}
