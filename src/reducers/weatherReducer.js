import {FETCH_URL} from "../action/index";
const weatherReducer = (state = [], action) =>{
     switch(action.type){
         case FETCH_URL:
             return [action.payload.data, ...state];
          default: 
            return state;  
     }
    

}


export default weatherReducer;