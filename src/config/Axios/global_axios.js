import axios from "axios"

const AppInstance = axios.create({
    baseURL:"https://fakestoreapi.com/"
})

AppInstance.interceptors.request.use(
   async (req)=>{
    req.headers["Access-Control-Allow-Origin"] = "*";
    req.headers["Content-Type"] = "application/json";
    req.headers["Accept"] = "*/*";

    return req
   },
   (err) => {
     console.log("Error axios interceptor", err);
     throw err;
   }
)

AppInstance.interceptors.response.use(
        (response) => {
            console.log("Response of axios : ", response);
            return response;
          },
          (error) => {
            console.log("Error axios interceptor", error.response.data.error);
            throw error;
          }
)

export default AppInstance