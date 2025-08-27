
import Layout from 'antd/es/layout/layout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AdminLayout } from './components/Admin/AdminLayout/Layout'
import Header from './components/Header'
import FilterList from './components/FilterList'
import Cart from './components/Cart'
import CardList from './components/CardList'
import Footer from './components/Footer'
import { Stats } from './components/Admin/AdminContent/Stats'
import { Orders } from './components/Admin/AdminContent/Orders'
import { Hello } from './components/Admin/AdminContent/Hello'
import { CardItem } from './components/Admin/AdminContent/CardItem'


export const Router = () => {
  return (
    <Routes>
      {/* Главная страница */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <FilterList />
            <div style={{ display: "flex", justifyContent: 'center'}}>
              <Cart />
              <div style={{marginLeft: 70}}><CardList /></div>
            </div>

            <Footer />
          </>
        }
      />

      {/* Админка */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="hello" element={<CardItem />} />
        <Route path='stats' element={<Stats />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

