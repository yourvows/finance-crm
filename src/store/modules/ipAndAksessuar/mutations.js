/* eslint-disable */
export default {
    SET_NEW_IP(state, payload) {
        state.newAksessuars = payload || [];
    },
    SET_AKSESSUAR(state,payload){
        state.aksessuars=payload
    },
    SET_PRODUCT(state,payload){
        state.productsType=payload
    }


};
