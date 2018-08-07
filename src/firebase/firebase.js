import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBrb7203i1OXieBBddOxWLaFfid7vT0ORc',
  authDomain: 'reactfirebaseauthtutoria-13975.firebaseapp.com',
  databaseURL: 'https://reactfirebaseauthtutoria-13975.firebaseio.com',
  projectId: 'reactfirebaseauthtutoria-13975',
  storageBucket: 'reactfirebaseauthtutoria-13975.appspot.com',
  messagingSenderId: '134237114276'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export { auth }
