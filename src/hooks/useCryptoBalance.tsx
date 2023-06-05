import { formatPrice } from "../helpers/formatValue";

const calculateAnnualProfit = (
    monthlyReturn: number,
    quantity: number,
    price: number
) => {
    const annualReturn = Math.pow(1 + monthlyReturn, 12) - 1;
    return formatPrice(quantity * price * annualReturn, 3);
};

const projectedBalance = (
    annualProfit: number,
    quantity: number,
    price: number
) => {
    return formatPrice(quantity * price + annualProfit, 3);
};

export { calculateAnnualProfit, projectedBalance };
