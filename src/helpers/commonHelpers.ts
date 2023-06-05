const colorHelper = (value: number) => {
    return value > 0 ? "px-4 py-2 text-green-600" : "px-4 py-2 text-red-600";
};

const symbolHelper = (value: number) => {
    return value > 0 ? `+${value}%` : `${value}%`;
};

export { colorHelper, symbolHelper };
