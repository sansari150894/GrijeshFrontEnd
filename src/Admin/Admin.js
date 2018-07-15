import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import AddProduct from './Add Product/AddProduct';
import Demo from './Add Product/Demo';
import AdminHeader from './AdminHeader';
import './Admin.css';

class Admin extends Component {
  render() {
    return (
      <div>
        <div className="admin-container">
            <AdminHeader/>
        </div>
        <div className="containerAdmin">
        <Route path="/admin/add-product" component={AddProduct} />
        <Route path="/admin/view-stock" component={Demo} />
      </div>
      </div>
    );
  }
}

export default Admin;
