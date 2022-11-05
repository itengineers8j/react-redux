const isloggedReducer = (state=false, action) => {
    switch(action.type)
    {
        case 'SIG_IN' :
            return !state;
        default:
            return state;
    }
}
export default isloggedReducer;