import { useDispatch } from "react-redux";

const setItems = [
    {
        iconName: 'thermometer',
        text: texts.TEMPER,
        onPress: () => { alert('Switcher is true'), console.log('false') },
        title1: 'F',
        title2: 'C',
    },
    {
        iconName: 'clock',
        text: texts.Time_Format,
        onPress: () => alert('Switcher is true'),
        title1: '24',
        title2: '12',
    },
    {
        iconName: 'wind',
        text: texts.WIND_VEL,
        onPress: () => alert('Switcher is true'),
        title1: 'km',
        title2: 'm',
    },
    {
        iconName: 'lock',
        text: texts.LOCK,
        onPress: () => alert('Switcher is true'),
        title1: null,
        title2: null,
    },
    // {
    //     iconName: 'alert-circle',
    //     text: texts.NOTIFI,
    //     title1: null,
    //     title2: null,
    // },
]

export default setItems;