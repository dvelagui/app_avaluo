import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { defineStore } from "pinia";
import { auth, db } from "../firebaseConfig";

export const userDatabaseStore = defineStore("database", {
  state: () => ({
    documents: null,
    loadingUser: false,
  }),
  actions: {
    async createUserData(email, uid, nickname, typeUser) {
      try {
        const data = {
          email: email,
          uid: uid,
          nickname: nickname,
          typeUser: typeUser,
          phone: "",
          avatar:
            "https://firebasestorage.googleapis.com/v0/b/avaluo-en-linea-colombia.appspot.com/o/user-default%2Fprofile-default.png?alt=media&token=88dc6558-2399-4416-8710-3489531fb39d",
          imgCover:
            "https://firebasestorage.googleapis.com/v0/b/avaluo-en-linea-colombia.appspot.com/o/user-default%2Fcover.png?alt=media&token=50619635-6d7f-4ddd-843a-3bcd867796b8",
        };
        await addDoc(collection(db, "users"), data);
      } catch (error) {
        console.log(error);
      }
    },
    async getUserData() {
      this.loadingUser = true;
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("uid", "==", auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (!this.documents) {
            this.documents = {
              id: doc.id,
              ...doc.data(),
            };
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async UpdateUserData(field, val) {
      this.loadingUser = true;
      try {
        const docRef = doc(db, "users", this.documents.id);

        switch (field) {
          case this.documents.nickname:
            await updateDoc(docRef, {
              nickname: val,
            });
            break;
          case this.documents.phone:
            await updateDoc(docRef, {
              phone: val,
            });
            break;
          case this.documents.company:
            await updateDoc(docRef, {
              company: val,
            });
            break;
          case this.documents.address:
            await updateDoc(docRef, {
              address: val,
            });
            break;
          case this.documents.avatar:
            await updateDoc(docRef, {
              avatar: val,
            });
            break;
          default:
            break;
        }

        const unsub = onSnapshot(docRef, (doc) => {
          this.documents = {
            id: doc.id,
            ...doc.data(),
          };
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
  },
});
