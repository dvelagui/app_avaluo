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
    documentsAgent: [],
    loadingUser: false,
  }),
  actions: {
    async createUserData(email, uid, nickname, typeUser, avatar, plan) {
      try {
        const data = {
          email: email,
          uid: uid,
          nickname: nickname,
          typeUser: typeUser,
          phone: "",
          avatar: avatar,
          plan: plan,
          imgCover:
            "https://firebasestorage.googleapis.com/v0/b/avaluo-en-linea-colombia.appspot.com/o/user-default%2Fcover.png?alt=media&token=50619635-6d7f-4ddd-843a-3bcd867796b8",
        };
        await addDoc(collection(db, "users"), data);
      } catch (error) {
        console.log(error);
      }
    },
    async createUserDataAgent(
      adminId,
      company,
      uid,
      email,
      nickname,
      typeUser,
      avatar,
      plan,
      rol
    ) {
      try {
        const data = {
          admin: adminId,
          company: company,
          email: email,
          uid: uid,
          nickname: nickname,
          typeUser: typeUser,
          phone: "",
          avatar: avatar,
          plan: plan,
          rol: rol,
          imgCover:
            "https://firebasestorage.googleapis.com/v0/b/avaluo-en-linea-colombia.appspot.com/o/user-default%2Fcover.png?alt=media&token=50619635-6d7f-4ddd-843a-3bcd867796b8",
        };
        await addDoc(collection(db, "users"), data);
      } catch (error) {
        console.log(error);
      }
    },
    async getUserData(user) {
      this.loadingUser = true;
      try {
        const usersRef = collection(db, "users");
        const q = query(
          usersRef,
          where("uid", "==", user || auth.currentUser.uid)
        );
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
    async getUserDataAgent() {
      this.loadingUser = true;
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("admin", "==", auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (this.documentsAgent.every((agent) => agent.id != doc.id)) {
            this.documentsAgent.push({
              id: doc.id,
              ...doc.data(),
            });
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async getUserDataEmail(user) {
      this.loadingUser = true;
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", user));
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
          case this.documents.plan:
            await updateDoc(docRef, {
              plan: val,
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
    async UpdateUserDataAgent(field, val) {
      this.loadingUser = true;
      try {
        const docRef = doc(db, "users", this.documents.id);

        switch (field) {
          case this.documents.uid:
            await updateDoc(docRef, {
              uid: val,
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
