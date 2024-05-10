'use strict';

module.exports = {
  // email: DataTypes.STRING,
  // password:DataTypes.STRING,
  // firstName: DataTypes.STRING,
  // lastName: DataTypes.STRING,
  // address: DataTypes.STRING,
  // gender: DataTypes.BOOLEAN,
  // roleid: DataTypes.STRING
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {

        firstName: 'admin',
        lastName: 'first',
        email: 'admin@gmail.com',
        password: '123456',
        address: 'VIETNAM',
        gender: '1',
        typeRole: 'ROLE',
        keyRole: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
