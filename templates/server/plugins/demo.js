
export default (app, options) => {
  return async (req, res, next) => {
    await next();
  };
}