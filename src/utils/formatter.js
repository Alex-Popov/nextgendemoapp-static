import isNil from 'lodash/isNil';
import { TIMEZONE, LOCALE } from '../config';


//
// formats
//

const FORMATS = Object.freeze({
    STRING: 'string',
    TEXT: 'text',
    MULTIPICKLIST: 'multipicklist',
    NUMBER: 'number',
    CURRENCY: 'currency',
    PERCENT: 'percent',
    DATE: 'date',
    DATETIME: 'datetime',
    TIME: 'time',

    GOLD: 'gold'
});



//
// Intl formatters
//

const INTL_NUMBER = new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
    style: 'decimal'
});

const INTL_CURRENCY = new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currencyDisplay: 'symbol',
    currency: 'USD'
});

const INTL_PERCENT = new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'percent'
});

const INTL_DATE = new Intl.DateTimeFormat(LOCALE, {
    timeZone: 'utc',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
});

const INTL_DATETIME = new Intl.DateTimeFormat(LOCALE, {
    timeZone: TIMEZONE,
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
});

const INTL_TIME = new Intl.DateTimeFormat(LOCALE, {
    timeZone: TIMEZONE,
    hour: 'numeric',
    minute: '2-digit',
});


// formatters map

const formatters = {
    [FORMATS.STRING]: v => String(v).trim(),
    [FORMATS.TEXT]: v => String(v).trim().replaceAll('\n', '<br/>'),
    [FORMATS.MULTIPICKLIST]: v => String(v).trim().split(';').join(', '),

    [FORMATS.NUMBER]: v => INTL_NUMBER.format(parseFloat(v) || 0),
    [FORMATS.CURRENCY]: v => INTL_CURRENCY.format(parseFloat(v) || 0),
    [FORMATS.PERCENT]: v => INTL_PERCENT.format(parseFloat(v) || 0),

    [FORMATS.DATE]: v => INTL_DATE.format(new Date(v)),
    [FORMATS.DATETIME]: v => INTL_DATETIME.format(new Date(v))/*.replace(', ', ' @ ')*/,
    [FORMATS.TIME]: v => INTL_TIME.format(new Date(v)),

    [FORMATS.GOLD]: v => {
        const result = [];
        const gold = Math.floor(v);
        const silver = Math.round(Math.floor((v - gold)*10));
        const copper = Math.round(((v - gold)*10 - silver)*10);

        if (gold) result.push(INTL_NUMBER.format(gold) +' зм');
        if (silver) result.push(silver +' см');
        if (copper) result.push(copper +' мм');

        return result.join(' ');
    },
}



//
// format() method
//

const format = (formatName, v) => (isNil(v) ? '' : (!formatters[formatName] ? v : formatters[formatName](v)));


export {
    FORMATS,
    format
}