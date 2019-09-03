import React, { Component } from 'react';
import {  Form, FormGroup, Input,  } from 'reactstrap';
import { capNhatThongTin } from '../../actions/khoaHoc';
import { connect } from 'react-redux';
import '../../css/admin/modal.css';
import '../../css/button.css'
class ModalPopupC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HinhAnh: "",
            LuotXem: "",
            MaKhoaHoc: "",
            MoTa: "",
            NguoiTao: "",
            TenKhoaHoc: "",
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
            HinhAnh: this.props.course.HinhAnh,
            LuotXem: this.props.course.LuotXem,
            MaKhoaHoc: this.props.course.MaKhoaHoc,
            MoTa: this.props.course.MoTa,
            NguoiTao: this.props.course.NguoiTao,
            TenKhoaHoc: this.props.course.TenKhoaHoc
        })
    }
    render() {
        console.log(this.state);
        
        const formInput = [
            { name: "TenKhoaHoc", type: "text", label: "Tên Khóa Học", disabled: false },
            { name: "NguoiTao", type: "text", label: "Người Tạo", disabled: false },
            { name: "LuotXem", type: "text", label: "Lượt Xem", disabled: false },
            { name: "MaKhoaHoc", type: "text", label: "Mã Khóa Học", disabled: true },
            { name: "MoTa", type: "text", label: "Mô Tả", disabled: false },
            { name: "HinhAnh", type: "text", label: "Hình Ảnh", disabled: false },
        ]
        const inputElm = formInput.map((input, index) => {
            return <FormGroup key={index}>
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
        khoaHoc: state.khoaHoc
    }
}
export default connect(mapStateToProps, { capNhatThongTin })(ModalPopupC);