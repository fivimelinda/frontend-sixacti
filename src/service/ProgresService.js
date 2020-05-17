import axios from "axios";
import authHeader from './AuthHeader';
const URI = 'http://localhost:8081/api';

class ProgresService{

    getListProgres(idLoker){
        return axios.get(URI + '/fulfillment/get?reqLokerId=' +idLoker, { headers:authHeader() })
    }

    getDetailLoker(idLoker){
        return axios.get(URI + '/detailReq?reqLokerId=' +idLoker, { headers:authHeader() })
    }

}
export default new ProgresService();