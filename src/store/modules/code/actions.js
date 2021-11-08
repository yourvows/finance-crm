/* eslint-disable */
async function fetchProductCodes({commit}, params, payload) {
    console.log(params)
    return await this.$axios
        .get(`/products`, {params}, {payload})
        .then((res) => {
            if (res && res.data) {
                commit("SET_PRODUCT_CODES_LIST", res.data);
            }

            return (res && res.data) || {};
        }).catch((error) => {
            if (error.response.status === 422) {
                commit('SET_ERROR', error.response.data.errors)
            }
            return error
        })
}

async function saveProductCode({commit}, payload) {
    return await this.$axios
        .post('/products', payload)
        .then((res) => {
            if (res && res.data) {
                commit("SET_PRODUCT_CODES_LIST", res.data);
                console.log('successefull')
            }
            return (res && res.data) || {};
        }).catch((error) => {
            if (error.response.status === 422) {
                commit('SET_ERROR', error.response.data.errors)
            }
            return error
        })
}

async function fetchCategories({commit}, payload) {
    return await this.$axios
        .get('/product-categories', {
            payload
        })
        .then((res) => {
            if (res && res.data) {
                commit("SET_PRODUCT_CATEGORIES_LIST", res.data);
            }

            return (res && res.data) || {};
        }).catch((error) => {
            return error
        })
}

async function getProductId({commit}, payload) {
    console.log('/products/'+payload.id)
    return await this.$axios.get('/products/' + payload.id)
        .then((res) => {
            if (res && res.data) {
                commit('GET_ID_PRODUCT_CODES_LIST',res.data)
            }
            return (res && res.data) || {}
        }).catch((error) => {
            return error
        })
}
async function editProduct({commit},payload){
    commit('SET_REQUEST')
   return await this.$axios.put('/products/' + payload.id, payload)
       .then((res) => {
         commit('SET_SUCCESS',payload)
           return (res && res.data) || {}
       }).catch((error) => {
           if (error.response.status === 422) {
               commit('SET_ERROR', error.response.data.errors)
           }

       })
}
async function removeProduct({commit},payload) {
    return await this.$axios.delete('/products/' + payload.id)
        .then((res)=>{
            console.log(res)
        }).catch((error) => {
            return error
        })

}

export default {fetchProductCodes, fetchCategories, saveProductCode,getProductId,editProduct,removeProduct};
