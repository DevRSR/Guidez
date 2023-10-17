/*import { initializeApp } from 'firebase/app';
import {
  getFirestore,collection,addDoc,
  onSnapshot
} from 'firebase/firestore';
import {
  getAuth,createUserWithEmailAndPassword,
  signOut,signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCh3JB_885stUVIwZFTBdK4jNcwO8BRwTQ",
  authDomain: "cloud-function-31088.firebaseapp.com",
  projectId: "cloud-function-31088",
  storageBucket: "cloud-function-31088.appspot.com",
  messagingSenderId: "956344448510",
  appId: "1:956344448510:web:f278a605297dc3980fbcaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore();
const auth = getAuth();

const colRef = collection(db,'guide')

onAuthStateChanged(auth).then((user) => {
  alert(user)
  setupUI(user)
  if(user) {
   onSnapshot(colRef, (snapshot) => {
    setupGuide(snapshot.doc)
  })
  }else {
    setupGuide([])
  }
})
   onSnapshot(colRef, (snapshot) => {
    setupGuide(snapshot.doc)
  })

createForm.addEventListener('submit',(e) => {
  e.preventDefault();
   let title = createForm.title.value;
   let body = createForm.body.value;
  addDoc(colRef, {
    title: title,
    body: body
  }).then(() => {
    createForm.reset();
  }).catch(e => {
    alert(e.message)
  })
})

signupForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  let email = signupForm.email.value;
  let password = signupForm.password.value;
  
  createUserWithEmailAndPassword(auth,email,password).then(() => {
    signupForm.reset();
  }).catch((e) => {
    alert(e.message)
  })
})


loginForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  let email = signupForm.email.value;
  let password = signupForm.password.value;
  
  signInWithEmailAndPassword(auth,email,password).then(() => {
    loginForm.reset();
  }).catch((e) => {
    alert(e.message)
  })
})
logout.addEventListener('click', () => {
  signOut(auth)
   .then(() => {
     alert('user logged out')
   }).catch(e => {
     alert(e.message)
   })
})

*/