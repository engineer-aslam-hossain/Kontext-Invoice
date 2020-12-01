import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase.config';

export const initializedFirebase = () => {
  firebase.initializeApp(firebaseConfig);
};

export const signInWithEmail = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      const signedInUserInfo = res.user;
      signedInUserInfo.error = '';
      signedInUserInfo.success = 'User Sign In Successfully';
      return signedInUserInfo;
    })
    .catch(error => {
      // Handle Errors here.
      var errorMessage = error.message;
      const signedInUserError = {};
      signedInUserError.error = errorMessage;
      signedInUserError.success = '';
      return signedInUserError;
    });
};

export const googleSignInHandler = e => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      return result.user;
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorMessage = error.message;
      return errorMessage;
    });
};

export const fbSignInHaldler = () => {
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      setTokenUser();
      console.log('fb user info', user);
      return user;
      // ...
    })
    .catch(function (error) {
      var errorMessage = error.message;
    });
};

const setTokenUser = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      sessionStorage.setItem('token', idToken);
    })
    .catch(function (error) {
      // Handle error
    });
};

export const createUserWithEmail = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      const createUserInfo = res.user;
      createUserInfo.error = '';
      createUserInfo.success = 'User Created Successfully';
      return createUserInfo;
    })
    .catch(error => {
      // Handle Errors here.
      var errorMessage = error.message;
      const createUserError = {};
      createUserError.error = errorMessage;
      createUserError.success = '';
      return createUserError;
    });
};
