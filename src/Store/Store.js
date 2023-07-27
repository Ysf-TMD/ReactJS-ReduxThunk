import {FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS} from "../Actions/PostsType.js";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {applyMiddleware, legacy_createStore} from "redux";

const initialState={
    loqding : false ,
    data: [],
    error : ""
}
const reducer = (state = initialState , action)=>{
    console.log(action.type)
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return {loading : true , data : [] , error : ""}
        case FETCH_POSTS_SUCCESS :
            return {loading : false , data : action.payload.posts,error:""}
        case FETCH_POSTS_FAILURE :
            return {loading : false , data:[] , error : action.payload.error}
        default :
            return state
    }
}
export default legacy_createStore(reducer , composeWithDevTools(applyMiddleware(thunk)))