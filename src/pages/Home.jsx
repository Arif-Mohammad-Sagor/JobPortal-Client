import React from 'react'
import Blog from '../components/Blog'
import MyProfile from '../components/MyProfile'
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'

const Home = () => {
  return (
      <>  <Hero />
          <Jobs/>
          <MyProfile/>
          <Blog />

      </>
  )
}

export default Home