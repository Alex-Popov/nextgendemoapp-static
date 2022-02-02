import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { $c } from '../utils';
import css from './Input.module.css';


function Input({
    label = '',
    helpText = '',
    className = '',

    // exclude this from "otherProps"
    required = false,
    fullWidth = false,
    onChange = value => {},

   ...otherProps // direct props for MUI <InputBase>
}) {
    return (
        <div className={className}>
            <label>
                {label && (
                     <div className="control_label">
                        {label}
                        {required && ' *'}
                     </div>
                )}
                <InputBase
                    {...otherProps}

                    onChange={e => onChange(e.target.value)}
                    fullWidth={true}
                    className={css.muiRoot}
                    inputProps={{
                        className: $c('control_base', css.textarea)
                    }}
                />
            </label>
            {helpText && <div className="control_help-Text">{helpText}</div>}
        </div>
    );
}

export default Input;
