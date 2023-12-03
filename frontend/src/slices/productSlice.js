import { createSlice } from "@reduxjs/toolkit";



const productSlice=createSlice({
    name:'product',  //displayed in network tab
    initialState:{
        loading:false,
        product:{} //initially no loading only after request url is sent loading symbol must pop up
    },
    reducers:{ 
        //reducers will change the state
        //we have 3 reducers here
        productRequest(state,action){
            // when new page comes , before loading symbol
            return {
                loading:true,

            }
        },
        productSuccess(state,action){ 
            //here is action is the output(product data from db)
            //when api request-success-product is fetched,
            //loading shd be stopped
            //action is the process of getting data from component and storing in store.js
            return {
                loading:false,
                product:action.payload.product //product info from db
            }
        },
        productFail(state,action){
            return{
           loading:false,
           error: action.payload 
            }
        }
    }
})

const {actions,reducer }=productSlice
export const{productRequest,productSuccess,productFail }=actions
export default reducer