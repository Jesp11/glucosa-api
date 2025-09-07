'use strict';
const { ulid } = require('ulid');
const bcrypt = require('bcrypt');
require('dotenv').config();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASS = process.env.ADMIN_PASS;

module.exports = {
  async up(queryInterface, Sequelize) {

    if (!ADMIN_EMAIL || !ADMIN_PASS) {
      console.log('Admin email or password not set in environment variables. Skipping admin user creation.');
      return;
    }

    const hashedPassword = await bcrypt.hash(ADMIN_PASS, 13);

    await queryInterface.bulkInsert('users', [{
      id: ulid(),
      email: ADMIN_EMAIL,
      password: hashedPassword,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { email: ADMIN_EMAIL }, {});
  }
};
