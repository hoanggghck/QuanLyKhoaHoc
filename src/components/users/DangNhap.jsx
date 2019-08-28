import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { dangNhap } from '../../actions/nguoiDung';
import { connect } from 'react-redux';
import '../../css/user/DangNhap.css'
class DangNhap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taiKhoan: "",
			matKhau: ""
		}
	}

	onChange = (e) => {


		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault()

		this.props.dangNhap(this.state, this.props.history)
	}

	render() {
		const { errors } = this.props
		return (

			<div className="limiter">
				<div className="container-login100">


					{
						errors.dangNhap ?
							<Alert color="danger" >
								{errors.dangNhap}
							</Alert> : null
					}
					{/* 
				<Container className="text-left">
					<Form onSubmit={this.onSubmit}>
						<FormGroup>
							<Label for="taiKhoan">Tai khoan: </Label>
							<Input 
								type="text" 
								name="taiKhoan" 
								id="taiKhoan" 
								placeholder="Nhập tai khoan" 
								onChange={this.onChange}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="matKhau">Mat khau: </Label>
							<Input 
								type="password" 
								name="matKhau" 
								id="matKhau" 
								placeholder="Nhập mat khau" 
								onChange={this.onChange}
							/>
						</FormGroup>

						<Button>Dang nhap</Button>
					</Form>
				</Container> */}


					<div className="wrap-login100 ">
					<span class="login100-form-title p-b-51 mb-4">
						Đăng Nhập
					</span>
						<form className="login100-form validate-form flex-sb flex-w"
						onSubmit={this.onSubmit}
						>
							<div className="wrap-input100 validate-input mb-2 " data-validate="Username is required">
								<input 
								className="input100"
								 type="text" 
								 name="taiKhoan" 
								 id="taiKhoan" 
								 placeholder="Nhập Tài Khoản" 
								 onChange={this.onChange}
								 />
								<span className="focus-input100" />
							</div>
							<div className="wrap-input100 validate-input mb-4" data-validate="Password is required">
								<input
								 className="input100"
								 type="password" 
								 name="matKhau" 
								 id="matKhau" 
								 placeholder="Nhập Mật Khẩu" 
								 onChange={this.onChange}
								 />
								<span className="focus-input100" />
							</div>

							<div className="container-login100-form-btn  mt-4">
								<button className="login100-form-btn">
									Đăng Nhập
                  				</button>
							</div>
						</form>
					</div>
				</div>


			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		errors: state.errors
	}
}


export default connect(mapStateToProps, { dangNhap })(DangNhap);