module.exports = {
    transpileDependencies: ["vuetify"],

    // local Laravel server address for api proxy
    devServer: { proxy: "https://emiran/api/" },
    // devServer: {proxy: 'https://mountain-it.tech/'},

    // outputDir should be Laravel public dir

    // for production we use blade template file
    indexPath:
        process.env.NODE_ENV === "production"
            ? "../resources/views/app.blade.php"
            : "index.html",
};
