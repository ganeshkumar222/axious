import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



export const Topbar = () => {
  let Navigate = useNavigate()
   
  
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={()=>{Navigate('/Dashboard')}}>DashBoard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>{Navigate('/Add')}}>Add a user</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
}
