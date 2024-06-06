/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex').insert([
    {id: 1, name: 'Jake', sun: 'Leo', moon: 'Libra', ascendant: 'Aquarius'},
    {id: 1, name: 'Amit', sun: 'Cancer', moon: 'Scorpio', ascendant: 'Aquarius'},
    {id: 1, name: 'Shane', sun: 'Gemini', moon: 'Pisces', ascendant: 'Aquarius'},
    {id: 1, name: 'Eli', sun: 'Virgo', moon: 'Taurus', ascendant: 'Aquarius'}
  ]);
};
