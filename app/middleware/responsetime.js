module.exports = (options) => {
    return async(ctx, next) => {
        var date = new Date().getTime();
        await next();
        console.log('response Time', (new Date().getTime() - date) + 'ms');
    }
}