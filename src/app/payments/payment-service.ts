import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';


@Injectable()
export class PaymentService {
  userId: string;
  membership: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {

    this.membership = this.afAuth.authState
      .do(user => this.userId = user.uid)
      .switchMap( user => {
        return this.db.object(`users/${user.uid}/pro-membership`);
      });
  }

    processPayment(token: any) {
      return this.db.object(`/users/${this.userId}/pro-membership`)
                    .update({ token: token.id });
    }

}
