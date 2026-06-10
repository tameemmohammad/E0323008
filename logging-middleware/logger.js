import axios from "axios";
import config from "./config.js";

async function log(stack,level,packageName,message){
    try{
        const res=await axios.post(`${config.BASE_URL}/logs`,{
            stack,
            level,
            package:packageName,
            message
        },{
            headers:{
                'Authorization':`Bearer ${config.access_token}`
            }
        });
        console.log('Log sent successfully');
        return res.data;
    }
    catch (err) {
    console.log("Status:", err.response?.status);
    console.log("Data:", err.response?.data);
}
}
export default log;