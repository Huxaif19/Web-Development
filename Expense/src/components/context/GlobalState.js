import {createContext , useContext} from "react";






export const TransactionContext = createContext({
    transactions : {
    },
    deleteTransaction : (id) =>{}
});


export const TransactionContextProvider = TransactionContext.Provider;
export default function useTranscation(){
    return useContext(TransactionContext);
}