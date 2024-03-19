import { produckttype } from "@/components/produckt.type";
import axios from "axios";
import { create } from "zustand";
// import { produckttype } from "./components/produckt.type";

export const getProducts = create<produckttype>((set) => ({
    loading: false,
    products: [],
    error: null,

    getproducts: async () => {
        set(() => ({ loading: true }));
        try {
            const res = await axios.get('https://65f8a52cdf151452460fd72b.mockapi.io/produckts');
            const data = res.data;
            set(() => ({
                products: data,
                loading: false
            }));
        } catch (error) {
            console.error(error);
        }
    },


}));

export default getProducts