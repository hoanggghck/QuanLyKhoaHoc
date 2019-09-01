/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import '../../css/admin/admin.css';
import ItemUser from './ItemUser';
import ItemCourse from './ItemCourse'
import axios from 'axios';
import { Link } from 'react-router-dom';
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
      showTable: e.target.name
    })



  }


  render() {
      var list
    if (this.state.showTable === "2") {
      list = this.state.dskh.map((course, index) => {
        return <ItemCourse
          key={index}
          course={course}
        />
      })
    } else {
      list = this.state.dshv.map((user, index) => {
        return <ItemUser
          key={index}
          user={user}
        />
      })
    }


    return (
      <div>
        <div className="mywrapper">
          {/* Sidebar Holder */}
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>Admin</h3>
            </div>
            <ul className="list-unstyled components">

              <li>
                <a
                  className="myPicker active"
                  onClick={this.changeTable}
                  name="1"
                >
                  <i className="fa fa-user"/>
                  User
                    </a>
                <a
                  className="myPicker"
                  onClick={this.changeTable}
                  name="2"
                >
                  <i className="fa fa-list" />
                  Course
                    </a>
              </li>
              <li><Link to="/" >Back</Link></li>

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
                      {this.state.showTable === "1" ? 
                      (<h3 className="text-left font-weight-bold">Danh sách Người Dùng</h3>) 
                      :(<h3 className="text-left font-weight-bold">Danh sách Khóa Học</h3>)}
                    </div>
                    <div className="col-md-6 text-right">
                    {this.state.showTable === "1" ? 
                      (<button className="btn btn_btn_green" ><Link to="/add" >Thêm người dùng</Link></button>) 
                      :(<button className="btn btn_btn_green" ><Link to="/addC" >Thêm khóa học</Link></button>)}
                      
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
                        </thead>) :
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

                    <tbody id="tableDanhSach" >
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

      </div>
    );
  }
}

export default Admin;
