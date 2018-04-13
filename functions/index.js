const functions = require('firebase-functions');

const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase);

const stripe = require('stripe')(functions.config().stripe.testkey)
exports.createStripeCustomer = functions.auth.user().onCreate(event => {
    // user auth data
    const user = event.data;
    
    // register Stripe user
    return stripe.customers.create({
    email: user.email
      })
      .then(customer => {
    /// update database with stripe customer id
    
    const data = { customerId: customer.id }
        
        const updates = {}
        updates[`/customers/${customer.id}`]     = user.uid
        updates[`/users/${user.uid}/customerId`] = customer.id
        
        
        return admin.database().ref().update(updates);
      });
  });