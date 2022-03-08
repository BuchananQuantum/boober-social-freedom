import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';
import BooberComponentCard from 'components/common/BooberComponentCard';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import dayjs from 'dayjs';
import { BarChart } from 'echarts/charts';
echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  const days = [
    '2021-06-05',
    '2021-06-06',
    '2021-06-07',
    '2021-06-08',
    '2021-06-09',
    '2021-06-10',
    '2021-06-11',
    '2021-06-12',
    '2021-06-13',
    '2021-06-14',
    '2021-06-15'
  ];

  const getOption = () => ({
    legend: {
      data: ['Expenditure', 'Income'],
      textStyle: {
        color: getColor('600')
      }
    },
    tooltip: {
      trigger: 'axis',
      padding: [7, 10],
      backgroundColor: getColor('100'),
      borderColor: getColor('300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      /* eslint-disable prefer-destructuring */
      formatter: function (params) {
        var tar;
        if (params[1].value !== '-') {
          tar = params[1];
        } else {
          tar = params[2];
        }
        return (
          dayjs(tar.name).format('MMM DD') + '<br/>' + tar.seriesName + ' : ' + tar.value
        );
      },
      transitionDuration: 0,
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: days,
      axisLine: {
        lineStyle: {
          color: getColor('300'),
          type: 'solid'
        }
      },
      axisTick: { show: false },
      axisLabel: {
        color: getColor('400'),
        formatter: value => dayjs(value).format('MMM DD'),
        margin: 15
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: '0%',
      axisLabel: {
        show: true,
        color: getColor('400'),
        margin: 15
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColor('200')
        }
      },
      axisTick: { show: false },
      axisLine: { show: false },
      min: 600
    },
    series: [
      {
        name: 'Assist',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          }
        },
        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
      },
      {
        name: 'Income',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'top',
          color: getColor('600')
        },
        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-'],
        itemStyle: {
          color: getColor('primary'),
          borderRadius: [3, 3, 0, 0]
        }
      },
      {
        name: 'Expenditure',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'bottom',
          color: getColor('600')
        },
        data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203],
        itemStyle: {
          color: getColor('success'),
          borderRadius: [3, 3, 0, 0]
        }
      }
    ],
    grid: { right: '3%', left: '10%', bottom: '10%', top: '10%' }
  }); 

  return (
    <ReactEChartsCore
    echarts={echarts}
    option={getOption()}
    style={{ height: '21.88rem' }}
  />
  );
}`;

const WaterFallChart = () => {
  return (
    <BooberComponentCard className="h-100">
      <BooberComponentCard.Header title="Water fall chart" light={false} />
      <BooberComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          dayjs
        }}
      />
    </BooberComponentCard>
  );
};

export default WaterFallChart;
