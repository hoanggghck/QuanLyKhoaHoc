import React, { Component } from 'react';
import Modal from './ModalPopup';
class ItemUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            user: {},
            TaiKhoan: "",
			MatKhau: "",
			HoTen: "",
            Email: "",
            SoDT: "",
            MaLoaiNguoiDung: "",
        };
    }
    
        togglePopup() {  
            this.setState({  
                showPopup: !this.state.showPopup  
        });  
         }  
         componentDidMount(){
            this.setState({
                TaiKhoan: this.props.user.TaiKhoan,
                MatKhau:this.props.user.MatKhau,
                HoTen: this.props.user.HoTen,
                Email : this.props.user.Email,
                SoDT : this.props.user.SoDT,
                MaLoaiNguoiDung : this.props.user.MaLoaiNguoiDung,
            })
         }
    render() {       
        
        const { user } = this.props;
                    
        return (
           
                <tr>
               <th>{user.HoTen}</th>
               <th>{user.Email}</th>
               <th>{user.SoDT}</th>
               <th>{user.TenLoaiNguoiDung}</th>
                <th><button className="btn btn-danger" >Xóa</button>
                <button className="btn btn-primary" onClick={this.togglePopup.bind(this)}>Edit</button>
                </th>
              
                {this.state.showPopup ?  
               
                    <Modal  
                           
                            TaiKhoan= {this.state.TaiKhoan}
                            MatKhau= {this.state.MatKhau}
                            HoTen= {this.state.HoTen}
                            Email= {this.state.Email}
                            SoDT= {this.state.SoDT}
                            MaLoaiNguoiDung= {this.state.MaLoaiNguoiDung}
                              text='Click "Close Button" to hide popup'  
                              closePopup={this.togglePopup.bind(this)}  
                    />  
                    : null  
                    }  
                 </tr> 
                
               
         
        );
    }
}

export default ItemUser;