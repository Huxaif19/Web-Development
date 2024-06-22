import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import auth from './auth/auth'

 const AuthDetails = () => {
    const [authUser, setAuthUser] = useState<Object>()
    useEffect(()=>{
          onAuthStateChanged(auth, (user)=>{
            if (user) {
                setAuthUser(user)
            }else{
                setAuthUser({})
            }
        })
    },[])

  return (
    <div>{authUser ? <>{`SignedIN ${authUser}`}</> : <>SignedOut</>}</div>
  )
}

export default AuthDetails;