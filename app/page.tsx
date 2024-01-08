"use client";
import Image from "next/image";
import { Crd } from "./items/Crd";
import {
  collection,
  addDoc,
  getDoc,
  QuerySnapshot,
  query,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "./firebase";
export default function Home() {
  const [item, setitem] = useState([{description : "" , img : "" , name : "" , price : "" , category : ""}]);
  const [serch , setreach] = useState("")
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot: [{description : string , img : string , name : string , price : number }] | any) => {
      let itemsAray : string[] | any = [];
      querySnapshot.forEach((doc: {
        id: any;
        data(): any;description: any
}) => {
        itemsAray.push({ ...doc.data(), id: doc.id } );
      });
      setitem(itemsAray)
    });
  }, []);
  console.log(item);

  return (
    <main className="flex flex-col w-full h-full  items-center justify-center content-center ">
            <div className="bg-emerald-700 w-full p-3 text-black flex items-center justify-around text-2xl sticky z-10 top-0 ">

<div className="join w-auto">
<input className="input input-bordered join-item input-sm" value={serch} onChange={(e)=>{setreach(e.target.value)}} placeholder="search"/>
</div>

 <h1 className='text-lg' >antakha</h1>
</div>
      <div className="flex flex-col w-full justify-center items-center ">
        <button className="border-0 rounded-lg w-11/12 m-5 h-3 p-10 text-center text-2xl btn bg-emerald-800 hover:bg-emerald-300">
          recomndation
        </button>
        <div className="flex flex-row justify-center items-center flex-wrap">
          {item.map((crdData,i)=>{
            if (serch === "") {
              return <>
          <Crd crdData={crdData} key={i} />
          </>
            }else if(crdData.name.includes(serch) || crdData.description.includes(serch) || crdData.category.includes(serch) ){
              
              return <>
          <Crd crdData={crdData} key={i} />
          </>
            }
             } )}
        
        </div>
      </div> 
    </main>
  );
}
// اضافة صور *
// اضافة منتج *
// تعديل علي منتج *
// حذف منتج *
// تسجيل الدخول *
// بحث
// فلتر
// ديزين
// تيب سكربت
// الترجمة