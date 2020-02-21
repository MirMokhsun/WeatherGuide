// import React, {Component, useState, useEffect } from 'react'
// import Navigation from './app/navigation/navigation'
// import SplashScreen from './app/screens/splashScreen'

// export default function App() {
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   setTimeout(() => setLoading(false), 2300)
//   // }, [])

//   // if (loading) return <SplashScreen />

//   return <SplashScreen />
// }
import React, { Component } from 'react';
// import SplashScreen from './app/screens/splashScreen'
// import Navigation from './app/navigation/navigation'
import { TabNavigator } from './app/navigation/tabnavigation';

export default function App() {
  console.log('navigation', props)
  return (
    <TabNavigator />
  )
} 
