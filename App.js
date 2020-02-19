import React, { useState, useEffect } from 'react'
import SideScreen from './App/Screens/Navigation'
import SplashScreen from './App/Screens/SplashScreen'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2300)
  }, [])

  if (loading) return <SplashScreen />

  return <SideScreen />
}



