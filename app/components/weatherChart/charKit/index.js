import React from 'react';
import {View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {times} from '../timeCounts';
import colors from '../../../services/constans/colors';

const CharKit = () => {
  return (
    <View>
      <LineChart
        bezier
        height={100}
        fromZero={true}
        yAxisInterval={11}
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        onDataPointClick={data => alert(data.value)}
        width={1500}
        data={{
          datasets: [
            {
              data: times.map(({degree}) => degree),
            },
          ],
        }}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          color: () => colors.halfWhite,
          barPercentage: 0.5,
          decimalPlaces: 5,
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: colors.emerald,
          },
        }}
      />
    </View>
  );
};

export default CharKit;
