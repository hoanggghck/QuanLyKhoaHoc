/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dangXuat } from '../actions/nguoiDung';
import '../css/Header.css';
import logo from '../img/react.png'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nguoiDung: {}
    }
  }

  componentDidMount(){
    this.setState({
      nguoiDung: this.props
    })
  }
  render() {
    
    
    const { nguoiDungHienTai } = this.props;
    const { daDangNhap, nguoiDung } = nguoiDungHienTai;
    // console.log(this.state.maLoai);
    
    return (

      <div id='cssmenu'>

   
          {
      daDangNhap ?
        (

          <ul >
            <Link to="/" ><img src={logo} /></Link>
            {nguoiDungHienTai.nguoiDung.MaLoaiNguoiDung === "GV" ? 
            (<li ><Link to="/admin" className="li01" >EDIT</Link></li>)
            :null
            }
            
            <li ><Link to="/" className="li01" onClick={this.props.dangXuat} >Đăng Xuất</Link></li>
            <li > <Link className="li01" to="/nguoi-dung">
              Xin chào {nguoiDung.HoTen}
            </Link></li>
            


          </ul>

        )

        :
        (

          <ul>
            <Link to="/" ><img src={logo} /></Link>
            

            <li ><Link to="/dang-ky" className="li01" >Đăng Ký</Link></li>
            <li ><Link to="/dang-nhap" className="li01" >Đăng Nhập</Link></li>
          </ul>

        )

    }
     
     </div >
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungHienTai: state.nguoiDung
  }
}

export default connect(mapStateToProps, { dangXuat })(Header);