/* eslint-disable */

async function getFilteredData({commit}, payload) {
    return await this.$axios.get(payload.routeURL + '?search=' + payload.searchValue, )
        .then((res) => {
            if (res && res.data) {
            }
            return (res && res.data) || {}
        }).catch((error) => {
            return error
        })
}


export default { getFilteredData };
