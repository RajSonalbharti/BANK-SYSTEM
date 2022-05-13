import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-IT_UtU_BZnl6YQhs5JfTRiMp91uB9F8",
  authDomain: "banksystem-da90e.firebaseapp.com",
  projectId: "banksystem-da90e",
  storageBucket: "banksystem-da90e.appspot.com",
  messagingSenderId: "337931615055",
  appId: "1:337931615055:web:bad6c7b4c268e286a7233a",
  measurementId: "G-1WHKWC71EE"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export const addUser = ([name, email, accountno, balance]) => {
  return db
    .collection("users")
    .add({ name: name, email:email, accountno: accountno, balance: balance });
};

export const addTransaction = ( receiver, sender, amount) => {
  return db
    .collection("transactions")
    .add({ receiver: receiver, sender: sender, amount: amount, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
};

export const transact = (id1, balance1, id2, balance2, amount) => {
  return [db.collection("users").doc(id1).update({
    balance: Number(balance1) - Number(amount)
  }),
  db.collection("users").doc(id2).update({
    balance: Number(balance2) + Number(amount)
  })]

}

export { db };
  //firebase.initializeApp(firebaseConfig);
  //export default firebase