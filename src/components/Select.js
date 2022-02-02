import React from 'react';
import { $c } from '../utils';
import css from './Select.module.css';


function Select({
    label = '',
    helpText = '',
    className = '',
    required = false,
    value,
    onChange = value => {},
    disableEmpty = false,
    emptyLabel = '',
    fullWidth = false,

    children
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
                <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    className={$c(
                        'control_base',
                        css.select,
                        fullWidth ? css.fullWidth : ''
                    )}
                >
                    {!disableEmpty && <option value="">{emptyLabel}</option>}
                    {children}
                </select>
            </label>
            {helpText && <div className="control_help-Text">{helpText}</div>}
        </div>
    );
}

export default Select;
