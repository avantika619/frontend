import React, { useContext } from 'react';
import './CSS/category.css';

import { shopcontext } from '../Context/shopcontext';
const ShopCategory = () => {
  const {all_product} = useContext(shopcontext)
  return (
    <div className='shop-category'>
      <img></img>
    </div>
  );
}

export default ShopCategory;
