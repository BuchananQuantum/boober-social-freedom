import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';
import BooberComponentCard from 'components/common/BooberComponentCard';
import { BarChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { tooltipFormatter } from 'helpers/echart-utils';
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer
]);

const chartCode = `function ChartOptions() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

  const getOption = () => ({
    tooltip: {
      trigger: 'axis',
      padding: [7, 10],
      backgroundColor: getColor('100'),
      borderColor: getColor('300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1,
      formatter: tooltipFormatter,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      }
    },
    xAxis: {
      type: 'value',
      boundaryGap: '0%',
      axisLine: {
        show: true,
        lineStyle: {
          color: getColor('300')
        }
      },
      axisTick: { show: true },
      axisLabel: {
        color: getColor('500')
      },
      splitLine: {
        show: false
      },
      min: 600
    },
    yAxis: {
      type: 'category',
      data: months,
      boundaryGap: '0%',
      axisLabel: {
        formatter: value => value.substring(0, 3),
        show: true,
        color: getColor('500'),
        margin: 15
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColor('200')
        }
      },
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: getColor('300')
        }
      }
    },
    series: [
      {
        type: 'bar',
        name: 'Total',
        data,
        lineStyle: { color: getColor('primary') },
        itemStyle: {
          color: getColor('primary'),
          borderRadius: [0, 3, 3, 0]
        },
        showSymbol: false,
        symbol: 'circle',
        smooth: false,
        emphasis: {
          scale: true
        }
      }
    ],
    grid: { right: '3%', left: '10%', bottom: '10%', top: '5%' }
    });
    return (
      <ReactEChartsCore
        echarts={echarts}
        option={getOption()}
        style={{ height: '18.75rem' }}
      />
    );
  }
`;

const HorizontalBarChart = () => {
  return (
    <BooberComponentCard className="h-100">
      <BooberComponentCard.Header title="Horizontal bar chart" light={false} />
      <BooberComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          tooltipFormatter
        }}
      />
    </BooberComponentCard>
  );
};

export default HorizontalBarChart;
