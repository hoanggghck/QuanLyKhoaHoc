import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import "react-table/react-table.css";
class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dshv:[],
            currentPage: 1,
            newsPerPage: 3
        }
    }
   
    
    componentDidMount() {
        axios
          .get('http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung')
          .then(res => {
            this.setState({
              dshv: res.data,
              
            })
          })
          .catch(console.log)};
    
         
    render() {
      console.log(this.state.dshv);
      
      const columns = [
        {
          Header: 'Email',
          accessor: 'Email'
        },
        {
          Header: 'HoTen',
          accessor: 'HoTen'
        },
        {
          Header: 'MatKhau',
          accessor: 'MatKhau'
        },
        {
          Header: 'SoDT',
          accessor: 'SoDT'
        },
        {
          Header: 'TenLoaiNguoiDung',
          accessor: 'TenLoaiNguoiDung'
        }

      ]
        
        return (
          
          <ReactTable
          columns={columns}
          data={this.state.dshv}
          ></ReactTable>
        
        );
    }
}

export default Pagination;