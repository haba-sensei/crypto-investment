import { renderHook } from "@testing-library/react";

import useFetchCrypto from "../../src/hooks/useFetchCryptoPrice";

describe("useFetchCrypto", () => {
    // Tests that the initial state is set correctly.
    it("test_initial_state", () => {
        const urlAssets =
            "https://data.messari.io/api/v1/assets/btc/metrics?fields=id,slug,symbol,market_data/price_usd,marketcap/current_marketcap_usd,roi_data,misc_data/sectors";
        const urlMarkets =
            "https://data.messari.io/api/v1/markets/binance-ada-usdt/metrics/price/time-series?start=2023-01-01&end=2023-01-07&interval=1w";
        const expectedState = {
            price: 0,
            change1h: "0",
            change24h: "0",
            daytrend: [0, 0, 0, 0, 0, 0, 0],
            marketcap: "0",
            realvolume24h: "0",
            change7d: "0",
            change30d: "0",
            changeytd: "0",
            sector: "",
        };
        const { result } = renderHook(() =>
            useFetchCrypto(urlAssets, urlMarkets)
        );
        expect(result.current).toEqual(expectedState);
    });
});
