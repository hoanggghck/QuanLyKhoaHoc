import React, { Component } from 'react';
import '../../css/admin/admin.css';
import ItemUser from './ItemUser';
import ItemCourse from './ItemCourse'
import axios from 'axios';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dskh: [],
      dshv: [],
      showTable: "1",

    }
  }
  componentDidMount() {
    axios
      .get('http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung')
      .then(res => {
        this.setState({
          dshv: res.data
        })
      })
      .catch(console.log)
    axios
      .get('http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc')
      .then(res => {
        this.setState({
          dskh: res.data
        })
      })
      .catch(console.log)

      
  }

  changeTable = (e) => {
    this.setState({
        showTable : e.target.name
    })

    

  }
 

  render() {
    var list
    if(this.state.showTable === "2"){
      list =  this.state.dskh.map((course, index) => {
        return <ItemCourse
          key={index}
          course={course}
        />
      })
    } else {
      list =  this.state.dshv.map((user, index) => {
        return <ItemUser
          key={index}
          user={user}
        />
      })
    }
    
  
    
    // const khoaHoc = this.state.dskh.map((course, index) => {
    //   return <ItemCourse
    //     key={index}
    //     course={course}
    //   />
    // })
    // const nguoiDung = this.state.dshv.map((user, index) => {
    //   return <ItemUser
    //     key={index}
    //     user={user}
    //   />
    // })



    return (
      <div>
        <div className="mywrapper">
          {/* Sidebar Holder */}
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>Bootstrap Sidebar</h3>
              <strong>BS</strong>
            </div>
            <ul className="list-unstyled components">

              <li>
                <a
                  onClick={this.changeTable}
                  name="1"
                >
                  <i className="fa fa-briefcase" />
                  User
                    </a>
                <a
                  onClick={this.changeTable}
                  name="2"
                >
                  <i className="fa fa-files-o" />
                  Course
                    </a>
              </li>


            </ul>
            <ul className="list-unstyled CTAs">
              <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
            </ul>
          </nav>
          {/* Page Content Holder */}
          <div id="content">

            <div className="container">
              <div className="card text-center">
                {/* Header */}
                <div className="card-header myCardHeader">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="text-left font-weight-bold">Danh sách nhân viên</h3>
                    </div>
                    <div className="col-md-6 text-right">
                      <button className="btn btn-success" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm nhân viên</button>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="card-body">
                <table className="table table-bordered table-hover myTable">
                  
                    {
                      this.state.showTable === "1" ?
                      (<thead className="text-primary">
                      <tr>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Số Điện Thoại</th>
                        <th>Loại</th>
                        <th><em className="fa fa-cog cogSetting" /></th>
                      </tr>
                    </thead>):
                      (<thead className="text-primary">
                      <tr>
                        <th>Tên Khóa Học</th>
                        <th>Tên Người Tạo</th>
                        <th>Lượt Theo Dõi</th>
                        <th>Mô Tả</th>
                        <th><em className="fa fa-cog cogSetting" /></th>
                      </tr>
                    </thead>)
                    }
                    
                    <tbody id="tableDanhSach">
                      {list}
                      {/* ItemUser */}
                      {/* {nguoiDung} */}
                      {/* ItemCourse */}
                      {/* {khoaHoc} */}
                    </tbody>
                  </table>
                </div>
                {/* Footer */}
                <div className="card-footer myCardFooter">
                  <nav>
                    <ul className="pagination justify-content-center" id="ulPhanTrang">
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* The Modal */}
        <div className="modal fade" id="myModal">
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
                <form role="form">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-user" /></span>
                      </div>
                      <input type="msnv" name="msnv" id="msnv" className="form-control input-sm" placeholder="Mã số nhân viên" />
                    </div>
                    <span className="sp-thongbao" id="tbMaNV" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-address-book" /></span>
                      </div>
                      <input type="name" name="name" id="name" className="form-control input-sm" placeholder="Họ và tên" />
                    </div>
                    <span className="sp-thongbao" id="tbTen" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-envelope" /></span>
                      </div>
                      <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email" />
                    </div>
                    <span className="sp-thongbao" id="tbEmail" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-key" /></span>
                      </div>
                      <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Mật khẩu" />
                    </div>
                    <span className="sp-thongbao" id="tbMatKhau" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-calendar" /></span>
                      </div>
                      <input type="text" name="ngaylam" id="datepicker" className="form-control" placeholder="Ngày làm" />
                    </div>
                    <span className="sp-thongbao" id="tbNgay" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                      </div>
                      <select className="form-control" id="chucvu">
                        <option>Chọn chức vụ</option>
                        <option>Sếp</option>
                        <option>Trưởng phòng</option>
                        <option>Nhân viên</option>
                      </select>
                    </div>
                    <span className="sp-thongbao" id="tbChucVu" />
                  </div>
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer" id="modal-footer">
                <button id="btnThemNV" type="button" className="btn btn-success">Thêm người dùng</button>
                <button id="btnCapNhatNV" type="button" className="btn btn-success">Cập nhật</button>
                <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
