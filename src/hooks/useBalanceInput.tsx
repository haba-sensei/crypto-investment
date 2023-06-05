import { useCallback, useState } from "react";

import { formatPrice } from "../helpers/formatValue";

const useBalance = (): [
    string,
    (event: React.ChangeEvent<HTMLInputElement>) => void
] => {
    const [balance, setBalance] = useState("");

    const handleBalanceChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            const isValidInput = /^[0-9]*\.?[0-9]*$/.test(value);
            if (isValidInput) {
                setBalance(value);
            }
        },
        []
    );

    return [balance, handleBalanceChange];
};

const useCalculateQuantity = (balance: string): ((price: number) => number) => {
    const calculateQuantity = useCallback(
        (price: number) => {
            if (price === 0 || isNaN(price) || isNaN(parseFloat(balance))) {
                return 0;
            }
            return formatPrice(parseFloat(balance) / price, 3);
        },
        [balance]
    );

    return calculateQuantity;
};

export { useBalance, useCalculateQuantity };
