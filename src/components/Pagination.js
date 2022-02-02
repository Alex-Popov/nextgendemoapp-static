import React from 'react';

import css from './Pagination.module.css';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const generateVisiblePages = (min, max) => [...Array(max-min+1).keys()].map(i => i+min);


function Pagination({
    total,
    page,
    onSelect,
    size = 10
}) {
    const totalPages = Math.ceil(total / size) || 1;
    const minPage = 1;
    const maxPage = totalPages;
    const minVisiblePage = totalPages > 5 ? Math.max(page-2, minPage) : minPage;
    const maxVisiblePage = totalPages > 5 ? Math.min(page+2, maxPage) : maxPage;
    const visiblePages = generateVisiblePages(minVisiblePage, maxVisiblePage);


    // hide component if  page
    if (totalPages <= 1) return null;

    return (<div className="d-flex align-items-center justify-content-center py-4">
        <IconButton
            color="inherit"
            disabled={page === minPage}
            onClick={() => onSelect(page-1)}
            className="flex-shrink-0"
        >
            <ArrowBackIosIcon fontSize="small" />
        </IconButton>

        {minVisiblePage > minPage && <span className="mx-1">...</span>}
        {visiblePages.map(p => (
            <Button
                key={p}

                disabled={page === p}
                onClick={() => onSelect(p)}
                className={[
                    'flex-shrink-0',
                    css.page,
                    page === p ? css.selected : ''
                ].join(' ')}
            >
                {p}
            </Button>
        ))}
        {maxVisiblePage < maxPage && <span className="mx-1">...</span>}

        <IconButton
            color="inherit"
            disabled={page === maxPage}
            onClick={() => onSelect(page+1)}
            className="flex-shrink-0"
        >
            <ArrowForwardIosIcon fontSize="small" />
        </IconButton>


    </div>);
}

export default React.memo(Pagination);