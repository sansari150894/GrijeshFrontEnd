import React,{Component} from 'react';
import { Modal, Input } from 'antd';


class AddNewDropdown extends Component{
    
    render(){
        return(
          <div>
               <Modal
                title="Modal"
                visible={this.props.isAddNewDropdown}
                onOk={this.props.onAddNewDropdown}
                onCancel={this.props.onAddNewDropdown}
                okText="OK"
                cancelText="Cancle"
                >
                     <Input placeholder="Add New Value"/>
                </Modal>
          </div>
        )
    }
};

export default AddNewDropdown;