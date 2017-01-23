import secretConfig from "../../secretConfig.js"

import firebase from 'firebase'

firebase.initializeApp(secretConfig.firebase);

export default firebase;