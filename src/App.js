import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DangNhap from './components/users/DangNhap'
import 'font-awesome/css/font-awesome.min.css';
import DanhSachKhoaHoc from './components/courses/DanhSachKhoaHoc';
import Add from './components/admin/Add';
import Headers from './components/Header';
import ThongTinNguoiDung from './components/users/ThongTinNguoiDung';
import NotFound from './components/NotFound';
import DangKy from './components/users/DangKy';
import Admin from './components/admin/Admin';
import AddC from './components/admin/AddC';
function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Switch>
        <Route path="/" exact component={DanhSachKhoaHoc} />
        <Route path="/dang-ky" component={DangKy} />
        <Route path="/dang-nhap" exact render={({ history }) => <DangNhap history={history} />} />
        <Route path="/dskh" exact component={DanhSachKhoaHoc} />
        <Route path="/nguoi-dung" exact component={ThongTinNguoiDung} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/add" exact component={Add} />
        <Route path="/addC" exact component={AddC} />


        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
