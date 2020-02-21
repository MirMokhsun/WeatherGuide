const { width, height } = Dimensions.get('window');

const checkIsIOs = () => {
    return Platform.OS === "ios";
}

export default {
    size: {
        height,
        width,
    }
}