const ADD_NUM='ADD';
const REDUCE_NUM='REDUCE';

export function counter(state=10,action) {
    switch (action.type){
        case ADD_NUM:
            return state+1;
        case REDUCE_NUM:
            return state-1;
        default :
            return state;
    }
}

export function addNum() {
    return {type:ADD_NUM};
}

export function reduceNum() {
    return {type:REDUCE_NUM}
}

export function addNumAsync() {
    return dispatch=>{
        setInterval(()=>{
            dispatch(addNum())
        },2000)
    }
}

