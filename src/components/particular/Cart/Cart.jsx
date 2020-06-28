import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './Cart.css'
import { connect } from 'react-redux';

import {phones} from '../Products/mockProducts';


const columns = [
  { title: 'Mark', field: 'mark' },
  { title: 'Model', field: 'model' },
  { title: 'Price', field: 'price' },
  { title: 'Specifications', field: 'specs' },
  { title: '', field: 'actions'}
]

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     // phones: this.props.cart,
     phones: phones,
      openDialog: false
    }
  };

  deleteFromCart = (index) => {
    this.props.removePhoneFromCart(index);
  }

  calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < this.state.phones.length ;i++) {
      total += this.state.phones[i].price;
    }
    return total;
  }

  clearCart = () => {
    this.props.clearCart();
  };

  proceedToCheckout = () => {
    this.setState({openDialog: true})
  }

  handleClose = () => {
    this.setState({openDialog: false});
  };

  render() {
    return(
      <div className={'productsContainer'}>
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
              {this.state.phones.map( (phone, index) => {
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
                      <Button onClick={ () => this.deleteFromCart(index)}>
                        Remove from cart
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <p>Total: {this.calculateTotal()}</p>
        </Paper>
        <Button
          className={'clearButton'}
          variant="contained"
          color="secondary"
          onClick={this.clearCart}>
          Clear cart
        </Button>
        <Button
          className={'checkoutButton'}
          variant="contained"
          onClick={this.proceedToCheckout}>
          Proceed to checkout
        </Button>


        <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.openDialog}>
        <MuiDialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          Place Order
        </MuiDialogTitle>
        <MuiDialogContent dividers>
            <TextField
              id="country"
              label="Country"
              style={{ margin: 8 }}
              placeholder="Country"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="city"
              label="City"
              style={{ margin: 8 }}
              placeholder="City"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="address"
              label="Address"
              style={{ margin: 8 }}
              placeholder="Address"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="phone-number"
              label="Phone Number"
              type="number"
              style={{ margin: 8 }}
              placeholder="Phone Number"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          <Typography gutterBottom>
            By placing the order you agree with our terms and conditions!
          </Typography>
          <Typography gutterBottom>
            Your total is {this.calculateTotal()} RON
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={this.handleClose} color="primary">
            Place Order
          </Button>
        </MuiDialogActions>
      </Dialog>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{ 
    cart: state.cart
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removePhoneFromCart: (index) => dispatch({
      type: 'REMOVE_FROM_CART',
      index: index
    }),
    clearCart: () => dispatch({
      type: 'CLEAR_CART'
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);