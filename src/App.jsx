import React from 'react'
import { EditUser } from './components/EditUser'
import { Topbar } from './components/Topbar'
import { BrowserRouter,Route, Routes , Navigate } from 'react-router-dom'
import { Add } from './components/Add'
import {Dashboard} from'./components/Dashboard'
export const Url = 'https://6597a318668d248edf2318b0.mockapi.io/userDetails'
export const App = () => {
  return <>
   <BrowserRouter>
   <Topbar></Topbar>
     <Routes>
       <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
       <Route path='/Add' element={<Add></Add>}> </Route>
       <Route path='/EditUser/:id' element={<EditUser></EditUser>}></Route>
       <Route path='*'  element={<Navigate to="/Dashboard"/>}></Route>

     </Routes>
   </BrowserRouter>
  </>
}
