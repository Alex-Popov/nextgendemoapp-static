import React from 'react';
import range from 'lodash/range';

import NativeSelect from '@material-ui/core/NativeSelect';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './DatePicker.css';
import css from './DatePicker.module.css';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru);


const MIN_DATE = new Date(2015, 0);
const MAX_DATE = new Date();
const YEARS = range(MIN_DATE.getFullYear(), MAX_DATE.getFullYear()+1, 1);
const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];

function DatePicker(props) {
    return (
        <ReactDatePicker
            {...props}

            inline
            disabledKeyboardNavigation
            minDate={MIN_DATE}
            maxDate={MAX_DATE}
            locale="ru"

            renderCustomHeader={
                ({
                     date,
                     changeYear,
                     decreaseMonth,
                     increaseMonth,
                     prevMonthButtonDisabled,
                     nextMonthButtonDisabled
                 }) => (
                    <div className="d-flex justify-content-between align-items-center">
                        <IconButton
                            color="inherit"
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                            className="flex-shrink-0 mr-1"
                            size="large"
                        >
                            <ArrowBackIosIcon fontSize="small" />
                        </IconButton>

                        <div className={`${css.month} flex-grow-1`}>{MONTHS[date.getMonth()]}</div>
                        <NativeSelect
                            value={date.getFullYear()}
                            onChange={({ target: { value } }) => changeYear(value)}
                            className={css.year}
                            inputProps={{
                                className: css.select
                            }}
                        >
                            {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                        </NativeSelect>

                        <IconButton
                            color="inherit"
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                            className="flex-shrink-0 ml-1"
                            size="large"
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>
                    </div>
                )
            }
        />
    );
}

export default React.memo(DatePicker);