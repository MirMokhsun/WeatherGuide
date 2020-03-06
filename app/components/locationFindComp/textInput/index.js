import React from 'react';
import { TextInput } from 'react-native';
import styles from './style'
import texts from '../../../services/constans/texts';
import colors from '../../../services/constans/colors';

const TextInputFinder = () => {
    return (
        < TextInput
            style={styles.textInput}
            placeholder={texts.TEXT_IN4}
            placeholderTextColor={colors.white} />
    );

}
export default TextInputFinder