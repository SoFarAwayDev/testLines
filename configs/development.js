module.exports = function (_path) {

    return {
        devtool: 'source-map',
        devServer: {
            contentBase: "./dist"
        },
    }
};