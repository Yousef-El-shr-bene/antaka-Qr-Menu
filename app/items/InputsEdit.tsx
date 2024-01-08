"use client";
import { addDoc, collection  , updateDoc , doc, setDoc} from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes , } from 'firebase/storage';
import { v4 } from 'uuid';
export  function InputsEdit({crdData}: any) {
  const [loding , setloding]=useState(false)
    const {description ,name ,price , id , category , img} = crdData    
  const [nameeror, setnameeror] = useState("");
  const [descriptioneror, setdescriptioneror] = useState("");
  const [priceeror, setpriceeror] = useState("");
  const [categoryError,setcategoryError] = useState("")
  const imgeselect: undefined | any | null = useRef(null);
  const [data, setdata] = useState({
    img: img,
    name: name,
    description: description,
    price: price,
    dun: false,
    category : category
  });
  
  function numberVfun(i: number) {
    setpriceeror("");
    if (typeof Number(i) === "number") {
      setdata({ ...data, price: Number(i) });
    } else {
      setpriceeror("wrong value");
    }
  }

  useEffect( () => {
    console.log("crdData",crdData);
    if (data.dun === true) {
      const realdata = {
        name: data.name,
        description: data.description,
        price: data.price,
        category : data.category
      };
       setDoc(doc(db,"items",id),{ img:data.img, name : data.name ,description : data.description ,price : data.price , category : data.category}).then(()=>{
        setdata({ ...data, dun: false });
        setloding(false)
       })
    }
  }, [data]);
  function uplode() {
    setnameeror("");
    setdescriptioneror("");
    setpriceeror("");
    setloding(true)
   if (data.name === "") {
      setloding(false)
      setnameeror("input is empty");
    } else if (data.description === "") {
      setloding(false)
      setdescriptioneror("input is empty");
    } else if (data.price === 0) {
      setloding(false)
      setpriceeror("input is empty");
    }else if (data.category === "") {
      setloding(false)
      setcategoryError("input is empty");
    } else {
          setdata({ ...data, dun: true });
    }
  }
  return <>
          <div className="flex flex-col w-80 h-auto m-10 items-center justify-center content-center bg-white text-black btn-active">
          <div className="flex flex-col text-center">
            <input
              type="text"
              name=""
              id=""
              className="input w-auto max-w-xs m-3 "
              placeholder="Item name"
              value={data.name}
              onChange={(i: any) => {
                setdata({ ...data, name: i.target.value });
              }}
            />
            <h1> {nameeror} </h1>
            <textarea
              className="textarea w-auto max-w-xs m-3"
              placeholder="Item description"
              value={data.description}
              onChange={(i: any) => {
                setdata({ ...data, description: i.target.value });
              }}
            ></textarea>
            <h1> {descriptioneror} </h1>
            <input
              type="number"
              name=""
              id=""
              className="input w-auto max-w-xs m-3"
              placeholder="Item price"
              value={data.price}
              onChange={(i: any) => {
                numberVfun(i.target.value);
              }}
            />
            <h1> {priceeror} </h1>
            <input
              type="text"
              name=""
              id=""
              className="input w-auto max-w-xs m-3"
              placeholder="category :- drink , hot , Espresso"
              value={data.category}
              onChange={(i: any) => {
                setdata({ ...data, category: i.target.value });
              }}
            />
            <h1>{categoryError}</h1>
            {loding ? <span className="loading loading-spinner loading-lg text-center"></span> : <button onClick={uplode} className="btn m-3">update</button>}
          </div>
        </div>
  </>
}
