// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')


router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(project => {
        res.status(200).json(project);
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Projects.createProject(req.body)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(next)
})


router.use((err, req, res, next) => {// eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside project/router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router