'use client'
import { useState } from "react"

export  function Crd({ crdData} : { crdData : {description : string , img : string , name : string , price : string}}) {
    const {description ,img ,name ,price } = crdData
    const [crd , usecrd] = useState(false)
    return <button onClick={ () => crd ? usecrd(false) : usecrd(true)}> <div className="flex flex-col justify-center items-center h-auto w-80 m-10 card bg-slate-50 hover:bg-slate-200 transition ">
    <img
      src={img}
      alt="Chicken-Alfredo-Pasta"
      className={`w-full h-72    shadow-2xl ${crd ? "rounded-t-2xl" : "rounded-2xl" } `}
    />
    <div className="card-title p-1 ">{name}</div>
 <div className={`"text-center text-base p-1 ${ crd ? "" : "hidden" } `} >
        <h1> {description}</h1>
    </div> 

    <div className={`bg-slate-950 w-80 text-white rounded-b-lg ${ crd ? "" : "hidden" } `} >prise : {price} EGP</div>
    </div>
    </button>
}
 