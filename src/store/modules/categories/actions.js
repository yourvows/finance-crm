/* eslint-disable */


// =========== Product related apis ===========
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

async function postCategories({commit}, payload) {
    return await this.$axios
        .post('/product-categories', {
            name: payload.name,
            parent_id: payload.parent_id
        })
        .then((res) => {
            if (res && res.data) {
            }

            return (res && res.data) || {};
        }).catch((error) => {
            return error
        })
}

async function editCategory({commit}, payload) {
    return await this.$axios
        .put(`/product-categories/${payload.id}`, {
            name: payload.name,
            parent_id: payload.parent_id
        })
        .then((res) => {
            if (res && res.data) {
            }

            return (res && res.data) || {};
        }).catch((error) => {
            return error
        })
}

// =========== Factory related apis ===========
async function fetchFactoryCategories({commit}, payload) {
    return await this.$axios
        .get('/factory-categories', {
            payload
        })
        .then((res) => {
            if (res && res.data) {
                commit("SET_FACTORY_CATEGORIES_LIST", res.data);
            }

            return (res && res.data) || {};
        }).catch((error) => {
            return error
        })
}

async function fetchFactories({commit}, payload) {
    return await this.$axios
        .get('/factories', {
            payload
        })
        .then((res) => {
            if (res && res.data) {
                commit("SET_FACTORIES_LIST", res.data);
            }

            return (res && res.data) || {};
        }).catch((error) => {
            return error
        })
}

async function postFactories({commit}, payload) {
    return await this.$axios
        .post('/factories', {
            name: payload.name,
            factory_category_id: payload.factory_category_id
        })
        .then((res) => {
            if (res && res.data) {
            }

            return (res && res.data) || {};
        }).catch((error) => {
            return error
        })
}

async function editFactory({commit}, payload) {
    return await this.$axios
        .put(`/factories/${payload.id}`, {
            name: payload.name,
            factory_category_id: payload.factory_category_id
        })
        .then((res) => {
            if (res && res.data) {
            }

            return (res && res.data) || {};
        }).catch((error) => {
            return error
        })
}



export default {
    fetchCategories, postCategories, editCategory, fetchFactoryCategories,
    fetchFactories, postFactories, editFactory
};

