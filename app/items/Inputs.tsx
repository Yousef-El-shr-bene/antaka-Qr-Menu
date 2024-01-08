"use client";
import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
 
export  function Inputs() {
  
  const [imgeror, setimgeror] = useState("");
  const [nameeror, setnameeror] = useState("");
  const [descriptioneror, setdescriptioneror] = useState("");
  const [priceeror, setpriceeror] = useState("");
  const [loding,setloding] = useState(false)
  const [categoryError,setcategoryError] = useState("")
  const imgeselect: undefined | any | null = useRef(null);
  const [data, setdata] = useState({
    img: "",
    name: "",
    description: "",
    price: 0,
    category : "",
    dun: false,
  });

  function numberVfun(i: number) {
    setpriceeror("");
    if (typeof Number(i) === "number") {
      setdata({ ...data, price: Number(i) });
    } else {
      setpriceeror("wrong value");
    }
  }

  useEffect(() => {
    if (data.dun === true) {
      const realdata = {
        img: data.img,
        name: data.name,
        description: data.description,
        price: data.price,
        category : data.category
      };
      addDoc(collection(db, "items"), realdata);
      setdata({ ...data, dun: false ,name: "",description: "",price: 0 , category : ""});
    }
    setloding(false)
  }, [data]);

  function uplode() {
    setimgeror("");
    setnameeror("");
    setdescriptioneror("");
    setpriceeror("");
    setloding(true)
    if (imgeselect.current.files[0] === undefined || null) {
      setloding(false)
      setimgeror("no image?");
    } else if (data.name === "") {
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
      const imgRef = ref(
        storage,
        `images/${v4() + imgeselect.current.files[0].name}`
      );
      uploadBytes(imgRef, imgeselect.current.files[0]).then((i) => {
        getDownloadURL(i.ref).then(async (url) => {
          await setdata({ ...data, img: url, dun: true });
        });
      });
    }
  }
  return <>
          <div className="flex flex-col w-80 h-auto m-10 items-center justify-center content-center bg-white text-black">
          <div className="flex flex-col text-center">
            <input
              type="file"
              name="Choose the image"
              id=""
              ref={imgeselect}
              className="file-input w-auto max-w-xs m-3  bg-black text-white"
            />
            <h1> {imgeror} </h1>
            <input
              type="text"
              name=""
              id=""
              className="input w-auto max-w-xs m-3  bg-black text-white"
              placeholder="Item name :- Espresso maccato"
              value={data.name}
              onChange={(i: any) => {
                setdata({ ...data, name: i.target.value });
              }}
            />
            <h1> {nameeror} </h1>
            <textarea
              className="textarea w-auto max-w-xs m-3  bg-black text-white"
              placeholder="description :- Espresso , milk "
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
              className="input w-auto max-w-xs m-3  bg-black text-white"
              placeholder="price :- 100"
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
              className="input w-auto max-w-xs m-3  bg-black text-white"
              placeholder="category :- drink , hot , Espresso"
              value={data.category}
              onChange={(i: any) => {
                setdata({ ...data, category: i.target.value });
              }}
            />
            <h1>{categoryError}</h1>
            {loding ? <span className="loading loading-spinner loading-lg text-center"></span> : <button onClick={uplode} className="btn m-3  bg-black text-white">uplode</button>}
          </div>
        </div>
  </>
}
