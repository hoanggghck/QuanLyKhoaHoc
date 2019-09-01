import React, { Component } from 'react';
import Modal from './ModalPopupC';
class ItemCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            HinhAnh: "",
            LuotXem: "",
            MaKhoaHoc: "",
            MoTa: "",
            NguoiTao: "",
            TenKhoaHoc: "",
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    componentDidMount() {
        this.setState({
            HinhAnh: this.props.course.HinhAnh,
            LuotXem: this.props.course.LuotXem,
            MaKhoaHoc: this.props.course.MaKhoaHoc,
            MoTa: this.props.course.MoTa,
            NguoiTao: this.props.course.NguoiTao,
            TenKhoaHoc: this.props.course.TenKhoaHoc,
        })
    }
    render() {

        const { course } = this.props;


        return (

            <tr>
                <th>{course.TenKhoaHoc}</th>
                <th>{course.NguoiTao}</th>
                <th>{course.LuotXem}</th>
                <th>{course.MoTa}</th>
                <th><button className="btn btn_btn_red" >Xóa</button>
                    <button className="btn btn_btn_blue" onClick={this.togglePopup.bind(this)}>Edit</button>
                </th>
                {this.state.showPopup ?

                    <Modal

                        HinhAnh={this.state.HinhAnh}
                        LuotXem={this.state.LuotXem}
                        MaKhoaHoc={this.state.MaKhoaHoc}
                        MoTa={this.state.MoTa}
                        NguoiTao={this.state.NguoiTao}
                        TenKhoaHoc={this.state.TenKhoaHoc}
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </tr>

        );
    }
}

export default ItemCourse;