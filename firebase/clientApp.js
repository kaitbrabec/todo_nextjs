"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var database_1 = require("firebase/database");
var firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: "https://todoapp-fac75-default-rtdb.europe-west1.firebasedatabase.app/",
};
var app = (0, app_1.initializeApp)(firebaseConfig);
console.log("We initialized Firebase");
var database = (0, database_1.getDatabase)(app);
console.log("We got the database");
function writeUserData(users, name, nickname) {
    var db = (0, database_1.getDatabase)();
    (0, database_1.set)((0, database_1.ref)(db, 'users/' + users), {
        users: users,
        name: name,
        nickname: nickname
    });
}
console.log(writeUserData("username", "John", "Johny"));
