import React, { Component } from 'react';
import '../../css/admin/modal.css';
import '../../css/button.css';
import axios from 'axios';
class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Componentstyle:{display:"block"},
            id:""
        }
    }
    componentDidMount(){
        this.setState({
                id:this.props.user.TaiKhoan
        })
    }
    DeleteItem = () => {
        axios
        .delete(`http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${this.state.id}`)
        this.closeModal()
    }
    closeModal = () => {
        this.setState({
            Componentstyle:{display:"none"}
        })
    }
    render() {     
        console.log(this.state.id);
           
        const {user} = this.props
        return (
            <div className="delete_item" style={this.state.Componentstyle}>
                <h1>Bạn Có Muốn Xóa "{user.TaiKhoan}" ?</h1>
                <button className="btn btn_btn_red" onClick={this.DeleteItem}>Yes</button>
                <button className="btn btn_btn_blue" onClick={this.closeModal}>No</button>
            </div>
        );
    }
}

export default Delete;