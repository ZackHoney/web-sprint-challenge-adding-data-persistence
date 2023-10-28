/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
    .createTable('projects', table => {
        table.increments()
    })
    .createTable('resources', table => {
        table.increments()
    })
    .createTable('tasks', table => {
        table.increments()
    })
    .createTable('resource_assignment', table => {
        table.increments()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('resoure_assignment')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
