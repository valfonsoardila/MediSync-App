import React, { useEffect } from "react";
import "./HomePage.css";
import * as echarts from "echarts";
import { motion } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    var chartDom = document.getElementById("chart");
    var myChart = echarts.init(chartDom);
    var option = {
      title: {
        text: "Sales & Expenses",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["INSU", "MDEF", "DEFI", "ACPT", "SUFI", "SOBR", "EXCE"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };
    myChart.setOption(option);
  }, []);
  return (
    <motion.div className="home-page" initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}>
      <div className="columnOne">
        <div className="columnOne-rowOne">
          <div id="chart" className="chart-lineal"/>
        </div>
        <div className="columnOne-rowTwo"></div>
      </div>
      <div className="columnTwo"></div>
    </motion.div>
  );
};

export default HomePage;
