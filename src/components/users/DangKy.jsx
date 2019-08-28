import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import {dangKy} from '../../actions/nguoiDung';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

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
            {name: "taiKhoan", type: "text", label: "tài khoản"},
			{name: "matKhau", type: "password", label: "mật khẩu"},
			{name: "hoTen", type: "text", label: "họ tên"},
            {name: "email", type: "email", label: "email"},
            {name: "soDT", type: "text", label: "số điện thoại"},
            {name: "maLoaiNguoiDung", type: "text", label: "mã loại người dùng"},
        ]

        const inputElm = formInput.map((input, index) => {
            return <FormGroup key={index}>
                        <Label for="taiKhoan">{input.label}: </Label>
                        <Input 
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
				<h1>ĐĂNG KÝ</h1>

				{
					errors.dangKy === false ?
					<Alert color="danger" >
						ĐĂNG KÝ THẤT BẠI
					</Alert> : null
				}

				<Container className="text-left">
					<Form onSubmit={this.onSubmit}>
						{inputElm}
						<Button>Dang nhap</Button>
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


export default withRouter(connect(mapStateToProps, {dangKy})(DangKy));
