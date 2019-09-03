import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Alert } from 'reactstrap';
import { dangKy } from '../../actions/khoaHoc';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../css/user/DangNhap.css';

class AddC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HinhAnh: "",
            LuotXem: "",
            MaKhoaHoc: "",
            MoTa: "",
            NguoiTao: "",
            TenKhoaHoc: "",
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.props.dangKy(this.state, this.props.history)
    }



    render() {
        const { errors } = this.props
        console.log(this.props);
        

        const formInput = [
            { name: "MaKhoaHoc", type: "text", label: "Mã Khóa" },
            { name: "TenKhoaHoc", type: "text", label: "Tên Khóa Học" },
            { name: "HinhAnh", type: "text", label: "Link Hình" },
            { name: "LuotXem", type: "text", label: "Lượt Xem" },
            { name: "MoTa", type: "text", label: "Mô Tả" },
            { name: "NguoiTao", type: "text", label: "Số Điện Thoại" },
        ]

        const inputElm = formInput.map((input, index) => {
            return <FormGroup key={index}>

                <Input
                    className="input100"
                    type={input.type}
                    name={input.name}
                    id={input.name}
                    placeholder={`Nhập ${input.label}`}
                    onChange={this.onChange}
                />
            </FormGroup>
        })
        return (
            <div>
                <span className="login100-form-title mt-4 mb-4">
                    Tạo Tài Khoản
					</span>

                {
                    errors.dangKy === false ?
                        <Alert color="danger" >
                            ĐĂNG KÝ THẤT BẠI
					</Alert> : null
                }

                <Container className="text-left">
                    <Form onSubmit={this.onSubmit}>
                        {inputElm}
                        <div className="container-login100-form-btn  mt-4 mb-4">
                            <button className="login100-form-btn">
                                Tạo Khóa Học
                  				</button>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors
    }
}


export default withRouter(connect(mapStateToProps, { dangKy })(AddC));