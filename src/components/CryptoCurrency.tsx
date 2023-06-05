import React, { useEffect } from "react";

import { cryptoTimeSeries, cryptoUrl, urlBase } from "../constants/Params";
import {
    calculateAnnualProfit,
    projectedBalance,
} from "../hooks/useCryptoBalance";
import useFetchCrypto from "../hooks/useFetchCryptoPrice";
import { CryptoCurrencyProps } from "../interfaces/global";

const CryptoCurrency: React.FC<CryptoCurrencyProps> = ({
    coin,
    label,
    icon,
    monthlyReturn,
    calculateQuantity,
    setCryptoData,
}) => {
    const urlAssets = `${urlBase}/assets/${coin}/${cryptoUrl}`;
    const urlMarkets = `${urlBase}/markets/binance-${coin}-usdt/${cryptoTimeSeries}`;
    const data = useFetchCrypto(urlAssets, urlMarkets);
    const price = data.price;
    const quantity = calculateQuantity(price);
    const annualProfit = calculateAnnualProfit(monthlyReturn, quantity, price);
    const balance = projectedBalance(annualProfit, quantity, price);

    useEffect(() => {
        setCryptoData((prevData) => {
            const index = prevData.findIndex((item) => item.coin === coin);
            if (index !== -1) {
                prevData[index] = {
                    coin,
                    label,
                    icon,
                    balance,
                    data,
                    quantity,
                    annualProfit,
                    monthlyReturn,
                };
                return [...prevData];
            } else {
                return [
                    ...prevData,
                    {
                        coin,
                        label,
                        icon,
                        balance,
                        data,
                        quantity,
                        annualProfit,
                        monthlyReturn,
                    },
                ];
            }
        });
    }, [
        coin,
        label,
        icon,
        balance,
        data,
        quantity,
        annualProfit,
        setCryptoData,
        monthlyReturn,
    ]);

    return (
        <>
            <div className="flex items-center col-span-4 sm:col-span-1">
                <img src={icon} alt={label} className="w-8 h-8 mr-2" />
                <h2 className="text-white text-xl font-semibold">
                    {label} ( {monthlyReturn} )
                </h2>
            </div>
            <div className="text-white text-2xl font-bold col-span-4 sm:col-span-1">
                ${quantity}
            </div>
            <div className="text-white text-2xl font-bold col-span-4 sm:col-span-1">
                ${annualProfit}
            </div>
            <div className="text-white text-2xl font-bold col-span-4 sm:col-span-1">
                ${balance}
            </div>
        </>
    );
};

export default CryptoCurrency;
