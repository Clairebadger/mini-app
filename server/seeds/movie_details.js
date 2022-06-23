/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie_details').del()
  await knex('movie_details').insert([
    {id: 1, name: 'MeanGirls'},
    {id: 2, name: 'Hackers'},
    {id: 3, name: 'The Grey'},
    {id: 4, name: 'Sunshine'},
    {id: 5, name: 'Ex Machina'}
  ]);
};
