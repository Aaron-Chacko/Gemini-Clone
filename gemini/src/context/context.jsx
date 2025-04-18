import { createContext } from "react";
import run from "../config/gemini";

export const context = createContext();
const contextprovider = (props) => {

    const onSent = async (prompt) => {
        await run(prompt)
    }

    onSent("What is Aaron?")

    const contextValue = {}
    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default contextprovider;