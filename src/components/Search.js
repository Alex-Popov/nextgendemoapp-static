import React, {useCallback} from 'react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useValueBuffer from '../hooks/useValueBuffer';



function Search({ onChange = () => {}, min = 2 }) {
    const [buffer, updateBuffer] = useValueBuffer('', onChange, 500);

    // handlers
    const handleChange = useCallback(e => {
        updateBuffer(
            e.target.value,
            v => v.length === 0 || v.length >= min
        );
    }, [min, updateBuffer]);


    return (
        <OutlinedInput
            value={buffer}
            onChange={handleChange}
            fullWidth
            placeholder="Search"
            endAdornment={
                <InputAdornment position="end">
                    {buffer.length > 0 && (
                        <IconButton onClick={() => updateBuffer('')} edge="end">
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    )}
                </InputAdornment>
            }
        />
    );
}

export default React.memo(Search);