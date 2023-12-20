import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
export default function Chart({
  color="var(--color-brand--3)",
  data=[
    { x: "Mon", y: 231 },
    { x: "Tue", y: 122 },
    { x: "Wed", y: 63 },
    { x: "Thu", y: 421 },
    { x: "Fri", y: 122 },
    { x: "Sat", y: 323 },
    { x: "Sun", y: 111 },
  ]
}) {
  let labelRef = useRef();
  useEffect(() => {
    const options = {
      colors: ["var(--color-white)"],
      series: [
        {
          name: "Organic",
          color,
          data,
        },
      ],
      chart: {
        type: "bar",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    };

    if (labelRef.current && typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(labelRef.current, options);
      chart.render();
    }
  });
  return (
    <div className="max-w-base w-full rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div ref={labelRef}></div>
      <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
              <div>
                <h5 className="leading-none text-3xl font-bold text-gray-100 dark:text-white pb-2">
                  Active Users
                </h5>
                <div className="flex">
                  <div className="flex items-center text-base font-semibold text-green-500 dark:text-green-500 text-center">
                  23%
                    <svg
                      className="w-3 h-3 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13V1m0 0L1 5m4-4 4 4"
                      />
                    </svg>
                  </div>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  than last week
                  </p>
                </div>
              </div>
             
            </div>
    </div>
  );
}
