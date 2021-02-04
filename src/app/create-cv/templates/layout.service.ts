import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  f1 =
    [
      {
        variaveis: [
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
        ]
      }
    ];

  constructor() { }

  getVariaveis(t){
    // console.log(t);
    switch (t){
      case 'f1':
        return this[t][0].variaveis;

      default:
        return '';
    }
  }

  getClassName(data){
    switch (data.control){
      case 'Foto':
        let f = '<div class="photo">';
        if (data.value){
          f += '<img src="' + data.value + '"></div>';
        }
        else {
          f += '<img src="https://pocosdaserra.com/assets/img/empty-avatar.png?h=9fd640d37535cccffab9d5957bdf43ba"></div>';
        }
        return f;
      case 'Nome':
        return `<p class="name">` + data.value + `</p>`;
      case 'Morada':
        return `<div class="address">
                    <p>` + data.value + `</p>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                </div>`;
      case 'Contacto':
        return `<div class="contact">
                    <p>` + data.value + `</p>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                </div>`;
      case 'E-mail':
        return `<div class="email">
                    <p>` + data.value + `</p>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                </div>`;
      case 'Linguas':
        let l = '<div class="language"><p class="title">Línguas</p>';

        data.value.forEach( val => {
          l += '<p>' + val.tipo + '</p>';
          for (let i = 1; i <= 5; i++){
            if (i <= val.value){
              l += '<div class="dots dotActive"></div>';
            }
            else {
              l += '<div class="dots"></div>';
            }
          }
        });
        l += '</div>';
        return l;
      case 'Personalidade':
        let p = '<div class="personality"><p class="title">Personalidade</p>';
        data.value.forEach( val => {
          p += '<div class="quality"><p>' + val.value + '</p>';
          p += '<span class="checkmark">' +
            '<div class="checkmark_stem"></div>' +
            '<div class="checkmark_kick"></div>' +
            '</span></div>';
        });
        p += '</div>';
        return p;
      case 'Hobbies':
        let h = '<div class="hobbies"><p class="title">Hobbies</p><div class="allHobbies">';
        data.value.forEach( val => {
          h += '<div class="hobbieInfo"><img class="icon" src="https://pocosdaserra.com/assets/img/empty-avatar.png?h=9fd640d37535cccffab9d5957bdf43ba">\n' +
            '<p>' + val.value + '</p></div>';
        });
        h += '</div></div>';
        return h;
      case 'Perfil':
        return `<div class="profile">
                    <p class="title">perfil</p>
                    <p>` + data.value + `</p>
                </div>`;
      case 'Educacao':
        let ed = '<div class="education"><p class="title">Educação</p>';
        data.value.forEach( val => {
          ed += '<div class="educationInfo"><p>' + val.data + '</p><p><strong>' + val.local + '</strong></p><p>' + val.texto + '</p></div>';
        });
        ed += '</div>';
        return ed;
      case 'Experiencia':
        let ex = '<div class="experience"><p class="title">Experiência Profissional</p>';
        data.value.forEach( val => {
          ex += '<div class="educationInfo"><p>' + val.data + '</p><p><strong>' + val.local + '</strong></p><p>' + val.texto + '</p></div>';
        });
        ex += '</div>';
        return ex;
      case 'Certificados':
        let c = '<div class="certificates"><p class="title">Certificados</p><ul>';
        data.value.forEach( val => {
          c += '<li>' + val.value + '</li>';
        });
        c += '</ul></div>';
        return c;
      case 'Skills':
        let s = '<div class="skills"><p class="title">Competências</p>';

        data.value.forEach( val => {
          s += '<p>' + val.tipo + '</p>';
          for (let i = 1; i <= 5; i++){
            if (i <= val.value){
              s += '<div class="dots dotActive"></div>';
            }
            else {
              s += '<div class="dots"></div>';
            }
          }
        });
        s += '</div>';
        return s;
    }
  }

  getHTML(data){
    let left = '';
    let right = '';

    data.forEach( val => {
      if (val.position){
        right += this.getClassName(val);
      }
      else{
        left += this.getClassName(val);
      }
    });
    // console.log(left);
    // console.log(right);
    return {left, right};
  }

}
