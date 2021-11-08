/* eslint-disable */
import mutations from "./mutations";
import actions from "./actions";

const state = () => ({
    mato_order: [],
    factories:[],
});

const getters = () => ({
    // getNewIp: state => {
    //     return state.new_ip
    // },

});

export {state, mutations, actions, getters};
