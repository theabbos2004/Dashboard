import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import styles from "./style.module.scss";
export default function LinerChart({
  categories=['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
  series=[
    {
      name: "Developer Edition",
      data: [150, 141, 145, 152, 135, 125],
      color: "#1A56DB",
    },
    {
      name: "Designer Edition",
      data: [43, 13, 65, 12, 42, 73],
      color: "#7E3BF2",
    },
  ]
}) {
  let labelRef=useRef()
  useEffect(() => {
    let options = {
        // set the labels option to true to show the labels on the X and Y axis 
        xaxis: {
          show: true,
          categories,
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClassName: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClassName: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            },
            formatter: function (value) {
              return '$' + value;
            }
          }     
        },
        series,
        chart: {
          sparkline: {
            enabled: false
          },
          height: "100%",
          width: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        legend: {
          show: false
        },
        grid: {
          show: false,
        },
      }
  
      if (labelRef.current && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(labelRef.current, options);
        chart.render();
      }
  });
  return (
          <div className="max-w-base  w-full rounded-lg shadow dark:bg-gray-800">
            <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
              <div>
                <h5 className="leading-none text-3xl font-bold text-gray-100 dark:text-white pb-2">
                Sales overview
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
                  more in 2021
                  </p>
                </div>
              </div>
             
            </div>
            <div ref={labelRef} className="px-2.5"></div>
          </div>
  )
}
