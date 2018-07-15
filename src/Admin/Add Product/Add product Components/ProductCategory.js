import React,{Component} from 'react';
import MultiSelect from '../../common/MultiSelect';
import { Button } from 'antd';
import AddNewDropdown from './AddNewDropdown';

class ProductCategory extends Component{
    render(){
       return(
          <div>
              <MultiSelect/>
              <Button onClick={this.props.onAddNewDropdown}>Modal</Button>
              {this.props.isAddNewDropdown ? <AddNewDropdown isAddNewDropdown={this.props.isAddNewDropdown} onAddNewDropdown={this.props.onAddNewDropdown}/>: null}
          </div>
        )
    }
};

export default ProductCategory;