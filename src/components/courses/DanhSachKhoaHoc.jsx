import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../css//khoaHoc/DanhSachKhoaHoc.css';
/* components */
import KhoaHoc from './KhoaHoc'

class DanhSachKhoaHoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dskh: []
    }
  }

 

  componentDidMount() {
    axios
      .get('http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc')
      .then(res => {
        this.setState({
          dskh: res.data
        })
      })
      .catch(console.log)
  }


  render() {
    
    const khoaHoc = this.state.dskh.map((khoa, index) => {
      return <KhoaHoc
        key={index}
        khoa={khoa}
      />
    })
    return (
      <div className="myListCourse">
        <h1>
          DANH SÁCH KHÓA HỌC
        </h1>
        <button className="btn btn-success"><Link to='/admin'>EDIT</Link></button>
        <Container>
          <Row>
            {khoaHoc}
          </Row>
        </Container>
      </div>
    );
  }
}

export default DanhSachKhoaHoc;