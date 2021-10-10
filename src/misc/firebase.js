import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBM_mtL0ASLhfK6rdwjli-JzSZMa8uBEbA',
  authDomain: 'chat-web-application-d86da.firebaseapp.com',
  projectId: 'chat-web-application-d86da',
  storageBucket: 'chat-web-application-d86da.appspot.com',
  messagingSenderId: '929240284866',
  appId: '1:929240284866:web:26532bd84a34d6b60c455b',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
