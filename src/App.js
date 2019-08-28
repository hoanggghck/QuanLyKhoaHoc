import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DangNhap from './components/users/DangNhap'
import 'font-awesome/css/font-awesome.min.css';
import DanhSachKhoaHoc from './components/DanhSachKhoaHoc';
import Headers from './components/Header';
import ThongTinNguoiDung from './components/users/ThongTinNguoiDung';
import NotFound from './components/NotFound';
import DangKy from './components/users/DangKy';
function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Switch>
        <Route path="/" exact component={DangNhap} />
        <Route path="/dang-ky" component={DangKy} />
        <Route path="/dang-nhap" exact render={({ history }) => <DangNhap history={history} />} />
        <Route path="/dskh" exact component={DanhSachKhoaHoc} />
        <Route path="/nguoi-dung" exact component={ThongTinNguoiDung} />

        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
