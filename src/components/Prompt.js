import React, {useCallback, useContext} from 'react';

import { AppContextState, AppContextSetters } from '../context/AppContext';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';



export const usePrompt = (question, callback) => {
    const { setPrompt } = useContext(AppContextSetters);
    return useCallback(args => {
        setPrompt({
            show: true,
            question,
            callback: () => callback(args)
        });
    }, [question, callback, setPrompt])
}


function Prompt() {
    const { resetPrompt } = useContext(AppContextSetters);
    const { prompt: {show, question, callback} } = useContext(AppContextState);

    const handleConfirm = () => {
        callback();
        resetPrompt();
    }

    return (
        <Dialog
            open={show}
            onClose={resetPrompt}
            maxWidth="sm"
        >
            <div className="px-5 pt-4 pb-3 text-align_center">
                {question}
            </div>
            <div className="p-4 text-align_center">
                <Button onClick={resetPrompt}>Cancel</Button>
                <Button
                    variant="contained"
                    onClick={handleConfirm}
                    className="ml-4"
                >
                    Ok
                </Button>
            </div>
        </Dialog>
    );
}

export default Prompt;