import React from 'react';
import { Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js for `destroy()` method
import { Col, Row, Typography } from 'antd';
import { useEffect } from 'react';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale); // Register CategoryScale
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName,chartId  }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  console.log("dtatat",currentPrice,coinHistory,coinName);
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i]?.price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i]?.timestamp).toLocaleDateString());
  }
  console.log(coinPrice);
  console.log("?????????????????????");
  console.log(coinTimestamp);
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  useEffect(() => {
    // Destroy chart when component unmounts (if necessary)
    return () => {
      if (chartId) {
        Chart.getChart(chartId).destroy();
      }
    };
  }, []);
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} id={chartId} /> {/* Use chartId for unique canvas */}
    </>
  );
};

export default LineChart;
