import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  user;

  constructor(private _http: HttpService) { }

  // when this component inits, it subscribes to the behavior subject,
  // then when the behavior subject gets updated, this component already
  // has access to the http request. now we can share data without nesting
  // or writing input/outputs!
  ngOnInit() {
    // we subscribe to the USERS behaviorsubject directly
    this.user = this._http.users.subscribe(
      (user) => { this.user = user }
    );
  }

  // this method is to check what data we have stored in our behavior subject
  checkUser() {
    this.user = this._http.users.subscribe(
      (user) => { 
        this.user = user;
        console.log(user); 
      }
    );
  }

}
