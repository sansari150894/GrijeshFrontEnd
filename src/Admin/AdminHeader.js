import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AdminHeader extends Component {
  render() {
    return (
    <div className="adminHeader">
        <ul className="adminLinks">
            <li className="link"> <Link to="/admin/add-product">Add Product</Link></li>
            <li className="link"> <Link to="/admin/view-stock">Demo</Link></li>
        </ul>
    </div>
    );
  }
}

export default AdminHeader;
