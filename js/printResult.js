const result = document.querySelector('#datecalc__result');

export const printErr = (textErr) => {
    result.innerHTML = textErr;
}

export const printRes = ({years, months, days}) => {
    result.innerHTML = `Лет: ${years}, Месяцев: ${months}, Дней: ${days}`;
}