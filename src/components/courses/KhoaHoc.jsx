import React, { Component } from 'react';
import { Col } from 'reactstrap';

import '../../css/khoaHoc/KhoaHoc.css'
class KhoaHoc extends Component {
	render() {
		const { khoa } = this.props
		return (
			
			<Col md={4} className="my-3">
				<div className="wrapper">
					<div className="container">
						<div className="top">
							<img src={khoa.HinhAnh} alt={khoa.TenKhoaHoc} />
						</div>
						<div className="bottom">
							<div className="left">
								<div className="details">
									<h1>{khoa.TenKhoaHoc}</h1>
								</div>
								<div className="buy"><i className="fa fa-plus"></i></div>
							</div>
						</div>
					</div>
					<div className="inside">
						<div className="icon"><i className="fa fa-info"></i></div>
						<div className="contents">
							<tbody className="contents">
								<tr className="tr01">
									<td>Người Tạo:</td>
									<td>{khoa.NguoiTao}</td>
								</tr>
								<br/>
								<tr className="tr01">
									<td>Lượt Xem:</td>
									<td>{khoa.LuotXem}</td>
								</tr>
								<br/>
								<tr className="tr01">
									<td>Mô Tả:</td>
									<td>{khoa.MoTa}</td>
								</tr>

							</tbody>
						</div>
					</div>
				</div>
			</Col>

		);
	}
}

export default KhoaHoc;