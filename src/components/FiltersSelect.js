import React from 'react';
import Select from '@material-ui/core/Select';

function FiltersSelect({
    value,
    onChange,
    name,
    disableEmpty = false,
    emptyLabel = 'All',

    children, // options
    ...otherProps // direct props for MUI <Select>
}) {

    return (
        <Select
            value={value}
            onChange={e => onChange({
                [name]: e.target.value
            })}
            native
            {...otherProps}
        >
            {!disableEmpty && <option value="">{emptyLabel}</option>}
            {children}
        </Select>
    );
}

export default React.memo(FiltersSelect);