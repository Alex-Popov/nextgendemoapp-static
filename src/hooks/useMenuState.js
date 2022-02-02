import {useCallback, useMemo, useRef, useState} from 'react';


export default function useMenuState(payloadScheme) {
    // default payload
    const defaultPayloadRef = useRef({
        anchorEl: null,
        ...(payloadScheme || {})
    });
    const defaultPayload = defaultPayloadRef.current;

    // state
    const [menuState, setMenuState] = useState(defaultPayload);
    const {anchorEl, ...payload} = menuState;
    const isOpen = Boolean(anchorEl);

    // handlers
    const handleOpenMenu = useCallback((el, p) => {
        if (// shortest format for binding to onclick event
            (
                el instanceof Event
                || (el.nativeEvent && el.nativeEvent instanceof Event)
            )
            && el.currentTarget
            && p === undefined
        ) {
            setMenuState({
                ...defaultPayload,
                anchorEl: el.currentTarget
            });

        } else {
            setMenuState({
                ...defaultPayload,
                anchorEl: el,
                ...(p || {})
            });
        }
    }, [defaultPayload]);

    const handleCloseMenu = useCallback(() => {
        setMenuState(defaultPayload);
    }, [defaultPayload]);

    // binds
/*    const bindTrigger = useMemo(() => ({
        onClick: handleOpenMenu
    }), [handleOpenMenu]);*/

    const bindMenu = useMemo(() => ({
        anchorEl,
        open: isOpen,
        onClose: handleCloseMenu
    }), [anchorEl, isOpen, handleCloseMenu]);


    return {
        anchorEl,
        isOpen,
        payload,
        handleOpenMenu,
        handleCloseMenu,
//        bindTrigger,
        bindMenu
    }
}