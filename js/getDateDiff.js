import { DateTime } from './luxon.js';

const getDateDiff =(dateFrom, dateTo) => {
    const dateFromObj = DateTime.fromISO(dateFrom);
    const dateToObj = DateTime.fromISO(dateTo);

    return dateToObj.diff(dateFromObj, ['years', 'months', 'days']).toObject();
}

export default getDateDiff