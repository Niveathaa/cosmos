import axios from 'axios'
import { productFail, productRequest, productSuccess } from '../slices/productSlice'
export const getProduct = id =>async(dispatch)=>{

    try{
       dispatch(productRequest())
       //productRequest is the action creator,parameter inside that fn is called payload 
    
    //here not giving value for payload in product success only will have the value for payload   
       const {data}=await axios.get(`/api/v1/product/${id}`)
       dispatch(productSuccess(data))
    }catch(error){
        //handle error
        dispatch(productFail(error.response.data.message))
    //this is the message that we gave in our backend
    }
}