import React, { Component } from 'react';
import {xoaUser} from '../../actions/nguoiDung'
class ItemUser extends Component {

  
    render() {
        const { user } = this.props
       
                    
        return (
           <tr>
               <th>{user.HoTen}</th>
               <th>{user.Email}</th>
               <th>{user.SoDT}</th>
               <th>{user.TenLoaiNguoiDung}</th>
                <th><button className="btn btn-danger" >Xóa</button>
                <button className="btn btn-primary">Edit</button>
                </th>
           </tr>
        );
    }
}

export default ItemUser;