import React from 'react';
import ProducsTable from './ProductsTable';
import './Products.css';

class Products extends React.Component {
  
  render() {
    return(
      <div className={'productsContainer'}>
          <ProducsTable />
      </div>
    );
  }
};

export default Products;