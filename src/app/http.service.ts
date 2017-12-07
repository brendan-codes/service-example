import { Injectable } from '@angular/core';
// need Rxjs for the BehaviorSubject type
import { BehaviorSubject } from 'Rxjs';
// http CLIENT not just HTTP
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  // using the Rxjs library, here we create a new instance of the behavior subject class.
  // the <> symbols mean it's a Type Assertion, which is a kind of 'loose'.
  // Type Assertions can be overwritten by other types.

  // finally, we're typing it as any[], which means it will most likely be an array
  // of any type of value.
  users: BehaviorSubject<any[]> = new BehaviorSubject([]);

  githubUser = null;
  
  // constructor only to bring in the module
  constructor(private _http: HttpClient) { }

  // === A. using BehaviorSubject ====

  // retrieve user for observable workflow
  retrieveUser(username) {
    // http request, subscribe for the response
    this._http.get('https://api.github.com/users/' + username).subscribe(
      // arrow function to not lose references, 'user: any[]' is the response
      (user: any[]) => { 
        // PUSH THE RESPONSE INTO .NEXT
        this.users.next(user);
        // console log for posterity!
        console.log(this.users); 
      }
    )
  };

  // === B. using Callback ===
  
  // pass a username AND a callback
  getGithubUser(username, callback){
    // http request, subscribe for the response
    this._http.get('https://api.github.com/users/' + username).subscribe(
      // run the passed callback, give the response data to it
      (data) => callback(data)
    );
  }

}
