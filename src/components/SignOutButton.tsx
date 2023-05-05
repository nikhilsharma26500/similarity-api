"use client"
import { FC, useState } from 'react';
import Button from './ui/button';
import { signIn, signOut } from 'next-auth/react';

interface SignOutButtonProps {
  
}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setLoading] = useState<boolean>(false)

  const signUserOut = async () => {
    setLoading(true)
    try{
      await signOut()
    } catch (error) {
      // toast({
      //   title: 'Error signing out',
      //   message: 'Please try again later',
      //   type: 'error'
      // })
    }
  }

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  )
}

export default SignOutButton