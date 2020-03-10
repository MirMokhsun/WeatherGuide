import email from 'react-native-email';

const SendMail = (subj, text) => {
  const to = 'mirmohsun.mamedov@gmail.com';
  email(to, {
    subject: subj,
    body: text,
  }).catch(console.error);
};
export default SendMail;
