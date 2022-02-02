import {useCallback, useEffect, useRef, useState} from 'react';
import isFunction from 'lodash/isFunction';

export default function useValueBuffer(value, setValue, delay) {
    const [buffer, setBuffer] = useState(value);
    useEffect(() => {
        setBuffer(value);
    }, [setBuffer, value]);

    const timeoutIdRef = useRef(0);

    const updateBuffer = useCallback((v, condition) => {
        setBuffer(v);

        clearInterval(timeoutIdRef.current);
        if (!condition || (isFunction(condition) && condition(v))) {
            timeoutIdRef.current = setTimeout(() => {
                setValue(v);
            }, delay);
        }
    }, [setBuffer, setValue, delay]);

    return [buffer, updateBuffer];
}