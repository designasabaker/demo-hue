import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from './Context/AppContext.jsx';
import Home from './Pages/Home.jsx';
import Menu from './Pages/Menu.jsx';
import SharedLayout from './Pages/SharedLayout.jsx';
import Error from './Pages/Error.jsx';

import './App.css'

function App() {
  return (
    <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />} >
                    <Route index element={<Home />} />
                    <Route path="menu" element={<Menu />} />
                    {/*<Route path="login" element={<Login setUser={setUser} />} />*/}
                    {/*<Route path="products" element={<SharedProductLayout />}>*/}
                    {/*    <Route index element={<Products />} />*/}
                    {/*    <Route path=":productId" element={<SingleProduct />} />*/}
                    {/*</Route>*/}
                    {/*<Route path="dashboard" element={*/}
                    {/*    <ProtectedRoute user={user}>*/}
                    {/*        <Dashboard user={user} />*/}
                    {/*    </ProtectedRoute>*/}
                    {/*} />*/}
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </AppProvider>
  )
}

export default App
