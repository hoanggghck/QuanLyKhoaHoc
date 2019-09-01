import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { dangKy } from '../../actions/nguoiDung';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../css/user/DangNhap.css';
class DangKy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taiKhoan: "",
			matKhau: "",
			hoTen: "",
			email: "",
			soDT: "",
			maLoaiNguoiDung: ""
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

		const formInput = [
			{ name: "taiKhoan", type: "text", label: "tài khoản" },
			{ name: "matKhau", type: "password", label: "mật khẩu" },
			{ name: "hoTen", type: "text", label: "họ tên" },
			{ name: "email", type: "text", label: "email" },
			{ name: "soDT", type: "text", label: "số điện thoại" },
			{ name: "maLoaiNguoiDung", type: "text", label: "mã loại người dùng" },
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
					Đăng Ký
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
								Đăng Ký
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


export default withRouter(connect(mapStateToProps, { dangKy })(DangKy));
