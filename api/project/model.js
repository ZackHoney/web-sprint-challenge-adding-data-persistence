// build your `Project` model here
const db = require('../../data/dbConfig')


async function getProjects() {
    const result = []
    const projectsRow = await db('projects')
    for (let i = 0; i < projectsRow.length; i++) {
        const project = {
            project_id: projectsRow[i].project_id,
            project_name: projectsRow[i].project_name,
            project_completed: projectsRow[i].project_completed ? true : false,
            project_description: projectsRow[i].project_description
        }
        if (projectsRow) { result.push(project) }
    }
    return result
}

async function createProject(project) {
    await db('projects').insert(project);
    const newProject = {
        project_id: project.project_id,
        project_name: project.project_name,
        project_completed: project.project_completed ? true : false,
        project_description: project.project_description
    }
    return newProject
}


module.exports = {
    getProjects,
    createProject
}