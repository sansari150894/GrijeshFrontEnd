import React, { Component } from 'react';
import { Menu, Button } from 'antd';

import ProductInfo from './Add product Components/ProductInfo';
import ProductCategory from './Add product Components/ProductCategory';
import ProductTags from './Add product Components/ProductTags';
import SellLocation from './Add product Components/SellLocation';
import ProductPrice from './Add product Components/ProductPrice';
import ProductFabric from './Add product Components/ProductFabric';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class AddProduct extends Component {
  
  constructor(props){
    super(props);
    this.state={
      selectedSideMenu:'1',
      isAddNewDropdown:false
    }
  }

  onAddNewDropdown=()=>{
    this.setState({
      isAddNewDropdown:!this.state.isAddNewDropdown
    })
  }

  onMenuClick=(e)=>{
    this.setState({
      selectedSideMenu:e.key
    })
  }

  render() {
    return (
      <div className='add-product-container'>
        <Menu
            onClick={this.onMenuClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            >
            <Menu.Item key="1">Info</Menu.Item>
            <Menu.Item key="2">Categories</Menu.Item>
            <Menu.Item key="3">Tags</Menu.Item>
            <Menu.Item key="4">Sell location</Menu.Item>
            <Menu.Item key="5">Price</Menu.Item>
            <Menu.Item key="6">Fabrics</Menu.Item>
        </Menu>
        <div>
          {this.state.selectedSideMenu === '1' ? <ProductInfo/>:null}
          {this.state.selectedSideMenu === '2' ? <ProductCategory onAddNewDropdown={this.onAddNewDropdown} isAddNewDropdown={this.state.isAddNewDropdown}/>:null}
          {this.state.selectedSideMenu === '3' ? <ProductTags onAddNewDropdown={this.onAddNewDropdown} isAddNewDropdown={this.state.isAddNewDropdown}/>:null}
          {this.state.selectedSideMenu === '4' ? <SellLocation onAddNewDropdown={this.onAddNewDropdown} isAddNewDropdown={this.state.isAddNewDropdown}/>:null}
          {this.state.selectedSideMenu === '5' ? <ProductPrice/>:null}
          {this.state.selectedSideMenu === '6' ? <ProductFabric onAddNewDropdown={this.onAddNewDropdown} isAddNewDropdown={this.state.isAddNewDropdown}/>:null}
        </div>
        <div>
          <Button>Default</Button>
        </div>
      </div>
    );
  }
}

export default AddProduct;
