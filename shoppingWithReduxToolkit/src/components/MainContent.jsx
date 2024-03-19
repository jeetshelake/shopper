import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainCategory from "./Category/MainCategory"
import SubCategory from "./Category/SubCategory"
import Product from "./Product"
import Orders from "./Orders"
import Users from "./Users"
import NewLetters from "./NewLetters"
import Settings from "./Settings"


const MainContent = () => {
  return (
    <div><Routes>
          <Route path="/main-categories" element={ <MainCategory></MainCategory> }></Route>
          <Route path="/sub-categories" element={<SubCategory></SubCategory>}></Route>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
          <Route path="/users" element={<Users></Users>}></Route> 
          <Route path="/news-letter" element={<NewLetters></NewLetters>}></Route> 
          <Route path="/settings" element={<Settings></Settings>}></Route>
          </Routes>
    </div>
  )
}

export default MainContent