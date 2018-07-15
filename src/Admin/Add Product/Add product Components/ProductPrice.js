import React,{Component} from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class ProductPrice extends Component{
    render(){
        return(
            <div className="product-info">
                <Input placeholder="Product Price"/>
                <Input placeholder="% discount"/>
            </div>
        )
    }
};

export default ProductPrice;