/* eslint-disable */
import mutations from "./mutations"
import actions from "./actions"

const state = () => ({
    searchValue:'',
    activeRouteName: '',
    routeURL: ''
})

const getters = () => ({
    // getProductCategories: state => {
    //     return state.productCategories
    // }
});

export { state, mutations, getters, actions }
