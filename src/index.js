import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  firebaseConfig from './firebase-config';
import{
  FirebaseAppProvider
  
}from 'reactfire'; // importamos libreria

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render((
 
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conect App ...:)'} >
    <App />
    </Suspense>
    </FirebaseAppProvider>

),
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
