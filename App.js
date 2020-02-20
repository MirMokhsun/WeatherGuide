import React, { useState, useEffect } from 'react'
import Navigation from './App/navigation/navigation'
import SplashScreen from './App/screens/splashScreen'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2300)
  }, [])

  if (loading) return <SplashScreen />

  return <Navigation />
}