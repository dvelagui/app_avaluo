import {
  collection,
  setDoc,
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

export const reportDatabaseStore = defineStore("reportdatabase", {
  state: () => ({
    documents: [],
    loadingUser: false,
  }),
  actions: {
    async createReport(
      idReport,
      dateReport,
      cityReport,
      addressReport,
      nicknameReport
    ) {
      try {
        const data = {
          idUser: auth.currentUser.uid,
          idReport: idReport,
          dateReport: dateReport,
          cityReport: cityReport,
          addressReport: addressReport,
          nicknameReport: nicknameReport,
        };
        const reportRef = doc(db, "reports", idReport);
        const docSnap = await getDoc(reportRef);
        if (!docSnap.exists()) {
          await setDoc(doc(db, "reports", `${idReport}`), data);
        } else {
          console.log("hola");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getDataReports() {
      if (this.documents.length !== 0) {
        return;
      }
      try {
        const reportsRef = collection(db, "reports");

        const q = query(
          reportsRef,
          where("idUser", "==", auth.currentUser.uid)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          this.documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      } catch (error) {}
    },
  },
});
