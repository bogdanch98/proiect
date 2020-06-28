import React from 'react';
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import { connect } from 'react-redux';

class Header extends React.Component {

  render() {
    return (
      <div className={'container'}>
        <ul className={'list'}>
          <li className={'listItem'}>
            <Link href='/'>Home</Link>
          </li>
          <li className={'listItem'}>
            <Link href='/products'>Products</Link>
          </li>
          <li className={'listItem'}>
            <Link href='/cart'>
                <Badge badgeContent={this.props.productsInCart}>
                  <ShoppingCartIcon />
                </Badge>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{ 
    productsInCart: state.productsInCart
  }
};

export default connect(mapStateToProps)(Header);