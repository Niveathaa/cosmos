import { createSlice } from "@reduxjs/toolkit";



const productsSlice=createSlice({
    name:'products',  //displayed in network tab
    initialState:{
        loading:false //initially no loading only after request url is sent loading symbol must pop up
    },
    reducers:{ 
        //reducers will change the state
        //we have 3 reducers here
        productsRequest(state,action){
            // when new page comes , before loading symbol
            return {
                loading:true,

            }
        },
        productsSuccess(state,action){ 
            //here is action is the output(product data from db)
            //when api request-success-product is fetched,
            //loading shd be stopped
            //action is the process of getting data from component and storing in store.js
            return {
                loading:false,
                products:action.payload.products //product info from db
            }
        },
        productsFail(state,action){
            return{
           loading:false,
           error: action.payload 
            }
        }
    }
})

const {actions,reducer }=productsSlice
export const{productsRequest,productsSuccess,productsFail }=actions
export default reducer