// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const result = []
    const taskRow = await db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.task_id')
        .select(
            'p.project_description',
            'p.project_name',
            't.task_id',
            't.task_notes',
            't.task_description',
            't.task_completed',
        )


    for (let i = 0; i < taskRow.length; i++) {
        const task = {
            project_id: taskRow[i].project_id,
            project_name: taskRow[i].project_name,
            project_description: taskRow[i].project_description,
            task_id: taskRow[i].task_id,
            task_completed: taskRow[i].task_completed ? true : false,
            task_description: taskRow[i].task_description,
            task_notes: taskRow[i].task_notes,

        }
        if (taskRow) { result.push(task)}
    }
    return result
}

module.exports = {
    getTasks
}