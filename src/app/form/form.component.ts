import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // define some form objects
  username = null;
  altusername = null;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  // getUser for BehaviorSubject workflow, instead of trying to bring the data back
  // we just want to update the BehaviorSubject.
  getUser() {
    console.log(this.username);
    // tell the service to update behavior subject
    this._http.retrieveUser(this.username);
    this.username = null;
  }

  // getUser for Callback workflow, good for trying to bring data to a single component
  getUserAlt() {
    // make sure to pass arrow functions
    this._http.getGithubUser(this.username, (data) => {
      this.altusername = data;
      console.log(this.altusername);
    })
  }

}
