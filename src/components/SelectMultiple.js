import React from 'react';
import { $c } from '../utils';
import css from './SelectMultiple.module.css';
import useValueBuffer from '../hooks/useValueBuffer';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';



function SelectMultiple({
    label = '',
    helpText = '',
    className = '',
    required = false,
    value = [],
    onChange = value => {},
    fullWidth = false,
    options = [],

    children,
    ...selectProps
}) {
    const [buffer, updateBuffer] = useValueBuffer(value, onChange, 700);

    return (
        <div className={className}>
            <label>
                {label && (
                    <div className="control_label">
                        {label}
                        {required && ' *'}
                    </div>
                )}
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={buffer}
                    onChange={e => updateBuffer(e.target.value)}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={selected => selected.join(', ')}

                    {...selectProps}
                >
                    {options.map(o => (
                        <MenuItem key={o.value} value={o.value}>
                            <Checkbox checked={false} />
                            {o.label}
                        </MenuItem>
                    ))}
                </Select>
            </label>
            {helpText && <div className="control_help-Text">{helpText}</div>}
        </div>
    );
}

export default SelectMultiple;
//                        'control_base',