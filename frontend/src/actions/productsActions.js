import axios from 'axios'
import { productsFail, productsRequest, productsSuccess } from '../slices/productsSlice'
export const getProducts =async(dispatch)=>{

    try{
       dispatch(productsRequest())
       //productRequest is the action creator,parameter inside that fn is called payload 
    
    //here not giving value for payload in product success only will have the value for payload   
       const {data}=await axios.get('/api/v1/products')
       dispatch(productsSuccess(data))
    }catch(error){
        //handle error
        dispatch(productsFail(error.response.data.message))
    //this is the message that we gave in our backend
    }
}