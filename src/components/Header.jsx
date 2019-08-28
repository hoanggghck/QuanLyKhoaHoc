import React, { Component } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dangXuat } from '../actions/nguoiDung';
import '../css/Header.css';
import logo from '../img/react.png'

class Header extends Component {
  render() {
    const { nguoiDungHienTai } = this.props;
    const { daDangNhap, nguoiDung } = nguoiDungHienTai
    return (
     
     <div id='cssmenu'>
        
          {
            daDangNhap ?
            (
              
              <ul>
                <Link to="/" ><img src={logo} /></Link>

                
                 <li><Link to="/dang-ky" className="nav-link">Đăng Ký</Link></li>
                 <li> <Link to="/nguoi-dung" className="nav-link">
                     Xin chào {nguoiDung.HoTen}
                 </Link></li>
              </ul>
             
            )
             
              :
              (
                
              <ul>
              <Link to="/" ><img src={logo} /></Link>
                 <li><Link to="/dang-ky" className="nav-link">Đăng Ký</Link></li>
                 <li><Link to="/" className="nav-link">Đăng Nhập</Link></li>
              </ul>
              
              )
            
          }
     
     </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungHienTai: state.nguoiDung
  }
}

export default connect(mapStateToProps, { dangXuat })(Header);