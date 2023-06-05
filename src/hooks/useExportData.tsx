import { useCallback } from "react";

import { StateProps } from "../interfaces/global";

const useExportCSV = (data: StateProps[]) => {
    const exportCSV = useCallback(() => {
        if (data.length === 0) {
            console.log("No data to export");
            return;
        }

        const csvData = data.map((item, index) => ({
            id: index + 1,
            coin: item.coin,
            balance: item.balance,
            price: item.price,
            quantity: item.quantity,
            annualProfit: item.annualProfit,
            monthReturn: item.monthlyReturn,
        }));

        const csvHeaders = [
            "ID",
            "Coin",
            "Balance",
            "Price",
            "Quantity",
            "Annual Profit",
            "Month Return",
        ];

        const csvArray = [csvHeaders, ...csvData];

        const csvContent = csvArray
            .map((row) =>
                Object.values(row)
                    .map((value) => JSON.stringify(value))
                    .join(",")
            )
            .join("\n");

        const encodedUri = encodeURI(csvContent);

        const link = document.createElement("a");
        link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
        link.setAttribute("download", "crypto_data.csv");
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [data]);

    return exportCSV;
};

const useExportJSON = (data: StateProps[]) => {
    const exportJSON = useCallback(() => {
        if (data.length === 0) {
            console.log("No data to export");
            return;
        }

        const jsonData = JSON.stringify(data, null, 2);

        const encodedUri = encodeURI(
            `data:text/json;charset=utf-8,${jsonData}`
        );

        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "crypto_data.json");
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [data]);

    return exportJSON;
};

export { useExportCSV, useExportJSON };
