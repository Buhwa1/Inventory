import logo from './logo.svg';
import React, { useEffect, useState } from "react";

import './App.css';
import AppContainer from './Components/Structure/AppContainer';
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import Dashboard from './Components/Pages/Dashboard';
import Login from './Components/Pages/Login';
import AddProducts from './Components/Pages/Products/AddProducts';
import ViewProducts from './Components/Pages/Products/ViewProducts';
import AddCustomers from './Components/Pages/Customers/AddCustomers';
import ViewCustomers from './Components/Pages/Customers/ViewCustomers';
import ViewSuppliers from './Components/Pages/Suppliers/ViewSuppliers';
import AddSupplier from './Components/Pages/Suppliers/AddSupplier';
import ViewUsers from './Components/Pages/Users/ViewCustomers';
import AddUser from './Components/Pages/Users/AddUser';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  function checkLogin() {
    if (!window.localStorage.getItem("myrentals@user")) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }
  useEffect(() => {
    checkLogin();
  }, []);


  return (
     <Router forceRefresh={false}>
        <Switch>
          {/* {!loggedIn && ( */}
            <>
              <Route
                path="/"
                element={
                  // !loggedIn ? (
                    // <Navigate replace to="/login" />
                  // ) : (
                    <Dashboard />
                  // )
                }
              />
              <Route path="*" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<ViewProducts />} />
              <Route path="/products/create" element={<AddProducts />} />

              <Route path="/customer" element={<ViewCustomers />} />
              <Route path="/customer/create" element={<AddCustomers />} />

              <Route path="/suppliers" element={<ViewSuppliers />} />
              <Route path="/suppliers/create" element={<AddSupplier />} />

              <Route path="/users" element={<ViewUsers />} />
              <Route path="/users/create" element={<AddUser />} />

            </>
          {/* )} */}
      </Switch>
      </Router>
  );
}

export default App;
