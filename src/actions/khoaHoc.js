import axios from 'axios';


export const capNhatThongTin = (data) => {
    console.log(data)
    return (dispatch) => {
        axios
            .put("http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatKhoaHoc", data)
            .then(res => {
                if(!res.data) return Promise.reject({errors: "FAIL TO UPDATE"})
                
                dispatch({
                    type: "CAP_NHAT",
                    khoahoc: res.data,
                    
                })
            })
            .catch(err => {
                dispatch(layErrors("LAY_ERRORS_CAP_NHAT_THONG_TIN", err))
            })
    }
}
export const dangKy = (data, history) => {
    return (dispatch) => {
        axios
            .post("http://svcy.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc", data)
            .then(res => {
                if(res.data){
                    history.push("/admin")
                } else {
                    return Promise.reject(res.data)
                }
            })
            .catch(err => {
                dispatch(layErrors("LAY_ERRORS_KHOA_HOC", err))
            })
    }
}
export const layErrors = (type, errors) => {
    return {
        type,
        errors
    }
}