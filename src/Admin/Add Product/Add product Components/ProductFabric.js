import React,{Component} from 'react';
import MultiSelect from '../../common/MultiSelect';
import { Button } from 'antd';
import AddNewDropdown from './AddNewDropdown';

class ProductFabrics extends Component{
    render(){
       
        return(
          <div>
              <MultiSelect/>
              <Button onClick={this.props.onAddNewDropdown}>Add New Fabric Category</Button>
              {this.props.isAddNewDropdown ? <AddNewDropdown isAddNewDropdown={this.props.isAddNewDropdown} onAddNewDropdown={this.props.onAddNewDropdown}/>: null}
          </div>
        )
    }
};

export default ProductFabrics;