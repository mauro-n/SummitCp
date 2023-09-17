import { useContext } from "react";
import { appContext } from "../context/AppContext";

export const useAppContext = (): any => {
    const context = useContext(appContext);
    return context;
}