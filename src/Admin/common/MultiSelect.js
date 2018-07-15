import React,{Component} from 'react';
import { Select } from 'antd';

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const handleChange =(value) =>{
    console.log(`Selected: ${value}`);
}

class MultiSelect extends Component{
    render(){
        return (
            <Select
            mode="multiple"
            placeholder="Please select"
            defaultValue={['Clothing']}
            onChange={handleChange}
            style={{ width: '100%' }}
          >
            {children}
          </Select>
        )
    }
};

export default MultiSelect;