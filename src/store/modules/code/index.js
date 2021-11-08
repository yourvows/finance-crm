/* eslint-disable */
import mutations from "./mutations";
import actions from "./actions";

const state = () => ({
    productCodesFields: [],
    error:null,
    loading:false,
    product:{
        code:'',
        description:'',
        name:'',
        product_category_id:''
    },
    update: false
});

const getters = () => ({
    getProductCodes: state => {
        return state.productCodesFields
    },
    getProduct:state=>{
        return state.product
    }

});

export {state, mutations, actions, getters};
