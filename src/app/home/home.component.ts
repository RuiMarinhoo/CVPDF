import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = [{name: 'Rui', age: '26'}, {name: 'Ricardo', age: '26'}];

  constructor(private router: Router) {
    console.table(this.users);
  }

  goTo(nav){
    this.router.navigate([nav]);
  }

  ngOnInit(): void { }

}
