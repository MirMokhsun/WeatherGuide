import email from 'react-native-email'
import texts from '../../../services/constans/texts';

const SendMail = () => {
    const to = 'mirmohsun.mamedov@gmail.com';
    email(to, {
        subject: texts.Test_Title,
        body: texts.Test_Text,
    }).catch(console.error);
};
export default SendMail;