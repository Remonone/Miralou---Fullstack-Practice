import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
  const [user, setUser] = useState<any>()
  useEffect(()=> {
    axios.get('http://localhost:8000/api/v1/users/6393b5dbb66135a0dbd59f2e').then(
      res => setUser(res.data)
    )
  }, [])
  return (
    <div>
        {
          user ? (
            <>
              <img src={user.avatar} alt="" />
              <h2>{user.username}</h2>
              <p>{user.email}</p>
            </>
          ) : (<></>)
        }
      </div>
  )
}

export default Home