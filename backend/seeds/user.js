/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async knex => {
  await knex('user').del();
  await knex('user').insert([
    {
      login: 'scissxrd',
      password: '$2a$10$7PL6E6/Fy3denQRHR0Np6e7B3eiIz.WBRxl0/Qud3yLHM81WkNws2',
      gender: 0
    }
  ]);
};
