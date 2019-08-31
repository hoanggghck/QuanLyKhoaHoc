import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, } from 'reactstrap';
import { capNhatThongTin } from '../../actions/nguoiDung';
import { connect } from 'react-redux';
import '../../css/admin/modal.css'
class ModalPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TaiKhoan: "",
            MatKhau: "",
            HoTen: "",
            Email: "",
            SoDT: "",
            MaLoaiNguoiDung: "",
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
            TaiKhoan: this.props.TaiKhoan,
            MatKhau: this.props.MatKhau,
            HoTen: this.props.HoTen,
            Email: this.props.Email,
            SoDT: this.props.SoDT,
            MaLoaiNguoiDung: this.props.MaLoaiNguoiDung
        })
    }
    render() {
        console.log(this.state);

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
                    value={this.state[input.name]}
                    type={input.type}
                    name={input.name}
                    id={input.name}
                    placeholder={`Nhập ${input.label}`}
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
                        <header className="head-form mb-0">
                            <h2 id="header-title">Log In</h2>
                        </header>
                        {/* Modal Header */}
                        {/* 	<div class="modal-header">
                        <h4 class="modal-title" id="modal-title">Modal Heading</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div> */}
                        {/* Modal body */}
                        <div className="modal-body">
                            <Form onSubmit={this.onSubmit}>
                                {inputElm}
                                <Button>Cập nhật</Button>
                                <Button onClick={this.closeModal}>Đóng</Button>
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