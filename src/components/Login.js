import React from 'react';
import { ClerkProvider, SignedIn, SignedOut, UserButton, RedirectToSignIn, useAuth } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCookie from '../services/clerk/GetUser/UserCookie';

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const serverUrl = process.env.REACT_APP_SERVER_URL;

const Dashboard = () => {
  const [posts, setPosts] = useState([])
  const { getToken } = useAuth()

  useEffect(() => {
    ;(async () => {
      try {
        const token = await getToken()
        console.log('token: ', token)
        // Get posts from server
        const {
          data: { posts },
        } = await axios.get(`${serverUrl}/auth/user/posts`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        setPosts(posts)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  return (
    <>
      <UserButton />
    </>
  )
}

function Login() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div className="App">
        
          <SignedIn>
            <Dashboard />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        <UserCookie/>
      </div>
    </ClerkProvider>
  )
}

export default Login;