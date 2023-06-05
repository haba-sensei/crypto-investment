/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { colorHelper, symbolHelper } from "../helpers/commonHelpers";
import HistoricGraph from "./HistoricGraph";

interface CryptoRowProps {
    data: any;
    coin: string;
    label: string;
    icon: string;
}

const CryptoRow: React.FC<CryptoRowProps> = ({ data, coin }) => {
    const filteredData = data.filter(
        (item: { coin: string }) => item.coin === coin
    );

    return (
        <>
            {filteredData.map(
                (
                    item: {
                        coin: string;
                        label: string;
                        icon: string;
                        data: any;
                    },
                    index: string
                ) => (
                    <tr key={index}>
                        <td className="px-2 py-2 w-8">
                            <img
                                src={item.icon}
                                alt={item.coin}
                                className="w-8 mr-1"
                            />
                        </td>

                        <td className="whitespace-nowrap">
                            <span className="">{item.label}</span>
                            <span className="uppercase">
                                {" "}
                                {`. ${item.coin}`}{" "}
                            </span>
                        </td>
                        <td className="px-4 py-2">${item.data.price}</td>
                        <td className={colorHelper(item.data.change1h)}>
                            {symbolHelper(item.data.change1h)}
                        </td>
                        <td className={colorHelper(item.data.change24h)}>
                            {symbolHelper(item.data.change24h)}
                        </td>
                        <td className="px-4 py-2 w-4 h-8">
                            <HistoricGraph
                                key={item.icon}
                                data={item.data.daytrend}
                            />
                        </td>
                        <td className="px-4 py-2">${item.data.marketcap}</td>
                        <td className="px-4 py-2">
                            ${item.data.realvolume24h}
                        </td>
                        <td className={colorHelper(item.data.change7d)}>
                            {symbolHelper(item.data.change7d)}
                        </td>
                        <td className={colorHelper(item.data.change30d)}>
                            {symbolHelper(item.data.change30d)}
                        </td>
                        <td className={colorHelper(item.data.changeytd)}>
                            {symbolHelper(item.data.changeytd)}
                        </td>
                        <td className="px-4 py-2 overflow-hidden">
                            {item.data.sector}
                        </td>
                    </tr>
                )
            )}
        </>
    );
};
export default CryptoRow;
