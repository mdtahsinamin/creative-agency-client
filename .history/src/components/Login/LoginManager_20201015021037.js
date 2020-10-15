import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () =>{
    if(firebase.apps.length === 0){
      firebase.initializeApp(firebaseConfig);
    }
}

export const continueWithGoogle = () =>{
    let  provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider).then(res=> {
        const {displayName,email,photoURL} = res.user;
        const googleUser = {
            isLogin : true,
            name : displayName,
            email:email,
            photoURL: photoURL,
            success:true
        }
        return googleUser;
    }).catch((error)=> {
        console.log(error);
        
    });

}