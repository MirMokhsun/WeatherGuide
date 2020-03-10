import React from 'react';
import {View} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {week} from '../weekCounts';

const CharKit = () => {
  return (
    <View>
      <BarChart
        bezier
        marginRight={5}
        height={100}
        fromZero={true}
        showBarTops={false}
        verticalLabelRotation={30}
        withInnerLines={false}
        withOuterLines={false}
        withHorizontalLabels={false}
        width={392}
        data={{
          datasets: [
            {
              data: week.map(({degree}) => degree),
            },
          ],
        }}
        chartConfig={{
          barRadius: 10,
          backgroundGradientFromOpacity: 0,
          color: () => 'yellow',
        }}
      />
    </View>
  );
};

export default CharKit;
