const initialState = {
    dangNhap: "",
    dangKy: "",
    khoaHoc: ""
}

const errorsReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "LAY_ERRORS_DANG_NHAP":
            return {...state, dangNhap: action.errors}
        
        case "LAY_ERRORS_DANG_KY":
            return {...state, dangKy: action.errors}

        case "LAY_ERRORS_KHOA_HOC":
            return {...state, khoaHoc: action.errors}    

        case "RESET_ERRORS":
            return {...state}
    }

    return {...state};
}

export default errorsReducer;