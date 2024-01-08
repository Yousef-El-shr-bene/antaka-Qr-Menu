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
  const [recomind,setrecomind] = useState(false)
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
  return (
    <main className="flex flex-col w-full h-full  items-center justify-center content-center ">
            <div className="bg-emerald-700 w-full p-3 text-black flex items-center justify-around text-2xl sticky z-10 top-0 ">

<div className="join w-auto">
<input className="input input-bordered input-md" value={serch} onChange={(e)=>{setreach(e.target.value)}} placeholder="search"/>
</div>

 <h1 className='text-lg' >antakha</h1>
</div>
      <div className="flex flex-col w-full justify-center items-center ">
        <button onClick={()=>{setrecomind(!recomind); setreach("")}} className="border-0 rounded-lg w-11/12 m-5 h-3 p-10 text-center text-2xl btn bg-emerald-800 hover:bg-emerald-300">
          Suggest something to me 
        </button>
        <div className={`w-full bg-slate-100 shadow-2xl flex flex-col items-center justify-between ${!recomind ? "hidden" : "m-5" } `} >
          <h1>What are you thinking about?</h1>
          <div className="flex justify-around items-center w-full " >
          <button className={`btn ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("food")}} >food</button>
          <button className={`btn ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("drink")}} >drink</button>
          <button className={`btn ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("Shisha"); setrecomind(!recomind)}} >Shisha</button>
          <button className={`btn ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("Desert"); setrecomind(!recomind)}} >Desert</button>

          <button className={`btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Pizza"); setrecomind(!recomind)}} >Pizza</button>
          <button className={`btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " salad"); setrecomind(!recomind)}} >salad</button>
          <button className={`btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " main dish"); setrecomind(!recomind)}} >main dish</button>
          <button className={`btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " pasta"); setrecomind(!recomind)}} >pasta</button>

          <button className={`btn ${serch === "drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Iced drink")}} >Iced drink</button>
          <button className={`btn ${serch === "drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " hot drink")}} >hot drink</button>

          <button className={`btn ${serch === "drink Iced drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " With espresso"); setrecomind(!recomind)}} >With espresso</button>
          <button className={`btn ${serch === "drink Iced drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Fresh"); setrecomind(!recomind)}} >Fresh</button>

          <button className={`btn ${serch === "drink hot drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " With espresso"); setrecomind(!recomind)}} >With espresso</button>
          <button className={`btn ${serch === "drink hot drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Without espresso"); setrecomind(!recomind)}} >Without espresso</button>

          </div>
          <input type="text" value={serch} className="input input-bordered input-md m-5" />
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap">
          {item.map((crdData,i)=>{
            const LOserch = serch.toLowerCase()
            const LOserchArr = LOserch.split(" ")
            if (LOserch === "") {
              
              return <>
          <Crd crdData={crdData} key={i} />
          </>
            }else if(crdData.name.toLowerCase().includes(LOserch) || crdData.description.toLowerCase().includes(LOserch) || crdData.category.toLowerCase().includes(LOserch) || LOserchArr.includes(crdData.description.toLowerCase()) || LOserchArr.includes(crdData.name.toLowerCase()) || LOserchArr.includes(crdData.category.toLowerCase())  ){
              
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
// بحث *
// فلتر
// ديزين

// Shisha

// food
// Pizza
// salad
// main dish
// pasta

// drink
// Fresh
// With espresso
// Without espresso
// hot
// Iced drink

// Desert