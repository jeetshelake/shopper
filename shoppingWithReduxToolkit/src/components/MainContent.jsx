import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainCategory from "./MainContentComponents/Category/MainCategory"
import SubCategory from "./MainContentComponents/Category/SubCategory"
import Product from "./MainContentComponents/Product"
import Orders from "./MainContentComponents/Orders"
import Users from "./MainContentComponents/Users"
import NewLetters from "./MainContentComponents/NewLetters"
import Settings from "./MainContentComponents/Settings"
import Admin from './MainContentComponents/Admin'
import AddMainCategory from './MainContentComponents/AddMainCategory'


const MainContent = () => {
  return (
    <div><Routes>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path="main-categories" element={ <MainCategory></MainCategory> }></Route>
          <Route path="sub-categories" element={<SubCategory></SubCategory>}></Route>
          <Route path="products" element={<Product></Product>}></Route>
          <Route path="orders" element={<Orders></Orders>}></Route>
          <Route path="users" element={<Users></Users>}></Route> 
          <Route path="news-letter" element={<NewLetters></NewLetters>}></Route> 
          <Route path="settings" element={<Settings></Settings>}></Route>
          <Route path="main-categories/*" element={<AddMainCategory></AddMainCategory>}></Route>
          </Routes>
    </div>
  )
}

export default MainContent