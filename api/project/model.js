// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const project = await db('projects')
        .select(
            'project_name',
            'project_id',
            'project_description',
            'project_completed'
        )
    return project
}

// async function createProject(project) {
//     const [project_id] = await db('projects').insert(project);
//     return getProjects().where({ project_id }).first();
// }


module.exports = {
    getProjects,

}