import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getColor, getRandomNumber, rgbaColor } from 'helpers/utils';
import BooberComponentCard from 'components/common/BooberComponentCard';
import { HeatmapChart } from 'echarts/charts';
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
  HeatmapChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  const hours = ['12a', '2a', '4a', '6a', '8a', '10a', '12p', '2p', '4p', '6p', '8p', '10p'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const data = [];
  for (let i = 0; i < 7; i += 1) {
    for (let j = 0; j < 12; j += 1) {
      data.push([j, i, getRandomNumber(5, 12)]);
    }
  }

  const getOption = () => ({
    tooltip: {
      position: 'top',
      padding: [7, 10],
      backgroundColor: getColor('100'),
      borderColor: getColor('300'),
      textStyle: { color: getColor('dark') },
      borderWidth: 1
    },
    grid: {
      right: 5,
      left: 5,
      top: 5,
      bottom: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true
      },
      axisLabel: {
        color: getColor('600')
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: getColor('400')
        }
      }
    },
    yAxis: {
      type: 'category',
      data: days,
      axisLabel: {
        formatter: value => value.substring(0, 3),
        color: getColor('600')
      },
      splitArea: {
        show: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: getColor('400')
        }
      }
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '0%',
      textStyle: {
        color: getColor('600'),
        fontWeight: 500
      },
      inRange: {
        color: [
          rgbaColor(getColor('primary'), 1),
          rgbaColor(getColor('info'), 1),
          rgbaColor(getColor('success'), 1)
        ]
      }
    },
    series: [
      {
        type: 'heatmap',
        data: data,
        label: {
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: rgbaColor(getColor('black'), 0.5)
          }
        }
      }
    ]
    });
    return (
      <ReactEChartsCore
        echarts={echarts}
        option={getOption()}
        style={{ height: '21.88rem' }}
      />
    );
  }
`;

const BasicHeatmapChart = () => {
  return (
    <BooberComponentCard dir="ltr" className="h-100">
      <BooberComponentCard.Header title="Heatmap chart" light={false} />
      <BooberComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          getColor,
          rgbaColor,
          getRandomNumber
        }}
      />
    </BooberComponentCard>
  );
};

export default BasicHeatmapChart;
