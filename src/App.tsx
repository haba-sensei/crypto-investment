import React, { useState } from "react";

import CryptoCurrency from "./components/CryptoCurrency";
import CryptoRow from "./components/CryptoRow";
import cryptoCurrencies from "./constants/Crypto";
import { useBalance, useCalculateQuantity } from "./hooks/useBalanceInput";
import { useExportCSV, useExportJSON } from "./hooks/useExportData";
import { StateProps } from "./interfaces/global";

const App: React.FC = () => {
    const [balance, handleBalanceChange] = useBalance();
    const [cryptoData, setCryptoData] = useState<StateProps[]>([]);
    const calculateQuantity = useCalculateQuantity(balance);
    const exportCSV = useExportCSV(cryptoData);
    const exportJson = useExportJSON(cryptoData);
    const handleExportClick = () => {
        exportCSV();
    };
    const handleExportClickJson = () => {
        exportJson();
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white mb-6">
                    Crypto Investment
                </h1>
                <div className="flex">
                    <img
                        src="https://asset-images.messari.io/images/1e31218a-e44e-4285-820c-8282ee222035/32.png?v=2"
                        alt="Bitcoin"
                        className="w-8 h-8 mr-2 mt-1"
                    />
                    <input
                        type="number"
                        id="balance"
                        value={balance}
                        min="0"
                        className="bg-gray-800 text-white rounded-md p-2 mb-5"
                        placeholder="Enter the amount"
                        onChange={handleBalanceChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="text-white text-2xl font-bold col-span-4 sm:col-span-1"></div>
                <div className="text-white text-2xl font-bold col-span-4 sm:col-span-1">
                    Quantity
                </div>
                <div className="text-white text-2xl font-bold col-span-4 sm:col-span-1">
                    Annual Profit
                </div>
                <div className="text-white text-2xl font-bold col-span-4 sm:col-span-1">
                    Projected Balance
                </div>

                {cryptoCurrencies.map((crypto) => (
                    <CryptoCurrency
                        key={crypto.value}
                        coin={crypto.value}
                        label={crypto.label}
                        icon={crypto.icon}
                        monthlyReturn={crypto.month}
                        calculateQuantity={calculateQuantity}
                        setCryptoData={setCryptoData}
                    />
                ))}
            </div>

            <div className="mt-8">
                <div className="flex justify-between items-center">
                    <h3 className="text-white text-lg font-semibold mb-4">
                        Metricas:
                    </h3>

                    <div className="flex justify-between mb-5">
                        <button
                            className="bg-blue-500 text-white rounded-md px-4 mt-4 mr-3 hover:bg-blue-600"
                            onClick={handleExportClick}
                        >
                            Export to CSV
                        </button>
                        <button
                            className="bg-blue-500 text-white rounded-md px-4 mt-4 hover:bg-blue-600"
                            onClick={handleExportClickJson}
                        >
                            Export to Json
                        </button>
                    </div>
                </div>

                <table className="bg-gray-900 text-white border w-full">
                    <thead className="thead">
                        <tr>
                            <th className=""></th>
                            <th className="text-start">Asset</th>
                            <th className="px-4 py-2 whitespace-nowrap">
                                PRICE (USD)
                            </th>
                            <th className="thead-2-lines ">
                                CHANGE VS <br />
                                USD (1H)
                            </th>
                            <th className="thead-2-lines">
                                CHANGE VS <br />
                                USD (24H)
                            </th>
                            <th className="px-4 py-2">7 DAY TREND</th>
                            <th className="thead-2-lines">
                                REPORTED <br />
                                MARKETCAP
                            </th>
                            <th className="thead-2-lines">
                                REAL VOLUME <br />
                                (24H)
                            </th>
                            <th className="thead-2-lines">
                                CHANGE VS <br />
                                USD (7D)
                            </th>
                            <th className="thead-2-lines">
                                CHANGE VS <br />
                                USD (30D)
                            </th>
                            <th className="thead-2-lines">
                                CHANGE VS <br />
                                USD (YTD)
                            </th>
                            <th className="px-4 py-2">SECTOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptoCurrencies.map((crypto) => (
                            <CryptoRow
                                key={crypto.value}
                                data={cryptoData}
                                coin={crypto.value}
                                label={crypto.label}
                                icon={crypto.icon}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;
