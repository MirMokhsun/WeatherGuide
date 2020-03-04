import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';
import images from '../../../services/constans/images'
import texts from '../../../services/constans/texts'

const ImgBox = () => {
    return (
        <View style={styles.imageBox}>
            <Image
                source={images.logo}
                style={styles.image} />
            <Text style={styles.txt}>{texts.WEATHER_GUIDE}</Text>
        </View>
    )
}

export default ImgBox