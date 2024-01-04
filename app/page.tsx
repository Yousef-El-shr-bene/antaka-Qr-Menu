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
import { useEffect, useState } from "react";
import { db } from "./firebase";
export default function Home() {
  const [item, setitem] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot: [{description : string , img : string , name : string , price : number }] | any) => {
      let itemsAray : string[] | any = [];
      querySnapshot.forEach((doc: {description: any}) => {
        itemsAray.push({ ...doc.data(), id: doc.id } );
      });
      setitem(itemsAray)
    });
    console.log(item);
  }, []);
  console.log(item);

  return (
    <main className="flex flex-col w-full h-full  items-center justify-center content-center ">

      <div className="flex flex-col w-full justify-center items-center ">
        <button className="bottom-1 rounded-lg w-11/12 m-5 h-3 p-10 text-center text-2xl btn bg-emerald-700 hover:bg-300">
          recomndation
        </button>
        <div className="flex flex-row justify-center items-center flex-wrap">
          {item.map((crdData,i)=> <>
          <Crd crdData={crdData} key={i} />
          </>)}
        
        </div>
      </div>
    </main>
  );
}
// اضافة صور *
// اضافة منتج *
// تعديل علي منتج *
// حذف منتج *
// تسجيل الدخول
// بحث
// فلتر
// ديزين
// تيب سكربت
// الترجمة