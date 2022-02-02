import React, {useCallback, useMemo} from 'react';

import {DateTime} from 'luxon';
import { DatePicker } from '@material-ui/pickers';
import './DateSelector.css';


function DateSelector({value, onChange, ...otherProps}) {
    const handleChange = useCallback(d => {
        const isoDate = d.toISODate();
        if (value !== isoDate) onChange(isoDate);
    }, [value, onChange]);

    const sterializedDate = useMemo(() => (
        typeof value === 'string'
            ? DateTime.fromISO(value, {zone:'utc'})
            : value instanceof DateTime
                ? value.setZone('utc')
                : value
    ), [value]);


    return (
        <DatePicker
            format="MM/dd/yyyy"
            disableToolbar
            onChange={handleChange}
            value={sterializedDate}
            {...otherProps}
        />
    );
}

export default React.memo(DateSelector);
