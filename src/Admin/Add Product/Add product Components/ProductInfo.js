import React,{Component} from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class ProductInfo extends Component{
    render(){
        return(
            <div className="product-info">
                <Input placeholder="Product Name"/>
                <TextArea placeholder="Product Description" rows={4} />
            </div>
        )
    }
};

export default ProductInfo;