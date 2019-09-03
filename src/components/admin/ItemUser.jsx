import React, { Component } from 'react';
import Modal from './ModalPopup';
import Delete from './Delete'
class ItemUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                TaiKhoan: "",
                MatKhau: "",
                HoTen: "",
                Email: "",
                SoDT: "",
                MaLoaiNguoiDung: "",
            },
            showPopup: false,
            showDelete:false,
           
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    DeleteCourse() {
        this.setState({
            showDelete: !this.state.showDelete
        })
    }

    componentDidMount() {


        this.setState({

            user: {
                ...this.state.user,
                TaiKhoan: this.props.user.TaiKhoan,
                MatKhau: this.props.user.MatKhau,
                HoTen: this.props.user.HoTen,
                Email: this.props.user.Email,
                SoDT: this.props.user.SoDT,
                MaLoaiNguoiDung: this.props.user.MaLoaiNguoiDung,
            },
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
                <th><button className="btn btn_btn_red"  onClick={this.DeleteCourse.bind(this)}>Xóa </button>
                    <button className="btn btn_btn_blue" onClick={this.togglePopup.bind(this)}>Edit</button>
                </th>
               
                {this.state.showPopup ?

                    <Modal

                        TaiKhoan={this.state.user}
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
                {
                    this.state.showDelete?
                    <Delete
                    user={this.state.user}
                    />
                    : null
                }
            </tr>



        );
    }
}

export default ItemUser;