import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyANEZ-_zv0oeKqsAJigZ_-Kb5gHGt4zSps",
  authDomain: "getshitdone-e7f87.firebaseapp.com",
  databaseURL: "https://getshitdone-e7f87.firebaseio.com",
  projectId: "getshitdone-e7f87",
  storageBucket: "getshitdone-e7f87.appspot.com",
  messagingSenderId: "344852769619",
  appId: "1:344852769619:web:af98a2f8dce124000d8fa6",
}

const fireApp = firebase.initializeApp(config)

export const converCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const task = doc.data()
    return {
      task,
    }
  })
  const mapped = transformedCollection.map((el) => {
    return el.task
  })

  return mapped
}
const db = fireApp.firestore()
export { db }

export const addPreset = (collectionKey, preset) => {
  let random = Math.random()
  let key = random.toString()
  console.log(key)

  db.collection(collectionKey).doc(key).set({
    preset,
  })
}

export const deleteTaskDocument = (collectionKey, key) => {
  let stringKey = key.toString()
  db.collection(collectionKey).doc(stringKey).delete()
}

export const updateTaskDocument = (collectionKey, key, newStage) => {
  let stringKey = key.toString()
  db.collection(collectionKey).doc(stringKey).update({
    stage: newStage,
  })
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
