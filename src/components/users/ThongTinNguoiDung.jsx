import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button,  } from 'reactstrap';
import { connect } from 'react-redux';
import { capNhatThongTin } from '../../actions/nguoiDung';

class ThongTinNguoiDung extends Component {
    constructor(props) {
		super(props);
		this.state = {
			TaiKhoan: "",
			MatKhau: "",
			HoTen: "",
            Email: "",
            SoDT: "",
            MaLoaiNguoiDung: "",

		}
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
		})
	}
    
	onSubmit = (e) => {
        e.preventDefault()
        
        this.props.capNhatThongTin(this.state)
    }
    
    componentDidMount() {
        const {nguoiDung} = this.props.nguoiDung;
        const {TaiKhoan, HoTen, Email, SoDT, MaLoaiNguoiDung} = nguoiDung
        this.setState({
            TaiKhoan, HoTen, Email, SoDT, MaLoaiNguoiDung
        })
    }
    render() {
        // const { errors } = this.props
        
        const formInput = [
            {name: "TaiKhoan", type: "text", label: "tài khoản", disabled: true},
            {name: "MatKhau", type: "password", label: "mật khẩu", disabled: false},
            {name: "HoTen", type: "text", label: "họ tên", disabled: false},
            {name: "Email", type: "email", label: "email", disabled: false},
            {name: "SoDT", type: "text", label: "số điện thoại", disabled: false},
            {name: "MaLoaiNguoiDung", type: "text", label: "mã loại người dùng", disabled: true},
        ]
        
        const inputElm = formInput.map((input, index) => {
            return <FormGroup key={index}>
                        <Label for="taiKhoan">{input.label}: </Label>
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
            <div>
                <h1>THÔNG TIN CÁ NHÂN</h1>
                {
					// errors.dangKy === false ?
					// <Alert color="danger" >
					// 	ĐĂNG KÝ THẤT BẠI
					// </Alert> : null
				}

				<Container className="text-left">
					<Form onSubmit={this.onSubmit}>
						{inputElm}
						<Button>Cập nhật</Button>
					</Form>
				</Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nguoiDung: state.nguoiDung
    }
}

export default connect(mapStateToProps, { capNhatThongTin })(ThongTinNguoiDung);