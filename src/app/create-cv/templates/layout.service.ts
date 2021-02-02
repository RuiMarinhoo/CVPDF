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
    console.log(t);
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
                    <img class="icon">
                </div>`;
      case 'Contacto':
        return `<div class="contact">
                    <p>` + data.value + `</p>
                    <img class="icon">
                </div>`;
      case 'E-mail':
        return `<div class="email">
                    <p>` + data.value + `</p>
                    <img class="icon">
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
    console.log(left);
    console.log(right);
    return {left, right};
  }

}
