import React, { useRef, useState } from "react";

const PROMPT_DEFAULT = {
    show: false,
    question: '',
    callback: null
}

export const AppContextState = React.createContext({});
export const AppContextSetters = React.createContext({});


const AppContext = (props) => {
    const [prompt, setPrompt] = useState(PROMPT_DEFAULT);

    const settersRef = useRef({
        setPrompt,
        resetPrompt: () => setPrompt({...PROMPT_DEFAULT})
    });

    return (
        <AppContextSetters.Provider value={settersRef.current}>
        <AppContextState.Provider value={{
            prompt
        }}>
            {props.children}
        </AppContextState.Provider>
        </AppContextSetters.Provider>
    );
}

export default React.memo(AppContext);