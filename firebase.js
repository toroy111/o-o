import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
 getDatabase,
 ref,
 push,
 onValue,
 update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
 apiKey: "你的APIKEY",
 authDomain: "toroy111-3219c.firebaseapp.com",

 databaseURL:
 "https://toroy111-3219c-default-rtdb.asia-southeast1.firebasedatabase.app",

 projectId: "toroy111-3219c",

 storageBucket:
 "toroy111-3219c.appspot.com",

 messagingSenderId: "XXXXXXXX",

 appId: "XXXXXXXX"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export {
 db,
 ref,
 push,
 onValue,
 update
};