import React from 'react'
import { View } from 'react-native'
import TextTicker from 'react-native-text-ticker'
import colors from '../app/services/constans/colors'

const HeaderTitles = () => {
    return (
        <View style={{
            alignSelf: 'flex-start',
            width: '75%',
        }}>
            <TextTicker
                style={{ fontSize: 20, color: colors.white }}
                duration={10000}
                loop
                bounce
                repeatSpacer={50}
                marqueeDelay={1000}
            >
                85k Babek Prospekti, Baki, Azerbaijan
            </TextTicker>
        </View>
    )
}

export default HeaderTitles