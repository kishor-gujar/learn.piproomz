import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { User } from './User';
import {switchMap} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { NotifyService } from '../notiy.service';

@Injectable()
export class AfService {
  user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {
    this.user = afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
   }
  
    //  Email password Auth 
    emailSignup(email: string, password: string) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
          return this.setUserDoc(user) // create initial user document
        })
        .catch(error => this.handleError(error));
     }

     // If error, console log and notify user
  private handleError(error) {
    console.error(error)
    this.notify.update(error.message, 'error')
  }


   private setUserDoc(user) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      const data: User = {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        active: false,
        roles: {
          subscriber: false,
          admin: false
        },
        address: {
          city: null,
          country: null,
          full_address: null,
          postal: null,
          street_name: null
        }
      };
      return userRef.set(data);
   }

   logout() {
     this.afAuth.auth.signOut();
   }

  //  update propertis on the user document 
  updateUser(user: User, data: any) {
    return this.afs.doc(`users/${user.uid}`).update(data);
  }


  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
