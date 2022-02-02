import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import { styled } from '@material-ui/core/styles';

const IconButtonStateful = styled(
    ({
        isActive,
        activeColor,
        activeBackground,
        defaultColor,
        defaultBackground,
        ...otherProps
    }) => <IconButton {...otherProps} />
)
(
    ({ theme, isActive, activeColor, activeBackground, defaultColor, defaultBackground }) => (
        isActive
            ? {
                color: [activeColor || '#fff', '!important'],
                background: [activeBackground || theme.palette.primary.main, '!important']
            }
            : {
                ...(defaultColor && { color: [defaultColor, '!important'] }),
                ...(defaultBackground && { background: [defaultBackground, '!important'] })
            }
    )
);

export default React.memo(IconButtonStateful);