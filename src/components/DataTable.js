import React, {useMemo, useState} from 'react';
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import Pagination from './Pagination';
import { format } from '../utils/formatter';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { nanoid } from 'nanoid';
import isFunction from 'lodash/isFunction';
import useMenuState from '../hooks/useMenuState';

/*
const CONFIG = [
    { label: 'Active', field: 'active', format: row => (row.active && <CheckIcon />)},
    { label: 'Broker Name', field: 'brokerName', format: STRING_FORMAT},
];

const ROW_ACTIONS = [
    {
        label: 'Edit',
        handler: id => alert(id)
    }
];
*/




function DataTable({
    idField = 'id',
    config,
    rows,

    total,
    pageSize = 10,
    setPage,
    page = 1,

    rowActions
}) {

    const headers = useMemo(() => config.map(c => ({
        key: nanoid(),
        label: c.label
    })), [config]);

    // settings
    const useRowActions = !!rowActions && Array.isArray(rowActions) && rowActions.length > 0;
    const usePagination = useMemo(() => total > pageSize, [total, pageSize]);

    // local page state
    const [localPage, setLocalPage] = useState(page);
    const localRows = useMemo(() => rows.slice((localPage -1) * pageSize, localPage * pageSize), [rows, localPage, pageSize]);

    // row menu
    const { handleOpenMenu, bindMenu, payload } = useMenuState({id: null});



    return (<>
        <table className="table">
            <thead>
                <tr>
                    {headers.map(h => <th key={h.key}>{h.label}</th>)}
                    {useRowActions && <th></th>}
                </tr>
            </thead>
            <tbody>
                {(setPage ? rows : localRows).map(row => (
                    <tr key={row[idField]}>
                        {config.map(column => <td key={column.field}>
                            {isFunction(column.format)
                                ? column.format(row)
                                : format(column.format, row[column.field])
                            }
                        </td>)}
                        {useRowActions && <td className="table-actions">
                            <IconButton onClick={e => handleOpenMenu(e.currentTarget, {id: row[idField]})}>
                                <MoreVertIcon />
                            </IconButton>
                        </td>}
                    </tr>
                ))}
            </tbody>
        </table>

        {usePagination && (
            <Pagination
                total={total}
                page={setPage ? page : localPage}
                onSelect={setPage || setLocalPage}
                size={pageSize}
            />
        )}

        {useRowActions && (
            <Menu
                keepMounted
                {...bindMenu}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                {rowActions.map(item => (
                    <MenuItem
                        key={item.label}
                        onClick={e => item.handler(payload.id)}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        )}
    </>);
}
export default React.memo(DataTable);