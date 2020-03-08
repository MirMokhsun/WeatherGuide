export const initialState = {
    result: require('../../assets/images/Background2.jpg'),
}



function reducer(state = initialState, action) {
    if (action.id == 7) {
        console.log('buttom is working')
        result = require('../../assets/images/Background.jpg')
        return { ...state, result: JSON.stringify(result) }
    }
    return state
}

export default reducer