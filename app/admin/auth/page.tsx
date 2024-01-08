"use client";
import React, { useEffect, useState } from 'react'
import {ifAuth, logIn, out} from "../../auth"
import { useRouter } from 'next/navigation'
export default function Auth() {
  const router = useRouter()
    const [uANDp,setuANDp] = useState({username : "" , password : ""})
    const [loding , setloding] = useState(false)
    const [error,seterror] = useState("")
    async function onLogin() {
        setloding(true)
        logIn(uANDp,seterror)
        setloding(false)
    }
    useEffect(() => {
      ifAuth(router)
    }, [loding])
    
  return ( <div className='flex justify-center items-center' >
              <div className="flex flex-col text-center">
            <input
              type="text"
              name=""
              id=""
              className="input w-auto max-w-xs m-3 "
              placeholder="username"
              value={uANDp.username}
              onChange={(i: any) => {
                setuANDp({...uANDp,username : i.target.value})
              }}
            />
            <input
              type="password"
              name=""
              id=""
              className="input w-auto max-w-xs m-3"
              placeholder="password"
              value={uANDp.password}
              onChange={(i: any) => {
                setuANDp({...uANDp,password : i.target.value})
              }}
            />
            {loding ? <span className="loading loading-spinner loading-lg text-center"></span> : <button onClick={onLogin} className="btn m-3">log in</button>}
            <h1>{error}</h1>
            <button onClick={out} >out</button>
          </div>
    </div>
  )
}
