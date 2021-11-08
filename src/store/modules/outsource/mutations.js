/* eslint-disable */
export default {
    SET_MATO_ORDER(state, payload) {
        state.mato_order = payload || [];
    },
    SET_FACTORIES(state,payload){
        state.factories=payload || []
    }
};
