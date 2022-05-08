import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../farebase.init';
import Myitems from './Myitems';
import './Myitem.css'

const MyItem = () => {
    const [user] =useAuthState(auth)
    const [product, setProduct] = useState([])
    useEffect (()=> {
        const getItem = async() => {
             const email =user.email
            const url = `http://localhost:5000/product?email=${email}`
            const {data} =await axios.get(url)
            setProduct(data)
        } 
        getItem()
    }, [user] )
    return (
        <div className='myproduct'>
            <h4>{user?.displayName} Uploaded Product: {product.length}</h4>
            {
                product.map(product=> <Myitems
                    product={product}
                ></Myitems>)
            }
        </div>
    );
};

export default MyItem;