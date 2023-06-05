import { renderHook } from "@testing-library/react";

import {
    calculateAnnualProfit,
    projectedBalance,
} from "../../src/hooks/useCryptoBalance";

describe("calculateAnnualProfit", () => {
    it("should return 0 when any of the input values is 0", () => {
        const monthlyReturn = 0.05;
        const quantity = 0;
        const price = 10;
        const expectedAnnualProfit = 0;

        const { result } = renderHook(() =>
            calculateAnnualProfit(monthlyReturn, quantity, price)
        );

        expect(result.current).toBe(expectedAnnualProfit);
    });

    it("should calculate the correct projected balance with positive inputs", () => {
        const annualProfit = 1000;
        const quantity = 10;
        const price = 50;
        const expected = 1500;

        const { result } = renderHook(() =>
            projectedBalance(annualProfit, quantity, price)
        );

        expect(result.current).toBe(expected);
    });

    it("should handle zero inputs correctly and return 0", () => {
        const annualProfit = 0;
        const quantity = 0;
        const price = 0;
        const expected = 0;

        const { result } = renderHook(() =>
            projectedBalance(annualProfit, quantity, price)
        );

        expect(result.current).toBe(expected);
    });
});
