import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor } from 'helpers/utils';
import BooberComponentCard from 'components/common/BooberComponentCard';
import { BarChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  let data = Array.from(Array(7).keys()).map(() => Math.round(Math.random() * 200));
  const chartRef = useRef(null);

  const run = () => {
    data = data.map(item =>
      Math.random() > 0.9
        ? item + Math.round(Math.random() * 2000)
        : item + Math.round(Math.random() * 200)
    );

    chartRef.current.getEchartsInstance().setOption({
      series: [
        {
          data
        }
      ]
    });
  };
  setTimeout(function () {
    
    chartRef.current && run();
  }, 0);
  setInterval(function () {
    chartRef.current && run();
  }, 3000);

  const getOption = () => ({
    xAxis: {
      max: 'dataMax',
      splitLine: {
        lineStyle: {
          color: getColor('200')
        }
      },
      axisLabel: {
        color: getColor('500')
      }
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      inverse: true,
      axisLabel: {
        color: getColor('500')
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: getColor('300')
        }
      },
      axisTick: {
        show: false
      },
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 4 // only the largest 5 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'right',
          color: getColor('700'),
          fontWeight: 500,
          valueAnimation: true
        },
        itemStyle: {
          color: getColor('primary'),
          borderRadius: [0, 3, 3, 0]
        }
      }
    ],
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
    grid: {
      right: '10%',
      left: 5,
      bottom: 5,
      top: 5,
      containLabel: true
    }
    });
    
    return (
      <ReactEChartsCore
        echarts={echarts}
        ref={chartRef}
        option={getOption()}
        style={{ height: '21.88rem' }}
      />
    );
  }
`;

const RaceChart = () => {
  return (
    <BooberComponentCard className="h-100">
      <BooberComponentCard.Header title="Bar race chart" light={false} />
      <BooberComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor
        }}
      />
    </BooberComponentCard>
  );
};

export default RaceChart;
