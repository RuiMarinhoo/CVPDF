import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  variaveis = [
    'Foto',
    'Nome', 'Morada', 'Contacto', 'E-mail',
    'Linguas',
    'Personalidade',
    'Hobbies',
    'Perfil',
    'Educacao',
    'Experiencia',
    'Certificados',
    'Skills'
  ];

  constructor() { }

  getVariaveis(){
    return this.variaveis;
  }

  getHTML(template, data){
    const left = [];
    const right = [];

    let dataToPDF = JSON.parse(JSON.stringify(data));
    // console.log(dataToPDF);
    dataToPDF = this.setHTML(dataToPDF);

    dataToPDF.forEach( val => {
      if (val.position){
        right.push(val);
      }
      else{
        left.push(val);
      }
    });

    return {left, right};
  }



  setHTML(data){
    for (let i = 0; i < data.length; i++ ){
      switch (data[i].control){
        case 'Foto':
          data[i].control = 'photo';
          break;
        case 'Nome':
          data[i].control = 'name';
          break;
        case 'Morada':
          data[i].control = 'address';
          break;
        case 'Contacto':
          data[i].control = 'contact';
          break;
        case 'E-mail':
          data[i].control = 'email';
          break;
        case 'Linguas':
          data[i].control = 'language';
          break;
        case 'Personalidade':
          data[i].control = 'personality';
          break;
        case 'Hobbies':
          data[i].control = 'hobbies';
          break;
        case 'Perfil':
          data[i].control = 'profile';
          break;
        case 'Educacao':
          data[i].control = 'education';
          break;
        case 'Experiencia':
          data[i].control = 'experience';
          break;
        case 'Certificados':
          data[i].control = 'certificates';
          break;
        case 'Skills':
          data[i].control = 'skills';
          break;
      }
    }
    return data;
  }

}
