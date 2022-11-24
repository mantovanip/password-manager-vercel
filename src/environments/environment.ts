// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//export é um comando nativo js, exporta para escopo global
export const firebaseConfig = {
  apiKey: "AIzaSyCWsiSIK7AtpgWonQi6rGGHOAXG7r1ypFo",
  authDomain: "password-gc.firebaseapp.com",
  projectId: "password-gc",
  storageBucket: "password-gc.appspot.com",
  messagingSenderId: "533764701534",
  appId: "1:533764701534:web:d1a9a6cdd3a42d044c63cf",
  measurementId: "G-W7EVF6ZM0T"
};
