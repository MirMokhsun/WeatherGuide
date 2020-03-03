import routs from '../../services/constans/routs'
import texts from '../../services/constans/texts'

const items = [
    {
        onPress: (navigation) => navigation.navigate(routs.MainScreen),
        iconName: 'home',
        title: texts.RETURN_REG,
    },
    {
        onPress: null,
        iconName: 'flare',
        title: texts.GEO,
    },
    {
        onPress: null,
        iconName: 'flare',
        title: texts.RETURN_REG,
    },
    {
        onPress: null,
        iconName: 'add-location',
        title: texts.TEMP,
    },
    {
        onPress: null,
        iconName: 'lock',
        title: texts.LOCK,
    },
    {
        onPress: null,
        iconName: 'notifications',
        title: texts.NOTIFI,
    },
    {
        onPress: null,
        iconName: 'airplay',
        title: texts.BACKGROUND,
    },
    {
        onPress: null,
        iconName: 'map',
        title: texts.WEATHER_MAP,
    },
    {
        onPress: null,
        iconName: 'widgets',
        title: texts.WIDGETS,
    },
    {
        onPress: null,
        iconName: 'contact-mail',
        title: texts.TELL_US,
    },
    {
        onPress: null,
        iconName: 'message',
        title: texts.CONTACT,
    },
    {
        onPress: (navigation) => navigation.navigate(routs.LoginScreen),
        iconName: 'all-out',
        title: texts.LOG_OUT,
    },
]

export default items