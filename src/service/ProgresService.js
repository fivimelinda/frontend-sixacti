import axios from "axios";

const URI = 'http://localhost:5000/api';

class ProgresService{

    getListProgres(idLoker){
        return axios.get(URI + '/fulfillment/get?reqLokerId=' +idLoker)
    }

    getDetailLoker(idLoker){
        return axios.get(URI + '/detailReq?reqLokerId=' +idLoker)
    }

}
export default new ProgresService();