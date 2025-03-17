'use client'
import { useState } from "react"
import {InputsEdit} from '../items/InputsEdit'
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
export  function EditDoc({crdData} : { crdData :{ description: string, img: string, name: string, price: number, id:string }}) {
    let {description ,img ,name ,price,id } = crdData
    const [crd , usecrd] = useState(false)
    const [onEdit,setonEdit] = useState(false)

     function deleteDocFun() {
      console.log(db,"items",id);
      
       deleteDoc(doc(db,"items",id));
    }
    
    return <div className="flex justify-center items-center flex-col" > <button onClick={ () => crd ? usecrd(false) : usecrd(true)}> <div className={`flex flex-col justify-center items-center h-auto w-80 m-10 card bg-slate-50 hover:bg-slate-200 transition ${onEdit ? "hidden" : ""}`}>
    <img
      src={img}
      className={`w-full h-72    shadow-2xl ${crd ? "rounded-t-2xl" : "rounded-2xl" } `}
    />
    <div className="card-title p-1">{name}</div>
 <div className={`"text-center text-base p-1 ${ crd ? "" : "hidden" } break-words`} >
        <p className="break-words" >{description}</p>
    </div> 
    <div className={`bg-slate-950 w-80 text-white rounded-b-lg ${ crd ? "" : "hidden" } `} >prise : {price} EGP</div>
    </div>
    </button>
    {onEdit ? <InputsEdit crdData={crdData} key={id} /> : ""}
    <div className="flex justify-center items-center w-fit mx-5" >
    <button className="btn w-40 mx-4" onClick={()=>{setonEdit(!onEdit)}}>Edit</button>
      <button className="btn w-20 mx-4 bg-red-700 border-0 " onClick={deleteDocFun} >delete</button>
    </div>
    </div>
}
 