import create from "zustand";
import {persist} from "zustand/middleware";

let appstore=(set)=>({
    dopen:true,
    rows:[],
    setRows:(rows)=>set((state)=>({rows:rows})),
    updateopen:(dopen)=>set((state)=>({dopen:dopen})),
});
 appstore=persist(appstore,{name:"my_app_store"});
export const useAppStore=create(appstore);