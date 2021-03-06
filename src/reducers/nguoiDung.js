const initialState = {
    nguoiDung: {},
    listNguoiDung: [],
    daDangNhap: false
}
                    // localStorage.setItem('NguoiDung',JSON.stringify(res.data[0]))
                    // const nguoiDung =JSON.parse(localStorage.getItem("NguoiDung"))

const nguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DANG_NHAP":
            // const newState = {...state};
            // newState.nguoiDung = action.nguoiDung
            return {
                ...state,
                nguoiDung: action.nguoiDung,
                daDangNhap: true
            }

        case "DANG_XUAT":
            return {
                ...state,
                nguoiDung: {},
                daDangNhap: false
            }
        
        case "LAY_DANH_SACH":
            return {
                ...state,
                listNguoiDung: action.listNguoiDung,
            }
        case "CAP_NHAT":
            return {
                ...state,
                nguoiDung: action.nguoiDung
            }
        case "XOA":
            return {
                ...state,
                nguoiDung: action.nguoiDung
            }    
        default:
            break;
    }

    return state;
}

export default nguoiDungReducer