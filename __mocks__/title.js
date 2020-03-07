import React from 'react'
import { View } from 'react-native'
import TextTicker from 'react-native-text-ticker'


const HeaderTitles = () => {
    return (
        <View style={{
            width: 230,
        }}>
            <TextTicker
                style={{ fontSize: 20 }}
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