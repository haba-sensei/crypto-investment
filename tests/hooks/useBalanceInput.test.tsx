import { act, renderHook } from "@testing-library/react";

import { formatPrice } from "../../src/helpers/formatValue";
import {
    useBalance,
    useCalculateQuantity,
} from "../../src/hooks/useBalanceInput";

describe("useBalanceInput", () => {
    it("should update balance correctly", () => {
        const { result } = renderHook(() => useBalance());
        const [, handleBalanceChange] = result.current;

        const inputEvent = {
            target: { value: "10.50" },
        } as React.ChangeEvent<HTMLInputElement>;

        act(() => {
            handleBalanceChange(inputEvent);
        });

        expect(result.current[0]).toBe("10.50");
    });

    it("should not update balance with invalid input", () => {
        const { result } = renderHook(() => useBalance());
        const [, handleBalanceChange] = result.current;

        const inputEvent = {
            target: { value: "abc" },
        } as React.ChangeEvent<HTMLInputElement>;

        act(() => {
            handleBalanceChange(inputEvent);
        });

        expect(result.current[0]).toBe("");
    });

    it("Tests that calculateQuantity returns a valid quantity when balance and price are valid numbers", () => {
        const balance = "100";
        const price = 10;
        const { result } = renderHook(() => useCalculateQuantity(balance));
        const calculateQuantity = result.current;
        const expectedQuantity = 10;

        act(() => {
            const result = calculateQuantity(price);
            expect(result).toBe(expectedQuantity);
        });
    });

    it("Tests that calculateQuantity returns a valid quantity when balance and price are negative numbers", () => {
        const balance = "-100";
        const price = -10;
        const { result } = renderHook(() => useCalculateQuantity(balance));
        const calculateQuantity = result.current;
        const expectedQuantity = 10;

        act(() => {
            const result = calculateQuantity(price);
            expect(result).toBe(expectedQuantity);
        });
    });

    it("Tests that calculateQuantity returns 0 when price is 0", () => {
        const balance = "100";
        const price = 0;
        const { result } = renderHook(() => useCalculateQuantity(balance));
        const calculateQuantity = result.current;
        const expectedQuantity = 0;

        act(() => {
            const result = calculateQuantity(price);
            expect(result).toBe(expectedQuantity);
        });
    });

    it("Tests that calculateQuantity returns 0 when price is NaN", () => {
        const balance = "100";
        const price = NaN;
        const { result } = renderHook(() => useCalculateQuantity(balance));
        const calculateQuantity = result.current;
        const expectedQuantity = 0;

        act(() => {
            const result = calculateQuantity(price);
            expect(result).toBe(expectedQuantity);
        });
    });

    it("Tests that calculateQuantity uses formatPrice helper function to format calculated quantity", () => {
        const balance = "100";
        const price = 10;
        const { result } = renderHook(() => useCalculateQuantity(balance));
        const calculateQuantity = result.current;
        const expectedQuantity = formatPrice(parseFloat(balance) / price, 3);

        act(() => {
            const result = calculateQuantity(price);
            expect(result).toBe(expectedQuantity);
        });
    });

    it("Tests that calculateQuantity returns 0 when balance is NaN", () => {
        const balance = "NaN";
        const price = 10;
        const { result } = renderHook(() => useCalculateQuantity(balance));
        const calculateQuantity = result.current;
        const expectedQuantity = 0;

        act(() => {
            const result = calculateQuantity(price);
            expect(result).toBe(expectedQuantity);
        });
    });
});
