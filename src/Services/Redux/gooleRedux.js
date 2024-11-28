const initialState = {
    users : [],
    user : null,
    isLoading: false,
    isError: false,
    errorMsg: 'somong error occured'
}
const googleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addRec":
            const allData = action.payload
            return {
                ...state,
                users: allData,
                isLoading: false,
                isError: false,
                user: null
            }
        case 'isLoading':
            return {
                ...state,
                isLoading: true
            }
        case "error":
            return {
                ...state,
                isError: true,
                errorMsg: "Network error"
            }
        case "singleData" :
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isError: false,
                
            }    
        default:
            return state
    }
}

export default googleReducer