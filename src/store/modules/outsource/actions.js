/* eslint-disable */


// =========== IP related apis ===========
async function postMatoOrder({commit}, payload) {
    return await this.$axios
        .post('/order', payload)
        .then((res) => {
            if (res && res.data) {
                commit("SET_MATO_ORDER", res.data);
            }

            return (res && res.data) || {};
        }).catch((error) => {
            return error
        })
}
async function loadFactories({commit},payload){
    return await this.$axios.get('/factories',payload)
        .then((res)=>{
            if(res && res.data){
                commit('SET_FACTORIES',res.data)
            }
            return (res && res.data) || {}
        }).catch((error)=>{
            return error
        })
}





export default { postMatoOrder,loadFactories };

