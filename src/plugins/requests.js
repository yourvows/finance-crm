function getDataApi(cb, url, params) {
    this.$axios.get(url, {
        params
    })
        .then((response) => {
            if (response && response.data) {
                cb(response.data)
            }

            return (response && response.data) || {};
        })
        .catch((error) => {
            console.log(error)
        })
}

function saveDataApi(data, cb) {
    this.$axios.post('blogs', data)
        .then(function (response) {
            cb(response)
        })
        .catch((error) => {
            console.log(error)
        })
}

function updateData(idblog, data, cb) {
    this.$axios.put('blogs/' + idblog, data)
        .then((response) => {
            cb({status: 201})
        })
        .catch((error) => {
            console.log(error)
        })
}

function deleteData(idblog, cb) {
    this.$axios.delete('blogs/' + idblog)
        .then((response) => {
            cb(response)
        })
        .catch((error) => {
            console.log(error)
        })
}

export default {
    getData: (cb) => getDataApi(cb, url, params),
    saveBlog: (data, cb) => saveDataApi(data, cb),
    updateBlog: (idblog, data, cb) => updateData(idblog, data, cb),
    deleteBlog: (idblog, cb) => deleteData(idblog, cb)
}
