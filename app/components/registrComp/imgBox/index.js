import React from 'react';
import { View, Text, Image, } from 'react-native';
import { styles } from '../style';
import images from '../../../services/constans/images'

const ImgBox = () => {
    return (
        <View style={styles.imgBox}>
            <Image
                source={images.logo}
                style={styles.img} />
            <Text style={styles.txt}>Weather Guide</Text>
        </View>
    )
}

export default ImgBox