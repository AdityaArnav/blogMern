import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:API_URL,
    timeout: 10000,
    headers:{
        'content-type':'application/json'
    }
})

axiosInstance.interceptors.req.use(
    function (config) {
        return config
    },
    function (err){
        return Promise.reject(err);
    }
    axiosInstance.interceptors.res.use(
        function (res){
            return processResponse(res);

            return Promise.reject(processError(res));
        }
    )
)

const processResponse=(res)=>{
    if(res?.status===200){
        return{
            isFailure:true,
            status:res?.status,
            msg:res?.msg,
            code:res?.code
        }
    }
}

const processError =(err)=>{
    if(err.res){

    }
    else if(err.req){

    }
    else
}