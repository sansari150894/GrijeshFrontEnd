import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class AddProduct extends Component {
  render() {
    return (
      <div>
        <Menu
            onClick={this.handleClick}
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
      </div>
    );
  }
}

export default AddProduct;
