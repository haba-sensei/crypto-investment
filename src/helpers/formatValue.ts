const formatValue = (value: number): string => {
    const billion = 1000000000;
    const million = 1000000;
    const absValue = Math.abs(value);

    if (absValue >= billion) {
        return `${(value / billion).toFixed(2)}B`;
    }

    if (absValue >= million) {
        return `${(value / million).toFixed(2)}M`;
    }

    const digits = absValue < 5 ? 2 : 2;
    return value.toLocaleString(undefined, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    });
};

const formatPrice = (value: number, digits: number): number => {
    return Number(value.toFixed(digits));
};

export { formatPrice, formatValue };
