import React from 'react';
import { View, Text, Image, } from 'react-native';
import { styles } from './style';
import images from '../../../services/constans/images'
import texts from '../../../services/constans/texts';

export default function ImgBox() {
    return (
        <View style={styles.imgBox}>
            <Image
                source={images.logo}
                style={styles.img} />
            <Text style={styles.txt}>{texts.WEATHER_GUIDE}</Text>
        </View>
    )
}

