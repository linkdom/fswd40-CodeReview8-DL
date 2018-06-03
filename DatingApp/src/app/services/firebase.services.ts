import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseService{
  users: FirebaseListObservable<Users[]>;
  gender: FirebaseListObservable<Gender[]>;

  constructor(private af: AngularFireDatabase) {
    
  }

  getUsers(gender: string = null) {
      /* for all output in select */
      if (gender == 'all') {
            this.users = this.af.list('/users') as FirebaseListObservable<Users[]>;
        }
      /* For Gender Selection */
      else if (gender != null) {
          this.users = this.af.list('/users', {
              query: {
                  orderByChild: 'gender',
                  equalTo: gender
              }
          }) as FirebaseListObservable<Users[]>;
      } else {
          this.users= this.af.list('/users') as FirebaseListObservable<Users[]>;
      }
      return this.users;
  }


/* Get Gender data */
  getGender() {
      this.gender= this.af.list('/gender') as FirebaseListObservable<Gender[]>;
      return this.gender ;
  }

/* get like data */
  inc(a, b):void {
        this.af.object('/users/' + a).update({likes: b});
      
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