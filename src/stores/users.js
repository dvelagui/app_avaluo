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
    async createUser(nickname, typeUser, email, password) {
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
        useDataBase.createUserData(
          this.userData.email,
          this.userData.uid,
          nickname,
          typeUser
        );
        await useDataBase.getUserData();
      } catch (error) {
        console.error(error);
      } finally {
        this.loadingUser = false;
      }
    },
    async registerGoogle(usertype) {
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
            usertype
          );
          await useDataBase.getUserData();
        } else {
          await useDataBase.getUserData();
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
