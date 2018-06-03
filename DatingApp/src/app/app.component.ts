import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseService } from './services/firebase.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  title = 'app';
  users: Users[];
  gender: Gender[];
  appState: string;

	constructor(private _firebaseService: FirebaseService) {
	}

	ngOnInit() {
		this.appState = 'default';
		this._firebaseService.getUsers().subscribe(users => {
			this.users = users;
		});
		this._firebaseService.getGender().subscribe(gender => {
			this.gender = gender;
		});
	}


	filterGender(gender) {
	  this._firebaseService.getUsers(gender).subscribe(users=> {
	    this.users = users;
	  })
	}

	/* increment likes */
	addLikes(a, b) {
    	b += 1;
    	this._firebaseService.inc(a, b);
    }

}

export interface Users {
  $key?: string;
  gender?: string;
  name?: string;
  surname?: string;
  age?: number;
  photo?: string;
  inRelation?: boolean;
  likes?: number;
}
export interface Gender {
  $key?: string;
  gender?: string;
}

