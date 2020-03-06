import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { StackedAreaChart, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import hours from '../../../__mocks__/hours'
import routs from '../../services/constans/routs'

export default function WeatherChart({ navigation }) {

    const data = [
        {
            apples: 384,
            dates: 40,
        },
        {
            apples: 160,
            dates: 40,
        },
        {
            apples: 64,
            dates: 40,
        },
        {
            apples: 232,
            dates: 40,
        },
        {
            apples: 1312,
            dates: 1234,
        },
        {
            apples: 5432,
            dates: 123,
        },
        {
            apples: 321,
            dates: 123,
        },
    ]

    const colors = ['#8800cc', '#eeccff']
    const keys = ['apples', 'dates']

    return (
        <View style={{ flex: 1, backgroundColor: colors.halfBlack }}>
            <View style={{ height: '10%', alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text style={{ color: 'white', margin: 10 }}>Weather for 24 hour</Text>
            </View>
            <ScrollView style={{ width: '100%', height: '25%', }} horizontal>
                {hours.map(() => {
                    return (
                        < View style={{ width: 80, alignItems: 'center', }}>
                            <Text style={{ color: 'white' }}>15:00</Text>
                            <View style={{ width: '40%', height: '40%', backgroundColor: '#549', justifyContent: 'center', alignItems: 'center' }}>
                                <Text>Icon</Text>
                            </View>
                            <View style={{ width: '40%', height: '40%', backgroundColor: '#656984', justifyContent: 'center', alignItems: 'center' }}>
                                <Text >Icon</Text>
                            </View>
                        </View >
                    )
                })}
            </ScrollView>
            {/* <View style={{ height: '40%', }}>
                <StackedAreaChart
                    style={{ height: 200, paddingVertical: 10 }}
                    data={data}
                    keys={keys}
                    colors={colors}
                    showGrid={true}
                    curve={shape.curveNatural}
                >
                    <XAxis
                        data={data}
                        contentInset={data}
                        svg={{
                            fill: 'black',
                            fontSize: 10,
                        }}
                        numberOfTicks={10}
                        formatLabel={(value) => `${value}ºC`}
                    />
                </StackedAreaChart>
            </View> */}
            <TouchableOpacity style={{ height: '10%', alignItems: 'flex-end', justifyContent: 'center' }} onPress={() => navigation.navigate(routs.DetailsScreen)}>
                <Text style={{
                    color: 'orange',
                    textDecorationLine: 'underline',
                    paddingRight: 10
                }}>Details</Text>
            </TouchableOpacity>
            <View style={{ height: '10%', flexDirection: 'row' }}>
                <Text style={{ margin: 10, color: 'white' }}>Вероятность дождя</Text>
                <Text style={{ margin: 10, color: 'white' }}>Вероятность снега</Text>
            </View>
        </View >

    )

}