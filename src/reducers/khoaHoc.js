const initialState = {
    khoaHoc: {},
}
                    // localStorage.setItem('NguoiDung',JSON.stringify(res.data[0]))
                    // const nguoiDung =JSON.parse(localStorage.getItem("NguoiDung"))

const khoaHocReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CAP_NHAT":
            return {
                ...state,
                khoaHoc: action.khoaHoc
            }

      
        default:
            break;
    }

    return state;
}

export default khoaHocReducer