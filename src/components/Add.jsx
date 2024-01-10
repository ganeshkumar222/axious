import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Url } from '../App'
import { toast } from 'react-toastify'

export const Add = () => {
  let [name,setName] = useState("")
  let [userName,setUserName] = useState("")
  let [emailid,setEmailid] = useState("")
  let [street,setStreet] = useState("")
  let [suite,setSuite] = useState("")
  let [city,setCity] = useState("")
  let [zipcode,setZipcode] = useState("")
  let [lat,setLat] = useState("")
  let [lng,setLng] = useState("")
  let [phone,setPhone] = useState("")
  let [website,setWebsite] = useState("")
  let [cname,setCname] = useState("")
  let [catchphrase,setCatchPhrase] = useState("")
  let [bs,setBs] = useState("")
  let Navigate = useNavigate()

  let handleCreate = async()=> {
    
    try {
      event.preventDefault()
      let address = {
        street :street,
        suite:suite,
        city:city,
        zipcode:zipcode,
        geo:{
         lat:lat,
         long:lng
        }
     }
     let company = {
       name:cname,
       catchphrase:catchphrase,
       bs:bs
     }
     let data = {name,userName,emailid,address,phone,website,company}

     let res = await axios.post(Url,data)
     console.log(res)
     if(res.status===201){
      toast.success("posted successfuly")
      Navigate('/Dashboard')
     }
    } catch (error) {
      console.log(error)
    }
      
      

  }
  return <div className='container mt-2 '>
    <h3 className='h3 text-center'>Complete the form to get profiled</h3>
    <form className='mt-2 d-flex justify-content-center flex-column' onSubmit={()=>handleCreate()}>
  <div className="mb-2 col">
    {/* <label for="Name" className="form-label">Name</label> */}
    <input type="text" className="form-control" id="Name" placeholder='Enter your name' onChange={(e)=>{
      setName(e.target.value)
    }}/>
  </div>
  <div className="mb-2 col">
    {/* <label for="userName" className="form-label">UserName</label> */}
    <input type="text" className="form-control" id="userName" placeholder='Enter your userName' onChange={(e)=>{
      setUserName(e.target.value)
    }}/>
  </div>
  <div className="mb-2 col">
    {/* <label for="email" className="form-label">Email</label> */}
    <input type="email" className="form-control" id="email" placeholder='Enter Your Email-id' onChange={(e)=>{
      setEmailid(e.target.value)
    }}/>
  </div>
  <div className='row mb-2'>
  <label  className="form-label">Address:</label>
  <div className='col'>
  <input type="text" placeholder='street' className="form-control" id="street" onChange={(e)=>{
    setStreet(e.target.value)
  }}/>
  </div>
  <div className='col'>
  <input type="text" placeholder='suite' className="form-control" id="suite" onChange={(e)=>{
    setSuite(e.target.value)
  }}/>
  </div>
  <div className='col'>
  <input type="text" placeholder="city"className="form-control" id="city" onChange={(e)=>{
    setCity(e.target.value)
  }}/>
  </div>
  <div className='col'>
  <input type="text" placeholder="zipcode"className="form-control" id="zipcode" onChange={(e)=>{
    setZipcode(e.target.value)
  }}/>
  </div>
   </div>
   <div className='row mb-2'>
   <label  className="form-label">Geo:</label>
   <div className='col'>
   <input type="text" placeholder='lat' className="form-control" id="lat" onChange={(e)=>{
    setLat(e.target.value)
   }}/>
   </div>
   <div className='col'>
   <input type="text" placeholder='long' className="form-control" id="long" onChange={(e)=>{
    setLng(e.target.value)
   }}/>
   </div>

   </div>
   <div className="mb-1 col">
    {/* <label for="email" className="form-label">Phone</label> */}
    <input type="text" className="form-control"  placeholder='enter your phone Number' onChange={(e)=>{
    setPhone(e.target.value)}}/>
  </div>
  <div className="mb-1 col">
    {/* <label for="email" className="form-label">Website</label> */}
    <input type="text" className="form-control"  placeholder='Enter your Website' onChange={(e)=>{
    setWebsite(e.target.value)}}/>
  </div>

  <div className='row'>
  <label  className="form-label">Company:</label>
    <div className='col'>
    <input type="text" placeholder='name' className="form-control" id="street" onChange={(e)=>{
    setCname(e.target.value)}}/>
    </div>
    <div className='col'>
  <input type="text" placeholder='cathchPhrase' className="form-control" id="street" onChange={(e)=>{
    setCatchPhrase(e.target.value)}}/>
  </div>
  <div className='col'>
  <input type="text" placeholder='bs' className="form-control" id="street" onChange={(e)=>{
    setBs(e.target.value)}}/>
  </div>
  </div>


  <button type='submit' className="btn btn-primary mt-2" >Submit</button>
</form>
  </div>
}
