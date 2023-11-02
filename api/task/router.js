// build your `/api/Tasks` router here
const router = require('express').Router()
const Tasks = require('./model')


router.get('/', (req, res, next) => {
    Tasks.getTasks()
    .then(task => {
        res.status(200).json(task);
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.addTasks(req.body)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(next)
})


router.use((err, req, res, next) => {// eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside task/router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router// build your `/api/tasks` router here
