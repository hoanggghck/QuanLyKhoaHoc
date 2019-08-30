import React, { Component } from 'react';
import { Col } from 'reactstrap';

import '../../css/khoaHoc/KhoaHoc.css'
class KhoaHoc extends Component {
	render() {
		const { khoa } = this.props
		return (
			// <Col md={3} className="my-3">
			// 	<Card className="myCard">
			// 		<CardImg 
			// 			top 
			// 			width="100%" 
			// 			src={khoa.HinhAnh} alt={khoa.TenKhoaHoc} />
			// 		<CardBody className="text-left">
			// 			<CardTitle>{khoa.TenKhoaHoc}</CardTitle>
			// 			<CardText>Nguoi tao: {khoa.NguoiTao}</CardText>
			// 			<CardText>Luot xem: {khoa.LuotXem}</CardText>
			// 			<Button>Button</Button>
			// 		</CardBody>
			// 	</Card>
			// </Col>
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
								<tr>
									<td>Người Tạo:</td>
									<td>Lượt Xem:</td>
								</tr>
								<tr>
									<th>{khoa.NguoiTao}</th>
									<th>{khoa.LuotXem}</th>
								</tr>
								<tr>
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