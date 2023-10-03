import app from "./firebase.config";
import {
	getFirestore,
} from 'firebase/firestore';

const db = getFirestore(app);
console.log({ db });

export default db;