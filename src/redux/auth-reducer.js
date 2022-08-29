const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => { // здесь данные неправильно приходят, да в редусер
    console.log(2, action);

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (userId, login, email) => 
({ type: SET_USER_DATA, data: { userId, email, login } }); //видимо, здесь неправильно сэтается

export default authReducer;