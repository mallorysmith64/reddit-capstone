import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'

const UserProfile = () => {
  const [user, setUser] = useState([])

  const getUser = async () => {
    const resp = await axios.get('/api/Post')
    console.log('get this post response', resp)
    console.log('get this post', resp.data)
    setUser(resp.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <Nav />
      <section className="body-background">
        <header className="title">My Profile</header>
        <h2>{user.UserName}</h2>
      </section>
    </>
  )
}

export default UserProfile

//todo: using auth 0, username should update when logged into app
