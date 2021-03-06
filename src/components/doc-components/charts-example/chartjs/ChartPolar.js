import BooberComponentCard from 'components/common/BooberComponentCard';
import { getColor, rgbaColor } from 'helpers/utils';
import { chartJsDefaultTooltip } from 'helpers/chartjs-utils';
import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const chartCode = `function ChartOptions() {
 
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets:[
      {
        data: [10, 20, 50, 40, 30],
        backgroundColor: [
          rgbaColor(getColor('facebook'), 0.5),
          rgbaColor(getColor('youtube'), 0.5),
          rgbaColor(getColor('twitter'), 0.5),
          rgbaColor(getColor('linkedin'), 0.5),
          rgbaColor(getColor('success'), 0.5)
        ],
        borderWidth: 1,
        borderColor: getColor('400')
      }
    ],
    labels: ['Facebook', 'Youtube', 'Twitter', 'Linkedin', 'GitHub'],
    borderColor: getColor('400') //- not working
  };

  const options = {
    plugins: {
      tooltip: chartJsDefaultTooltip()
    },
    maintainAspectRatio: false,
    scales: {
      r: {
        grid: {
          color: rgbaColor(getColor('black'), 0.1)
        }
      }
    }
  };

    return (
      <PolarArea data={data} options={options} height={350} />
    );
  }
`;
const ChartPolar = () => {
  return (
    <BooberComponentCard>
      <BooberComponentCard.Header title="Polar Chart" light={false} />
      <BooberComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          PolarArea,
          getColor,
          rgbaColor,
          chartJsDefaultTooltip
        }}
      />
    </BooberComponentCard>
  );
};

export default ChartPolar;
