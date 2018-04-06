import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import { User } from './User';
import {switchMap} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class AfService {
  user$: Observable<User>;
  constructor(public afAuth: AngularFireAuth ,
              public afs: AngularFirestore) {
    this.user$ = afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>('users/$(user.uid)').valueChanges();
      } else {
        return Observable.of(null);
      }
    });
   }
   loginWithGoogle() {
     const privider = new firebase.auth.GoogleAuthProvider();
     this.afAuth.auth.signInWithPopup(privider).then((credential) => {
        this.updateUser(credential.user);
     });
   }

   updateUser(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc('users/$(user.uid)');
      const data: User = {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        roles: {
          subscriber: true,
          admin: false
        }
      };
      return userRef.set(data, {merge: true});
   }

   logout() {
     this.afAuth.auth.signOut();
   }

}
