import { render, screen } from "@testing-library/react";
import React from "react";

import App from "../src/App";
import CryptoCurrency from "../src/components/CryptoCurrency";
import cryptoCurrencies from "../src/constants/Crypto";

describe("App", () => {
    const calculateQuantity = jest.fn();

    it("Muestra que exista almenos una cripto moneda", () => {
        const cryptoCurrenciesList = Object.values(cryptoCurrencies);
        expect(cryptoCurrenciesList.length >= 1).toBe(true);
    });

    it("Renderiza cualquier crypto moneda registrada", () => {
        render(
            <CryptoCurrency
                coin="bitcoin"
                calculateQuantity={calculateQuantity}
            />
        );
        const coinNameElement = screen.getByText("bitcoin");
        expect(coinNameElement).toBeInTheDocument();
    });

    it("renders the price", () => {
        render(
            <CryptoCurrency
                coin="bitcoin"
                calculateQuantity={calculateQuantity}
            />
        );
        const priceElement = screen.getByText("Price: $");
        expect(priceElement).toBeInTheDocument();
    });

    it("renders the quantity", () => {
        render(
            <CryptoCurrency
                coin="bitcoin"
                calculateQuantity={calculateQuantity}
            />
        );
        const quantityElement = screen.getByText("Quantity:");
        expect(quantityElement).toBeInTheDocument();
    });
});
