export const convertCurrency = (number) => {
    const numeral = require("numeral");
    return numeral(number).format("$0,0.00");
};
