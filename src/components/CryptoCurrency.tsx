import React from "react";

import useFetchCryptoPrice from "../hooks/useFetchCryptoPrice";

interface CryptoCurrencyProps {
    coin: string;
    calculateQuantity: (price: number) => number;
}

const CryptoCurrency: React.FC<CryptoCurrencyProps> = ({
    coin,
    calculateQuantity,
}) => {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
    const price = useFetchCryptoPrice(url, coin);
    const quantity = calculateQuantity(price || 0);

    return (
        <div>
            <h2>{coin}</h2>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
        </div>
    );
};

export default CryptoCurrency;
