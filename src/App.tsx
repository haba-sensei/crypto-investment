import React from "react";

import CryptoCurrency from "./components/CryptoCurrency";
import cryptoCurrencies from "./constants/Crypto";
import { useBalance, useCalculateQuantity } from "./hooks/useBalanceInput";

const App: React.FC = () => {
    const [balance, handleBalanceChange] = useBalance();
    const calculateQuantity = useCalculateQuantity(balance);

    return (
        <div>
            <h1>Crypto Investment</h1>
            <label htmlFor="balance">Balance (USD):</label>
            <input
                type="number"
                id="balance"
                value={balance}
                min="0"
                onChange={handleBalanceChange}
            />

            {cryptoCurrencies.map((crypto) => (
                <CryptoCurrency
                    key={crypto.value}
                    coin={crypto.value}
                    calculateQuantity={calculateQuantity}
                />
            ))}
        </div>
    );
};

export default App;
