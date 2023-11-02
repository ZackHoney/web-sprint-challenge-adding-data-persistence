// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResources()
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(next)
})


router.use((err, req, res, next) => {// eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside resource/router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router