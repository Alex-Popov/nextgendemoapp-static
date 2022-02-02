import React, {useCallback, useState} from 'react';

import { $c } from '../utils';
import css from './CopyTextToClipboard.module.css';
import CheckIcon from '@material-ui/icons/Check';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copy from 'copy-text-to-clipboard';


export default function CopyTextToClipboard({className, ...props}) {
    const [copied, setCopied] = useState(false);

    const handleClick = useCallback(e => {
        copy(e.currentTarget.innerText);

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, []);


    return (
        <div
            className={$c(
                className,
                css.root,
                copied && css.copied
            )}
            onClick={handleClick}
            title="Click to copy"
        >
            {props.children}
            <div className={css.icon}>
                {copied
                    ? <CheckIcon fontSize="inherit" color="inherit" />
                    : <FileCopyIcon fontSize="inherit" color="inherit" />
                }
            </div>
        </div>
    );
}