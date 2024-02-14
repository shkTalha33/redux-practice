import AppInstance from "../config/Axios/global_axios"

const  AppUtils = async(requestObject) => {
    try {
        const res = await AppInstance(requestObject);
        return res;
      } catch (error) {
        throw error;
      }
} 

export default AppUtils