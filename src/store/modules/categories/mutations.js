/* eslint-disable */
export default {
    SET_PRODUCT_CATEGORIES_LIST(state, payload) {
        state.productCategories = payload || [];
    },
    SET_DRAWER(state, payload) {
        state.drawer = payload
    },
    SET_FACTORY_CATEGORIES_LIST(state, payload) {
        state.factoryCategories = payload || [];
    },
    SET_FACTORIES_LIST(state, payload) {
        state.factories = payload || [];
    },

};
