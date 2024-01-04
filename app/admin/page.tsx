"use client";
import React, { useRef } from "react";
import { Crd } from "../items/Crd";
import {
  collection,
  addDoc,
  getDoc,
  QuerySnapshot,
  query,
  onSnapshot,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { EditDoc } from '../items/EditDoc'
import { Inputs } from '../items/Inputs'
export default function admin() {
  const [item, setitem] = useState([]);
  console.log("log 1" , item);
  
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot( q ,( querySnapshot: [{ description: string; img: string; name: string; price: number }] | any) => {
        let itemsAray: string[] | any = [];
        querySnapshot.forEach((doc: {
          id: any;
          data(): any; description: any 
}) => {
          itemsAray.push({ ...doc.data(), id: doc.id ,doc : doc});
        });
        setitem(itemsAray);
      }
    );
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center items-center flex-wrap">
      <Inputs/>
        {item.map((crdData,i) => (
          <div key={i} >
          <EditDoc crdData={crdData}  key={i} />
          </div>
        )
      )}
      </div>
    </>
  );
}
