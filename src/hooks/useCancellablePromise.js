import { useCallback } from 'react';
import useIsMounted from './useIsMounted';

export default function useCancellablePromise() {
    const isMounted = useIsMounted();

    return useCallback((promise, onCancel) =>
        // Wrap the given promise in a new promise
        new Promise((resolve, reject) => {
            promise
                .then((result) => {
                    if (isMounted()) resolve(result);
                })
                .catch((error) => {
                    if (isMounted()) reject(error);
                })
                .finally(() => {
                    // Call the onCancel callback if not mounted
                    if (!isMounted() && onCancel) {
                        onCancel();
                    }
                });
        }
    ), [isMounted]);
};
