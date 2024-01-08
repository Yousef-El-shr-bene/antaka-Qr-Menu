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
          <button className={`bg-inherit hover:bg-inherit text-black border-0 h-24 w-24 btn  ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("food")}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F92cc7c6f-4d42-46b1-8d3e-f3644b8a5b7cCreamy-dill-salmon-pasta-4.jpg?alt=media&token=45f540a9-85c4-4d34-82b0-493bc668cabc" alt="" className="w-full h-auto rounded-2xl " /> food</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0 h-24 w-24 btn ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("drink")}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F95f0dc7a-98ca-4faf-a4af-bce5486bbeadGettyImages-1255515729%20(1).jpg?alt=media&token=d0355faa-0e70-4996-bf17-128fc83f88fe" alt="" className="w-full h-auto rounded-2xl " /> drink</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0 h-24 w-24 btn ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("Shisha"); setrecomind(!recomind)}} ><img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F85c599cf-aedc-4e9d-8165-d069bbb833eeWE-PUFF-Colorful-LED-Hookah-Shisha-Lights-Show-Ring-Lamp-Magnet-Viscose-Two-Types-with-Remote.webp?alt=media&token=99d82f4d-2ca0-4475-9dac-da96038b3b4a" alt="" className="w-auto h-auto rounded-2xl " /> Shisha</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0 h-24 w-24 btn ${serch === "" ? "" : "hidden"}`} onClick={()=>{setreach("Dessert"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F33c6b556-12ab-437a-94d6-a95ff44aa0e18419-easy-sour-cream-cheesecake-DDMFS-beauty-4x3-BG-2747-44b427d330aa41aa876269b1249698a0.jpg?alt=media&token=ace042b2-d0f1-4093-a59f-5db42f7a382a" alt="" className="w-auto h-auto rounded-2xl " /> Dessert</button>

          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Pizza"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F5c2ee86b-5334-4158-8238-7c3bf577e75aCreamy-dill-salmon-pasta-4.jpg?alt=media&token=c2f0ffcc-6e73-43f4-97bb-168c0dc07a1b" alt="" className="w-full h-auto rounded-2xl"/> Pizza</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " salad"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F7242d2a3-e97c-49a8-9ae5-5910fc169f2fsalad.jpg?alt=media&token=4c03c519-a518-4056-940c-2c03d7eb6cbf" alt="" className="w-full h-auto rounded-2xl"/> salad</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " main dish"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2Fc1dccb80-fb0a-440c-8ee1-f10fded51f6e1387918756116.jpeg?alt=media&token=0a603a34-ad68-4196-a87c-ceb9016211dc" alt="" className="w-full h-auto rounded-2xl"/> main dish</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "food" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " pasta"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F92cc7c6f-4d42-46b1-8d3e-f3644b8a5b7cCreamy-dill-salmon-pasta-4.jpg?alt=media&token=45f540a9-85c4-4d34-82b0-493bc668cabc" alt="" className="w-full h-auto rounded-2xl"/> pasta</button>

          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Iced drink")}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2Ff64a154f-bf85-4e23-baa9-6802d846c003SES-electric-iced-tea-cocktail-761047-hero-01-c257345390dd4c08afee8a5b4d3568e2.jpg?alt=media&token=1119a9fb-7fbf-4b79-a457-67660942d524" alt="" className="w-full h-auto rounded-2xl"/> Iced drink</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " hot drink")}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F20ffd2fe-182c-4b25-a4eb-f3b63eec74f6cup-of-espresso.jpg?alt=media&token=1d9975cf-5e97-4019-bee8-bb75224c154d" alt="" className="w-full h-auto rounded-2xl"/> hot drink</button>

          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink Iced drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " With espresso"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F20ffd2fe-182c-4b25-a4eb-f3b63eec74f6cup-of-espresso.jpg?alt=media&token=1d9975cf-5e97-4019-bee8-bb75224c154d" alt="" className="w-full h-auto rounded-2xl"/> With espresso</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink Iced drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Fresh"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F0f93ed6e-928d-48d0-b0b1-b3a047a6c7adorange-juice-recipe.jpg?alt=media&token=c07c0283-8c95-4124-8b4d-f370344f9c30" alt="" className="w-full h-auto rounded-2xl"/> Fresh</button>

          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink hot drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " With espresso"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F20ffd2fe-182c-4b25-a4eb-f3b63eec74f6cup-of-espresso.jpg?alt=media&token=1d9975cf-5e97-4019-bee8-bb75224c154d" alt="" className="w-full h-auto rounded-2xl"/> With espresso</button>
          <button className={`bg-inherit hover:bg-inherit text-black border-0  h-24 w-24 btn ${serch === "drink hot drink" ? "" : "hidden"}`} onClick={()=>{setreach(serch + " Without espresso"); setrecomind(!recomind)}} > <img src="https://firebasestorage.googleapis.com/v0/b/antka-qr-menu.appspot.com/o/images%2F57cf1cf1-e120-4d23-a4d0-d81387e1103bE5tGQFdX0AILhMp.jpg?alt=media&token=2fa3e334-bff9-4889-b4dd-8419fc8fdb22" alt="" className="w-full h-auto rounded-2xl"/> Without espresso</button>

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