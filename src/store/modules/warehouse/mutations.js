/* eslint-disable */
export default {
  SET_COACHES_LIST(state, payload) {
    state.coachesFields = payload || [];
  },
  SET_INCOME_IPS(state, payload) {
    state.income_ips = payload || [];
  },
  SET_OUTCOME_IPS(state, payload) {
    state.outcome_ips = payload || [];
  },
};
