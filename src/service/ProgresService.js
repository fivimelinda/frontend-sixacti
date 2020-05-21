import axios from "axios";
import authHeader from './AuthHeader';
const URI = 'https://sixacti-api.herokuapp.com/api';

class ProgresService{

    getListProgres(idLoker){
        return axios.get(URI + '/fulfillment/get?reqLokerId=' +idLoker, { headers:authHeader() })
    }

    getDetailLoker(idLoker){
        return axios.get(URI + '/detailReq?reqLokerId=' +idLoker, { headers:authHeader() })
    }

}
export default new ProgresService();