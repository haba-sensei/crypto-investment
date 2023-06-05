import { formatPrice, formatValue } from "../../src/helpers/formatValue";

describe("formatValue", () => {
    // Tests that the function returns the correct string format for a positive number less than 1 million.
    it("test_positive_number_less_than_1_million", () => {
        expect(formatValue(500)).toBe("500.00");
    });

    // Tests that the function returns the correct string format for a positive number between 1 million and 1 billion.
    it("test_positive_number_between_1_million_and_1_billion", () => {
        expect(formatValue(500000000)).toBe("500.00M");
    });

    // Tests that the function returns the correct string format for an input value of 0.
    it("test_zero_input", () => {
        expect(formatValue(0)).toBe("0.00");
    });

    // Tests that the function returns the correct string format for an input value greater than or equal to 1 billion.
    it("test_input_greater_than_or_equal_to_1_billion", () => {
        expect(formatValue(1500000000)).toBe("1.50B");
    });

    // Tests that the function returns the correct string format for a negative number less than 1 million.
    it("test_negative_number_less_than_1_million", () => {
        expect(formatValue(-500)).toBe("-500.00");
    });

    // Tests that the function returns the correct string format for a negative number between 1 million and 1 billion.
    it("test_negative_number_between_1_million_and_1_billion", () => {
        expect(formatValue(-500000000)).toBe("-500.00M");
    });

    // Tests that the function returns a correctly formatted price for valid input values.
    it("test_format_price_valid_input", () => {
        expect(formatPrice(10.1234, 2)).toBe(10.12);
        expect(formatPrice(5, 0)).toBe(5);
        expect(formatPrice(1000.5678, 3)).toBe(1000.568);
    });

    // Tests that the function correctly handles negative input values.
    it("test_format_price_negative_value", () => {
        expect(formatPrice(-10.1234, 2)).toBe(-10.12);
        expect(formatPrice(-5, 0)).toBe(-5);
        expect(formatPrice(-1000.5678, 3)).toBe(-1000.568);
    });

    // Tests that the function correctly handles input digits of zero.
    it("test_format_price_zero_digits", () => {
        expect(formatPrice(10.1234, 0)).toBe(10);
        expect(formatPrice(-5, 0)).toBe(-5);
        expect(formatPrice(1000.5678, 0)).toBe(1001);
    });

    // Tests that the function correctly handles input digits greater than the number of decimal places in the value.
    it("test_format_price_greater_digits", () => {
        expect(formatPrice(10.1234, 5)).toBe(10.1234);
        expect(formatPrice(-5, 3)).toBe(-5.0);
        expect(formatPrice(1000.5678, 10)).toBe(1000.5678);
    });
});
