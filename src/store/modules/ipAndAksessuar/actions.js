/* eslint-disable */


// =========== IP related apis ===========
async function postNewIp({commit}, payload) {
    console.log(payload)
    return await this.$axios
        .post('/product-income', payload)
        .then((res) => {
            if (res && res.data) {
                commit("SET_NEW_IP", res.data);
            }

            return (res && res.data) || {};
        }).catch((error) => {
            return error
        })
}
async function createNewIp({commit},payload){
    console.log(payload,'payload actions')
    console.log(payload,'new IP ')
    return await this.$axios.post('/product-income',payload)
        .then((res)=>{
            if(res && res.data){
                commit("SET_CREATE_IP",res.data)
            }
            return (res && res.data) || {}
        }).catch((error)=>{
            if (error.response.status === 422) {
                commit('SET_ERROR',error.response.data.errors)
            }
        })
}
async function loadAksessuarType({commit},params,payload){
    return await this.$axios.get('/product-categories',{params}, {payload})
        .then((res)=>{
            if(res && res.data){
                commit('SET_AKSESSUAR',res.data)
            }
            return (res && res.data) || {}
        }).catch((error)=>{
            return error
        })
}
async function loadProductType({commit},params,payload){
    return await this.$axios.get('/products',{params},{payload})
        .then((res)=>{
            if(res && res.data){
                commit('SET_PRODUCT',res.data.data)
            }
            return (res && res.data) || {}
        }).catch((error)=>{
            return error
        })
}




export default { postNewIp ,createNewIp,loadAksessuarType,loadProductType};

