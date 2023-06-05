import { colorHelper, symbolHelper } from "../../src/helpers/commonHelpers";

describe("CommonHelpers", () => {
    // Tests that the function returns the expected class for a value greater than 0.
    it("test_color_helper_returns_green_class_for_value_greater_than_zero", () => {
        expect(colorHelper(5)).toBe("px-4 py-2 text-green-600");
    });

    // Tests that the function returns the expected class for a value equal to 0.
    it("test_color_helper_returns_red_class_for_value_equal_to_zero", () => {
        expect(colorHelper(0)).toBe("px-4 py-2 text-red-600");
    });

    // Tests that the function returns the expected class for a value less than 0.
    it("test_color_helper_returns_red_class_for_value_less_than_zero", () => {
        expect(colorHelper(-5)).toBe("px-4 py-2 text-red-600");
    });

    // Tests that the function handles negative values correctly.
    it("test_color_helper_handles_negative_values_correctly", () => {
        expect(colorHelper(-10)).toBe("px-4 py-2 text-red-600");
    });

    // Tests that the function returns the expected class for a NaN value.
    it("test_color_helper_returns_red_class_for_nan_value", () => {
        expect(colorHelper(NaN)).toBe("px-4 py-2 text-red-600");
    });

    // Tests that the function returns a string with a plus sign when given a positive value.
    it("test_symbol_helper_positive_value", () => {
        expect(symbolHelper(5)).toBe("+5%");
    });

    // Tests that the function returns a string without a plus sign when given a zero value.
    it("test_symbol_helper_zero_value", () => {
        expect(symbolHelper(0)).toBe("0%");
    });

    // Tests that the function returns a string when given a NaN value.
    it("test_symbol_helper_nan_value", () => {
        expect(symbolHelper(NaN)).toBe("NaN%");
    });
});
