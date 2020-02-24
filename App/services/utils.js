import { Dimensions } from 'react-native';


const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

// const checkIsIOs = () => {
//     return Platform.OS === "ios";
// }

export default {
    size: {
        height,
        width,
    }
}