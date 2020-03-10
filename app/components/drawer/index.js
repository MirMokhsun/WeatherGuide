import routs from '../../services/constans/routs';
import texts from '../../services/constans/texts';
import SendMail from './email/email';

const items = [
  {
    onPress: navigation => navigation.navigate(routs.MainScreen),
    iconName: 'home',
    title: texts.RETURN_REG,
  },
  {
    onPress: navigation => navigation.navigate(routs.Locations),
    iconName: 'add-location',
    title: texts.GEO,
  },
  {
    onPress: null,
    iconName: 'flare',
    title: texts.TEMP,
  },
  // {
  //     onPress: null,
  //     iconName: 'lock',
  //     title: texts.LOCK,
  // },
  // {
  //     onPress: null,
  //     iconName: 'notifications',
  //     title: texts.NOTIFI,
  // },
  {
    onPress: null,
    iconName: 'airplay',
    title: texts.BACKGROUND,
  },
  {
    onPress: navigation => navigation.navigate(routs.Map),
    iconName: 'map',
    title: texts.WEATHER_MAP,
  },
  // {
  //     onPress: null,
  //     iconName: 'widgets',
  //     title: texts.WIDGETS,
  // },
  {
    onPress: () => SendMail(texts.SUBJ2, texts.SUBJ2_TEXT),
    iconName: 'contact-mail',
    title: texts.TELL_US,
  },
  {
    onPress: () => SendMail(texts.SUBJ1, texts.SUBJ1_TEXT),
    iconName: 'message',
    title: texts.CONTACT,
  },
  {
    onPress: navigation => navigation.navigate(routs.LoginScreen),
    iconName: 'all-out',
    title: texts.LOG_OUT,
  },
];

export default items;
// function mapStateToProps(state) {
//     return {
//         back: state.back,
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         number: (id) => dispatch(chacgebg(id)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(items)
