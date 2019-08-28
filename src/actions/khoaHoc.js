import axios from 'axios';


export const layErrors = (type, errors) => {
    return {
        type,
        errors
    }
}