const projects = [
    { 
        project_name: 'Tile Shower',
        project_description: 'Add tile to a shower',
        project_completed: false
    }
]

const resources = [
    {
        resource_name: 'Tile',
        resource_description: 'White Subway Tile'
    }
]

const tasks = [
    {
        task_description: 'Install Tile',
        task_notes: 'went smoothly',
        task_completed: true,
        project_id: 1
    }
]

const resource_assignment = [
    {
        project_id: 1,
        resource_id: 1
    }
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('resource_assignment').insert(resource_assignment)
tasks
}