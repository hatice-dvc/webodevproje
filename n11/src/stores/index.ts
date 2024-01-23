import { db } from "@/firebase";
import {
  DocumentData,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { defineStore } from "pinia";

const mainStore = defineStore("mainStore", {
  state: () => ({
    registerCheck: false,
    user: null,
    name: "XYZ",
    productList: [] as Product[],
    cityList: [] as DocumentData[],
  }),

  actions: {
    //@ts-ignore
    setUser(user) {
      this.user = user;
    },

    async setProduct() {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.productList.push(doc.data() as Product);
      });
    },

    clearProduct() {
      this.productList = [];
    },

    async setCity() {
      const querySnapshot = await getDocs(collection(db, "cities"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.cityList.push(doc.data() as DocumentData);
      });
    },

    clearCity() {
      this.cityList = [];
    },

    //@ts-ignore
    async setRegister(userData) {
      if (userData.password != null) {
        const data = {
          ...userData,
          basket: [],
        };

        const userId = Math.floor(Math.random() * 10000) + 1;

        await setDoc(doc(db, "users", data.email), {
          userId: userId,
          ...data,
        });

        this.registerCheck = true;
      }
    },

    //@ts-ignore
    async setLogin(userData) {
      let user = {
        ...userData,
      };

      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (user.password !== docSnap.data().password) {
          alert("Şifre hatalı");
        } else {
          user = docSnap.data();
          delete user.password;
          this.setUser(user);
        }
      } else {
        alert("Böyle bir hesap yok");
      }
    },

    async addToBasket(product: Product, email: String) {
      //@ts-ignore
      const targetDB = doc(db, "users", email);

      await updateDoc(targetDB, {
        basket: arrayUnion(product),
      });
    },
  },

  getters: {
    getProductList(state) {
      return state.productList;
    },

    getCityList(state) {
      return state.cityList;
    },

    getRegisterCheck(state) {
      return state.registerCheck;
    },

    getUser(state) {
      return state.user;
    },
  },
});

export default mainStore;
