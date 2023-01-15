import{ getApp, getApps, initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCkFjnGnf9vfSGm70Kf4LUpONVXHDg8Lkc",
    authDomain: "feasty-f8881.firebaseapp.com",
    databaseURL: "https://feasty-f8881-default-rtdb.firebaseio.com",
    projectId: "feasty-f8881",
    storageBucket: "feasty-f8881.appspot.com",
    messagingSenderId: "490972103075",
    appId: "1:490972103075:web:55b782d63755bbdd6a1a16"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export{app, firestore, storage}