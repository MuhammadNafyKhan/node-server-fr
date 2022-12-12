module.exports = (sequelize, Sequelize) => {
  const userData = sequelize.define("userData", {
    userName: {
      type: Schema.Types.String,
      required: true,
    },
    image: {
      type: Schema.Types.blob,
      required: true,
    },
  });
  return userData;
};
