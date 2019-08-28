import React, { Component } from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, Button, Col, Container
} from 'reactstrap';

import '../css/khoaHoc/KhoaHoc.css'
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
				<div class="wrapper">
					<div class="container">
						<div class="top">
							<img src={khoa.HinhAnh} alt={khoa.TenKhoaHoc} />
						</div>
						<div class="bottom">
							<div class="left">
								<div class="details">
									<h1>Chair</h1>
									<p>£250</p>
								</div>
								<div class="buy"><i class="material-icons">add_shopping_cart</i></div>
							</div>
							<div class="right">
								<div class="done"><i class="material-icons">done</i></div>
								<div class="details">
									<h1>Chair</h1>
									<p>Added to your cart</p>
								</div>
								<div class="remove"><i class="material-icons">clear</i></div>
							</div>
						</div>
					</div>
					<div class="inside">
						<div class="icon"><i class="material-icons">info_outline</i></div>
						<div class="contents">
							<table>
								<tr>
									<th>Width</th>
									<th>Height</th>
								</tr>


							</table>
						</div>
					</div>
				</div>
			</Col>

		);
	}
}

export default KhoaHoc;