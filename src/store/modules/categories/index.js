/* eslint-disable */
import mutations from "./mutations";
import actions from "./actions";

const state = () => ({
    productCategories: [],
    factoryCategories: [],
    factories: [],
    drawer:true
});

const getters = () => ({
    getProductCategories: state => {
        return state.productCategories
    }
});

export {state, mutations, actions, getters};
