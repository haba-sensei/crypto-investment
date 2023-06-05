import { renderHook } from "@testing-library/react";

import useInterval from "../../src/hooks/useInterval";

describe("useInterval", () => {
    // Tests that the callback function is executed after the specified delay.
    it("should execute the callback after the specified delay", () => {
        jest.useFakeTimers();
        const callback = jest.fn();
        const delay = 1000;

        const { rerender } = renderHook(
            (props) => useInterval(props.callback, props.delay),
            {
                initialProps: { callback, delay },
            }
        );
        console.log(rerender);
        expect(callback).not.toBeCalled();
        jest.advanceTimersByTime(delay);
        expect(callback).toBeCalled();
    });

    // Tests that the callback function is only executed once per interval.
    it("should execute the callback once per interval", () => {
        jest.useFakeTimers();
        const callback = jest.fn();
        const delay = 1000;

        const { rerender } = renderHook(
            (props) => useInterval(props.callback, props.delay),
            {
                initialProps: { callback, delay },
            }
        );
        console.log(rerender);
        expect(callback).not.toBeCalled();
        jest.advanceTimersByTime(delay);
        expect(callback).toBeCalledTimes(1);
        jest.advanceTimersByTime(delay);
        expect(callback).toBeCalledTimes(2);
    });

    // Tests that the saved callback is updated when the callback prop changes.
    it("should update the saved callback when the callback prop changes", () => {
        jest.useFakeTimers();
        const callback1 = jest.fn();
        const callback2 = jest.fn();
        const delay = 1000;

        const { rerender } = renderHook(
            (props) => useInterval(props.callback, props.delay),
            {
                initialProps: { callback: callback1, delay },
            }
        );

        expect(callback1).not.toBeCalled();
        jest.advanceTimersByTime(delay);
        expect(callback1).toBeCalledTimes(1);

        rerender({ callback: callback2, delay });
        jest.advanceTimersByTime(delay);
        expect(callback1).toBeCalledTimes(1);
        expect(callback2).toBeCalledTimes(1);
    });
});
