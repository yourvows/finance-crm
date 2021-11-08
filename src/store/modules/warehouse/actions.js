/* eslint-disable */
function fetchCoaches({ commit }, params) {
  return this.$axios
    .get("/coaches", {
      params
    })
    .then((res) => {
      // if (res && res.data) {
      //   commit("SET_COACHES_LIST", res.data);
      // }

      return (res && res.data) || {};
    });
}

async function fetchIncome({commit}, params, payload) {
  return await this.$axios
      .get('/product-income', params, payload)
      .then((res) => {
          if (res && res.data) {
              commit("SET_INCOME_IPS", res.data);
          }

          return (res && res.data) || {};
      }).catch((error) => {
          return error
      })
}

async function fetchOutcome({commit}, payload) {
  return await this.$axios
      .get('/factory-income', payload)
      .then((res) => {
          if (res && res.data) {
              commit("SET_OUTCOME_IPS", res.data);
          }

          return (res && res.data) || {};
      }).catch((error) => {
          return error
      })
}




export default { fetchCoaches, fetchIncome, fetchOutcome };
