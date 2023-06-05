import { act, renderHook } from "@testing-library/react";

import { useExportCSV, useExportJSON } from "../../src/hooks/useExportData";

describe("useExportCSV", () => {
    it("should export CSV with multiple objects", () => {
        const data = [
            {
                coin: "BTC",
                balance: 1.5,
                price: 50000,
                quantity: 0.03,
                annualProfit: 0.1,
                monthlyReturn: 0.02,
            },
            {
                coin: "ETH",
                balance: 5,
                price: 3000,
                quantity: 1.5,
                annualProfit: 0.2,
                monthlyReturn: 0.03,
            },
        ];

        const { result } = renderHook(() => useExportCSV(data));
        act(() => {
            result.current();
        });

        const link = document.querySelector("a");

        if (link) {
            expect(link).toHaveAttribute(
                "href",
                expect.stringContaining("data:text/csv")
            );
            expect(link).toHaveAttribute("download", "crypto_data.csv");

            const csvContent = link.getAttribute("href")?.split(",")[1] ?? "";
            const csvArray = csvContent
                .split("\n")
                .map((row) => row.split(","));

            expect(csvArray[0]).toEqual([
                "ID",
                "Coin",
                "Balance",
                "Price",
                "Quantity",
                "Annual Profit",
                "Month Return",
            ]);
            expect(csvArray[1]).toEqual([
                "1",
                "BTC",
                "1.5",
                "50000",
                "0.03",
                "0.1",
                "0.02",
            ]);
            expect(csvArray[2]).toEqual([
                "2",
                "ETH",
                "5",
                "3000",
                "1.5",
                "0.2",
                "0.03",
            ]);

            document.body.removeChild(link);
        }
    });
    it("should export JSON with data", () => {
        const data = [
            { name: "Bitcoin", price: 50000 },
            { name: "Ethereum", price: 3000 },
        ];
        const { result } = renderHook(() => useExportJSON(data));

        act(() => {
            result.current();
        });

        const link = document.querySelector("a");

        if (link) {
            expect(link.getAttribute("href")).toContain("data:text/json");
            expect(link.getAttribute("download")).toBe("crypto_data.json");
        }
    });
});
