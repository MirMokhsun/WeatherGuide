import SplashScreen from '../Screens/SplashScreen'
import React, { Component } from 'react'
import App from '../../App'

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScreen: 'Splash'
        };
        setTimeout(() => {
            this.setState({
                currentScreen: 'App'
            })
        }, 2300)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <SplashScreen /> : <App />
        return mainScreen
    }
}