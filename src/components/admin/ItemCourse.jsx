import React, { Component } from 'react';
class ItemCourse extends Component {

  
    render() {
    const {course} = this.props;
    
        
        return (
            
           <tr>
               <th>{course.TenKhoaHoc}</th>
               <th>{course.NguoiTao}</th>
               <th>{course.LuotXem}</th>
               <th>{course.MoTa}</th>
                <th><button className="btn btn-danger" >Xóa</button>
                <button className="btn btn-primary">Edit</button>
                </th>
           </tr>
        );
    }
}

export default ItemCourse;