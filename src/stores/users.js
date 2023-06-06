import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { defineStore } from "pinia";
import { auth, provider } from "src/firebaseConfig";
import { userDatabaseStore } from "./database";
import { reportDatabaseStore } from "../stores/reports";

export const useUserStore = defineStore("userData", {
  state: () => ({
    userData: null,
    loadingUser: false,
  }),
  actions: {
    async createUser(nickname, typeUser, plan, email, password) {
      this.loadingUser = true;
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = {
          email: user.email,
          uid: user.uid,
        };
        const useDataBase = userDatabaseStore();
        const avatar =
          "https://firebasestorage.googleapis.com/v0/b/avaluo-en-linea-colombia.appspot.com/o/user-default%2Fprofile-default.png?alt=media&token=88dc6558-2399-4416-8710-3489531fb39d";
        useDataBase.createUserData(
          this.userData.email,
          this.userData.uid,
          nickname,
          typeUser,
          avatar,
          plan
        );
        await useDataBase.getUserData();
      } catch (error) {
        console.error(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async registerGoogle(usertype, plan) {
      this.loadingUser = true;
      const useDataBase = userDatabaseStore();
      try {
        const signWithGoogle = await signInWithPopup(auth, provider);
        this.userData = {
          email: signWithGoogle.user.email,
          uid: signWithGoogle.user.uid,
        };
        if (signWithGoogle._tokenResponse.isNewUser) {
          useDataBase.createUserData(
            this.userData.email,
            this.userData.uid,
            signWithGoogle.user.displayName,
            usertype,
            signWithGoogle.user.photoURL,
            plan
          );
          await useDataBase.getUserData();
        } else {
          await useDataBase.getUserData();
          console.log(signWithGoogle.user.photoURL);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async loginUser(email, password) {
      this.loadingUser = true;
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = {
          email: user.email,
          uid: user.uid,
        };
        const useDataBase = userDatabaseStore();
        await useDataBase.getUserData();
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async logOutSesion() {
      this.loadingUser = true;
      const useDataBase = userDatabaseStore();
      const useEventsData = reportDatabaseStore();
      try {
        useDataBase.$reset();
        useEventsData.$reset();
        await signOut(auth);
        this.userData = false;
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = false;
      }
    },
    currentUser() {
      return new Promise((resolve, reject) => {
        const unsuscribe = onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              this.userData = {
                email: user.email,
                uid: user.uid,
              };
            } else {
              this.userData = false;
              const useDataBase = userDatabaseStore();
              const useEventsData = reportDatabaseStore();
              useDataBase.$reset();
              useEventsData.$reset();
            }
            resolve(user);
          },
          (e) => reject(e)
        );
        unsuscribe();
      });
    },
  },
});
