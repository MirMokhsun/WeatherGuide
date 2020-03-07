//     return (
//         <View style={{ flex: 1, backgroundColor: colors.halfBlack }}>
//             <View style={{ height: '10%', alignItems: 'flex-end', justifyContent: 'center' }}>
//                 <Text style={{ color: 'white', margin: 10 }}>Weather for 24 hour</Text>
//             </View>
//             <ScrollView style={{ width: '100%', height: '25%', }} horizontal>
//                 {hours.map(() => {
//                     return (
//                         < View style={{ width: 80, alignItems: 'center', }}>
//                             <Text style={{ color: 'white' }}>15:00</Text>
//                             <View style={{ width: '40%', height: '40%', backgroundColor: '#549', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Icon</Text>
//                             </View>
//                             <View style={{ width: '40%', height: '40%', backgroundColor: '#656984', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text >Icon</Text>
//                             </View>
//                         </View >
//                     )
//                 })}
//             </ScrollView>
//             {/* <View style={{ height: '40%', }}>
//                 <StackedAreaChart
//                     style={{ height: 200, paddingVertical: 10 }}
//                     data={data}
//                     keys={keys}
//                     colors={colors}
//                     showGrid={true}
//                     curve={shape.curveNatural}
//                 >
//                     <XAxis
//                         data={data}
//                         contentInset={data}
//                         svg={{
//                             fill: 'black',
//                             fontSize: 10,
//                         }}
//                         numberOfTicks={10}
//                         formatLabel={(value) => `${value}ºC`}
//                     />
//                 </StackedAreaChart>
//             </View> */}
//             <TouchableOpacity style={{ height: '10%', alignItems: 'flex-end', justifyContent: 'center' }} onPress={() => navigation.navigate(routs.DetailsScreen)}>
//                 <Text style={{
//                     color: 'orange',
//                     textDecorationLine: 'underline',
//                     paddingRight: 10
//                 }}>Details</Text>
//             </TouchableOpacity>
//             <View style={{ height: '10%', flexDirection: 'row' }}>
//                 <Text style={{ margin: 10, color: 'white' }}>Вероятность дождя</Text>
//                 <Text style={{ margin: 10, color: 'white' }}>Вероятность снега</Text>
//             </View>
//         </View >

//     )

// }

import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { times } from './timeCounts';
import CharKit from './charKit';
import routs from '../../services/constans/routs'
import texts from '../../services/constans/texts';

const textViews = [texts.RAIN_PROB, texts.SNOW_PROB];

const WeatherChart = ({ navigation }) => {
    return (
        <View style={styles.cardViewTwo}>
            <View style={styles.viewOne}>
                <Text style={styles.hours}>{texts.HEAD_RIGHT}</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.viewTwo}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                        }}>
                        {times.map(({ time, iconName, iconNameSmall, degree }) => {
                            return (
                                <View>
                                    <View style={styles.box}>
                                        <Text style={styles.timeCount}>{time}</Text>
                                    </View>
                                    <View style={styles.box}>
                                        <Icon name={iconName} size={30} color={'white'} />
                                    </View>
                                    <View style={styles.boxTwo}>
                                        <Icon name={iconNameSmall} size={16} color={'white'} />
                                        <Text style={styles.perText}>{degree}%</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                        }}>
                        <CharKit />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.viewFour}>
                {textViews.map(text => {
                    return (
                        <View style={styles.row}>
                            <Icon name="umbrella" size={20} color={'white'} />
                            <Text style={styles.texts}>{text}</Text>
                        </View>
                    );
                })}
                <TouchableOpacity style={styles.rowThree} onPress={() => navigation.navigate(routs.DetailsScreen)}>
                    <Text style={styles.more}>{texts.DETAILS}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default WeatherChart;
