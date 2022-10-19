'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.removeColumn("Cars", "type", {
    // });
    // await queryInterface.removeColumn("Cars", "email", {
    // });
    // await queryInterface.removeColumn("Cars", "username", {
    // });
    // await queryInterface.removeColumn("Cars", "password", {
    // });

    // await queryInterface.addColumn("Cars", "name", {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // });
    await queryInterface.addColumn("Cars", "size", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("Cars", "price", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("Cars", "image", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
}
