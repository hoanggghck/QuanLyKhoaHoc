import React, { Component } from 'react';
import {  Form, FormGroup, Label, Input, } from 'reactstrap';
import { capNhatThongTin } from '../../actions/nguoiDung';
import { connect } from 'react-redux';
import '../../css/admin/modal.css';
import '../../css/button.css'
class ModalPopup extends Component {
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
            
            Componentstyle:{display:"block"},

        }
    }
    closeModal = () => {
        this.setState({
            Componentstyle:{display:"none"}
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.closeModal()
        this.props.capNhatThongTin(this.state)
    }

    componentDidMount() {
        
        
        this.setState({
            TaiKhoan: this.props.TaiKhoan.TaiKhoan,
            MatKhau: this.props.TaiKhoan.MatKhau,
            HoTen: this.props.TaiKhoan.HoTen,
            Email: this.props.TaiKhoan.Email,
            SoDT: this.props.TaiKhoan.SoDT,
            MaLoaiNguoiDung: this.props.TaiKhoan.MaLoaiNguoiDung
        })
    }
    render() {
        console.log(this.props.TaiKhoan);
        const formInput = [
            { name: "TaiKhoan", type: "text", label: "tài khoản", disabled: true },
            { name: "MatKhau", type: "text", label: "mật khẩu", disabled: false },
            { name: "HoTen", type: "text", label: "họ tên", disabled: false },
            { name: "Email", type: "text", label: "email", disabled: false },
            { name: "SoDT", type: "text", label: "số điện thoại", disabled: false },
            { name: "MaLoaiNguoiDung", type: "text", label: "mã loại người dùng", disabled: true },
        ]
        const inputElm = formInput.map((input, index) => {
            return <FormGroup key={index}>
                <Label for="taiKhoan"></Label>
                <Input
                    className = "input1"
                    value={this.state[input.name]}
                    type={input.type}
                    name={input.name}
                    id={input.name}
                    placeholder={input.label}
                    onChange={this.onChange}
                    disabled={input.disabled}
                />
            </FormGroup>
        })
        return (
            //             <div className='popup'>  
            // <div className='popup\_inner'>  
            // <h1>{this.props.text}</h1>  
            // <button onClick={this.props.closePopup}>close me</button>  
            // </div>  
            // </div>  
            <div className=" myModal" style={this.state.Componentstyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                      <h2>EDIT</h2>
                        {/* Modal Header */}
                        {/* 	<div class="modal-header">
                        <h4 class="modal-title" id="modal-title">Modal Heading</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div> */}
                        {/* Modal body */}
                        <div className="modal-body">
                            <Form onSubmit={this.onSubmit}>
                                {inputElm}
                                <button className="btn_btn_blue btn">Cập nhật</button>
                                <button className="btn_btn_red " onClick={this.closeModal}>Đóng</button>
                            </Form>
                        </div>
                        {/* Modal footer */}

                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        nguoiDung: state.nguoiDung
    }
}
export default connect(mapStateToProps, { capNhatThongTin })(ModalPopup);