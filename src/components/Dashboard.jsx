import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Url } from '../App'
import { toast } from 'react-toastify'
import {Topbar} from './Topbar'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  let [data,setData] = useState([])
  let navigate = useNavigate()
  let  getData = async () => {
      try {
        let res = await axios.get(Url)
        
         if(res.status===200){
            setData(res.data)
        }
      } 
      catch (error) {
         toast.error("internal server error")
      }
  }

  let handleDelete = async (ID) =>{
    try 
    {
      let res =await axios.delete(`${Url}/${ID}`)
      if(res.status===200)
      {
        toast.success("Deleted successfully")
        getData()
      }
    } 
    catch (error) 
    {
      toast.error("internal server error")
    }
    
  }


  useEffect(()=>{
    getData()
  },[])

  return <>
  
  <div className='container col-6' style={{backgroundColor:"sandal"}}>
    <div className='text-center mt-3' ><h3>USER DETAILS</h3></div>
    {data.map((e)=>{
      return <div key={e.id} className='card m-2 p-2' >
      <div className='card-title text-center text-uppercase'><h6 className='font-weight-bold'>{e.name}</h6></div>
      <div className='card-text'><i className="fa-solid fa-user"></i> : {e.userName}</div>
      <div className='card-text'><i className="fa-solid fa-envelope"></i> : {e.emailid}</div>
      <div className='card-text'><i className="fa-solid fa-address-book"></i> : {`${e.address.street},${e.address.suite},${e.address.city},${e.address.zipcode}`}</div>
      <div className='card-text'><i className="fa-solid fa-location-dot"></i> : {`Lat:${e.address.geo.lat} Lng:${e.address.geo.long}`}</div>
      <div className='card-text'><i className="fa-solid fa-globe"></i> : {e.website}</div>
      <div className='card-text'><i className="fa-solid fa-phone"></i> : {e.phone}</div>
      <div className='card-text'><strong>Company Name : </strong>{e.company.name}</div>
      <div className='card-text'><strong>CatchPhrase : </strong>{e.company.catchphrase}</div>
      <div className='card-text'><strong>Bs : </strong>{e.company.bs}</div>
      <div className='card-footer d-flex justify-content-end'>
        <button className='btn btn-success m-1' onClick={() => {navigate(`/EditUser/${e.id}`)}}>Edit</button>
        <button className='btn btn-danger m-1' onClick={()=>{handleDelete(e.id)}}>Delete</button>
      </div>
      </div>
    })}
  </div>
  </>
}

