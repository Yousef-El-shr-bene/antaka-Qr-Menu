"use client";
import { Crd } from "./items/Crd";
import {
  collection,
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
    onSnapshot(q, (querySnapshot: [{description : string , img : string , name : string , price : number }] | any) => {
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
            <div className="bg-slate-100 shadow-2xl border-b-2 w-full p-3 text-black flex items-center justify-around text-2xl sticky z-10 top-0 ">
<div className="join w-auto">
<input className="input input-bordered input-md bg-slate-950 text-white" value={serch} onChange={(e)=>{setreach(e.target.value)}} placeholder="search"/>
</div>
 <h1 className='text-xl font-extrabold' >antakha</h1>
</div>
      <div className="flex flex-col w-full justify-center items-center ">
        <button onClick={()=>{setrecomind(!recomind); setreach("")}} className={`border-0 rounded-lg w-11/12 m-5 h-3 p-10 text-center text-base btn bg-slate-200 hover:bg-slate-300 `}>
         <h1 className="text-center text-slate-950" > Suggest something to me </h1>

        </button>
        <div className={`w-full bg-slate-100 shadow-2xl flex flex-col items-center flex-wrap justify-between m-5 ${!recomind ? "hidden" : "p-5" } `} >
          <h1 className="text-sm text-black mb-10" >What are you thinking about?</h1>
          <div className="flex justify-around items-center w-full " >
          <button className={`bg-inherit hover:bg-inherit text-black border-0 h-24 w-24 btn  ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("food")}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2Ffood.jpg?alt=media&token=fcd102b3-4fe8-4136-b9ad-8031dcb91eb9" alt="" className="w-full h-auto rounded-2xl " /> food</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0 h-24 w-24 btn ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("drink")}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2Fhot-drink.webp?alt=media&token=752ca0cd-42e5-4ecc-afd3-bfffd019248d" alt="" className="w-full h-auto rounded-2xl " /> drink</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0 h-24 w-24 btn ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("Shisha"); setrecomind(!recomind)}} ><img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2FShisha.jpg?alt=media&token=bd811095-3886-4fee-8402-ff490039a4df" alt="" className="w-auto h-auto rounded-2xl " /> Shisha</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0 h-24 w-24 btn ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("dessert"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2FDessert.jpg?alt=media&token=d1bc91a6-64e9-4adb-b767-5a920fc44e1d" alt="" className="w-auto h-auto rounded-2xl " /> Dessert</button>

          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Pizza"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2FPizza.webp?alt=media&token=fceaa468-519b-4fd1-83eb-20cc314cfe33" alt="" className="w-full h-auto rounded-2xl"/> Pizza</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " salad"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2Fsalad.jpg?alt=media&token=5869106c-30a8-444e-b41e-bfeb849225cd" alt="" className="w-full h-auto rounded-2xl"/> salad</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " main dish"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2Fmain-dish.jpg?alt=media&token=622589de-c72f-4eae-ba74-2019b903cd58" alt="" className="w-full h-auto rounded-2xl"/> main dish</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " pasta"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2Ffood.jpg?alt=media&token=fcd102b3-4fe8-4136-b9ad-8031dcb91eb9" alt="" className="w-full h-auto rounded-2xl"/> pasta</button>

          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Iced drink")}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2FIced-drink.jpg?alt=media&token=20c3ec5c-857e-4d53-ac70-b05ad8430c1c" alt="" className="w-full h-auto rounded-2xl"/> Iced drink</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " hot drink")}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2Fhot-drink.webp?alt=media&token=752ca0cd-42e5-4ecc-afd3-bfffd019248d" alt="" className="w-full h-auto rounded-2xl"/> hot drink</button>

          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink Iced drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " With espresso"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2Fdrink.jpg?alt=media&token=d5c3f0fb-ac3e-48cd-a7d6-b602c0b52648" alt="" className="w-full h-auto rounded-2xl"/> With espresso</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink Iced drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Fresh"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2Fment.jpg?alt=media&token=e10e0e46-ae4f-4d84-8c86-a792338703ae" alt="" className="w-full h-auto rounded-2xl"/> Fresh</button>

          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink hot drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " With espresso"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2Fhot-drink.webp?alt=media&token=752ca0cd-42e5-4ecc-afd3-bfffd019248d" alt="" className="w-full h-auto rounded-2xl"/> With espresso</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink hot drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Without espresso"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/antaka-sores%2FWithout-espresso.jpg?alt=media&token=f4f30031-4d53-4548-8c85-1b924c809424" alt="" className="w-full h-auto rounded-2xl"/> Without espresso</button>

          </div>
          <input type="text" value={serch} className="input input-bordered input-md mt-10 bg-white text-black border-0 input-disabled text-center " />
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
// فلتر *
// ديزين *

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