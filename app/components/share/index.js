import { Share } from 'react-native'


const onShare = async () => {
    try {
        const result = await Share.share({
            title: 'Do u know how app can share something?',
            message:
                'Hey, my app can share some data with u))',
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
};

export default onShare