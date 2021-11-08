/* eslint-disable */
export default {
    SET_PRODUCT_CODES_LIST(state, payload) {
        state.productCodesFields = payload || [];
    },
    GET_ID_PRODUCT_CODES_LIST(state, payload) {
        state.product = payload
    },
    SET_UPDATE(state, payload) {
        state.update = payload
    },
    SET_REQUEST(state) {
        state.loading = true
        state.error = null
    },
    SET_ERROR(state, payload) {
        state.error = payload
    },
    SET_SUCCESS(state,payload){
        state.loading=false
        state.error
        state.productCodesFields=payload
    }
};
