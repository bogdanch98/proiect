import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import {phones} from './mockProducts';
import './Products.css';
import { connect } from 'react-redux';

const columns = [
  { title: 'Mark', field: 'mark' },
  { title: 'Model', field: 'model' },
  { title: 'Price', field: 'price' },
  { title: 'Specifications', field: 'specs' },
  { title: '', field: 'actions'}
]
 class ProducsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addedPhone: {},
      phones: phones,
    }
  };

  addToCart = (phone, index) => {
    this.props.addPhoneToCart(phone);
    //  this.setState({
    //  phone: this.state.phones.splice(index, 1)
    // });
  }

  render(){
    return (
      <div>
        <Paper>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                {columns.map( (elem) => {
                  return (
                    <TableCell key={elem.field}>
                      {elem.title}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {phones.map( (phone, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      {phone.mark}
                    </TableCell>
                    <TableCell>
                      {phone.model}
                    </TableCell>
                    <TableCell>
                      {phone.price} RON
                    </TableCell>
                    <TableCell className={'productTableSpecification'}>
                      CPU: {phone.specs.cpu} GHz,
                      memore: {phone.specs.ram} GB RAM,
                      camera principala: {phone.specs.cameraBack} MPx,
                      camera secundara: {phone.specs.cameraFront} PPx,
                      capacitate de stocare: {phone.specs.store} GB,
                      baterie: {phone.specs.battery} MAh
                    </TableCell>
                    <TableCell>
                      <Button onClick={ () => this.addToCart(phone, index)}>
                        Add to cart
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { 
    cart: state.cart
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPhoneToCart: (phone) => dispatch({
      type: 'ADD_TO_CART',
      phone: phone
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProducsTable);