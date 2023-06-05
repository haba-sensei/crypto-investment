import Chart, { ChartConfiguration } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

interface HistoricGraphProps {
    data?: number[];
}

const HistoricGraph: React.FC<HistoricGraphProps> = ({ data }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart<"line"> | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const ctx = chartRef.current.getContext("2d");

            if (ctx) {
                const chartData = {
                    labels: ["", "", "", "", "", ""],
                    datasets: [
                        {
                            label: "",
                            data: data,
                            borderWidth: 1,
                            fill: true,
                        },
                    ],
                };

                chartInstance.current = new Chart(ctx, {
                    type: "line",
                    data: chartData,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: {
                            duration: 0,
                        },
                        scales: {
                            y: {
                                display: false,
                                beginAtZero: false,
                            },
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    },
                } as ChartConfiguration<"line">);
            }
        }
    }, [data]);

    return (
        <canvas
            ref={chartRef}
            style={{ width: "100px", height: "70px" }}
        ></canvas>
    );
};

export default HistoricGraph;
