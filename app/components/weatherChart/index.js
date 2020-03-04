import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'


export default function App() {
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
    ]

    const colors = ['#8800cc', '#eeccff']
    const keys = ['apples', 'dates']

    return (
        <View style={{ flex: 1, backgroundColor: 'grey' }}>
            <View style={{ flex: 0.1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text style={{ color: 'white', margin: 10 }}>24 Часа спустя</Text>
            </View>


            <View style={{ flex: 0.3 }}>
                <ScrollView style={{ width: '100%', height: 200 }} horizontal>
                    <View style={{ width: 80, margin: 10 }}>
                        <Text style={{ color: 'white' }} >15:00</Text>
                        <View style={{ flex: 0.5, backgroundColor: '#549', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Icon</Text>
                        </View>
                        <View style={{ flex: 0.5, backgroundColor: '#656984', justifyContent: 'center', alignItems: 'center' }}>
                            <Text >Icon</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={{ flex: 0.4 }}>


                <StackedAreaChart
                    style={{ height: 200, paddingVertical: 10 }}
                    data={data}
                    keys={keys}
                    colors={colors}
                    curve={shape.curveNatural}
                />


            </View>
            <View style={{ flex: 0.1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity>
                    <Text style={{ margin: 10, color: 'yellow' }}>Подробнее</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.1, flexDirection: 'row' }}>
                <Text style={{ margin: 10, color: 'white' }}>Вероятность дождя</Text>
                <Text style={{ margin: 10, color: 'white' }}>Вероятность снега</Text>
            </View>
        </View >

    )

}