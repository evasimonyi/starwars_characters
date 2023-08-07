module.exports = (env) => {
  return require(`./webpack.config.${env.production ? 'prod' : 'dev'}.js`);
};
