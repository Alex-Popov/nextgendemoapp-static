import React from 'react';
import Select from '@material-ui/core/Select';

const ALL = 'all';
const TRUE = 'true';
const FALSE = 'false';

const BOOLEAN_WRAPPER = {
    [ALL]: null,
    [TRUE]: true,
    [FALSE]: false
}

const getWrappedValue = value => Object.keys(BOOLEAN_WRAPPER).find(k => BOOLEAN_WRAPPER[k] === value) || ALL;


function BooleanFilter({ value, onSelect, allLabel, trueLabel, falseLabel }) {

    return (
        <Select
            value={getWrappedValue(value)}
            onChange={e => onSelect(BOOLEAN_WRAPPER[e.target.value])}
            native
        >
            <option value={ALL}>{allLabel || 'All'}</option>
            <option value={TRUE}>{trueLabel || 'TRUE only'}</option>
            <option value={FALSE}>{falseLabel || 'FALSE Only'}</option>
        </Select>
    );
}

export default React.memo(BooleanFilter);