import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Url } from '../App'
export const EditUser = () => {
    let {id} = useParams()
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
    let navigate = useNavigate()
    let handleEdit = async () => {
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
            let res =  await axios.put(`${Url}/${id}`,data)
            if(res.status===200){
                toast.success("Edited successsfully")
                navigate("/Dashboard")
            }
        } catch (error) {
            toast.error("internal server error")
        }
    }
    let getData = async () => {
        try {
           let res = await axios.get(`${Url}/${id}`)
           if(res.status===200){
            setName(res.data.name)
            setUserName(res.data.userName)
            setEmailid(res.data.emailid)
            setStreet(res.data.address.street)
            setSuite(res.data.address.suite)
            setCity(res.data.address.city)
            setZipcode(res.data.address.zipcode)
            setLat(res.data.address.geo.lat)
            setLng(res.data.address.geo.long)
            setPhone(res.data.phone)
            setWebsite(res.data.website)
            setCname(res.data.company.name)
            setCatchPhrase(res.data.company.catchphrase)
            setBs(res.data.company.bs)
           } 
        } catch (error) {
            toast.error("Internal server error")
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return  <div className='container mt-2 '>
    <h3 className='h3 text-center'>Edit your details</h3>
  <form className='mt-2 d-flex justify-content-center flex-column' onSubmit={()=>handleEdit()}>
<div className="mb-2 col">
  {/* <label for="Name" className="form-label">Name</label> */}
  <input type="text" value={name}className="form-control" id="Name" placeholder='Enter your name' onChange={(e)=>{
    setName(e.target.value)
  }}/>
</div>
<div className="mb-2 col">
  {/* <label for="userName" className="form-label">UserName</label> */}
  <input type="text" value={userName} className="form-control" id="userName" placeholder='Enter your userName' onChange={(e)=>{
    setUserName(e.target.value)
  }}/>
</div>
<div className="mb-2 col">
  {/* <label for="email" className="form-label">Email</label> */}
  <input type="email" value={emailid} className="form-control" id="email" placeholder='Enter Your Email-id' onChange={(e)=>{
    setEmailid(e.target.value)
  }}/>
</div>
<div className='row mb-2'>
<label  className="form-label">Address:</label>
<div className='col'>
<input type="text" value={street} placeholder='street' className="form-control" id="street" onChange={(e)=>{
  setStreet(e.target.value)
}}/>
</div>
<div className='col'>
<input type="text" value={suite} placeholder='suite' className="form-control" id="suite" onChange={(e)=>{
  setSuite(e.target.value)
}}/>
</div>
<div className='col'>
<input type="text" value={city} placeholder="city"className="form-control" id="city" onChange={(e)=>{
  setCity(e.target.value)
}}/>
</div>
<div className='col'>
<input type="text" value={zipcode} placeholder="zipcode"className="form-control" id="zipcode" onChange={(e)=>{
  setZipcode(e.target.value)
}}/>
</div>
 </div>
 <div className='row mb-2'>
 <label  className="form-label">Geo:</label>
 <div className='col'>
 <input type="text" value={lat} placeholder='lat' className="form-control" id="lat" onChange={(e)=>{
  setLat(e.target.value)
 }}/>
 </div>
 <div className='col'>
 <input type="text" value={lng} placeholder='long' className="form-control" id="long" onChange={(e)=>{
  setLng(e.target.value)
 }}/>
 </div>

 </div>
 <div className="mb-1 col">
  {/* <label for="email" className="form-label">Phone</label> */}
  <input type="text" value={phone} className="form-control"  placeholder='enter your phone Number' onChange={(e)=>{
  setPhone(e.target.value)}}/>
</div>
<div className="mb-1 col">
  {/* <label for="email" className="form-label">Website</label> */}
  <input type="text" value={website} className="form-control"  placeholder='Enter your Website' onChange={(e)=>{
  setWebsite(e.target.value)}}/>
</div>

<div className='row'>
<label  className="form-label">Company:</label>
  <div className='col'>
  <input value={cname} type="text" placeholder='name' className="form-control" id="street" onChange={(e)=>{
  setCname(e.target.value)}}/>
  </div>
  <div className='col'>
<input  value={catchphrase}type="text" placeholder='cathchPhrase' className="form-control" id="street" onChange={(e)=>{
  setCatchPhrase(e.target.value)}}/>
</div>
<div className='col'>
<input type="text" value={bs} placeholder='bs' className="form-control" id="street" onChange={(e)=>{
  setBs(e.target.value)}}/>
</div>
</div>


<button type='submit' className="btn btn-primary mt-2" >Submit</button>
</form>
</div> 
}
