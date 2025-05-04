import { createContext } from "react";
import run from "../config/gemini";

export const context = createContext();
const contextprovider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState(""); 

    const delayPara = (index, nextWord) =>{

    }

    const onSent = async (prompt) => {

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        const response = await run(input)
        let responseArray = response.split("**");
        let newArray;
        for(let i = 0; i < responseArray.length; i++){
            if(i === 0 || i%2 !== 0){
                newArray.push(responseArray[i]);
        }
        setResultData(response);
        setLoading(false);
        setInput("");
    }

    

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput

    }
    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default contextprovider;