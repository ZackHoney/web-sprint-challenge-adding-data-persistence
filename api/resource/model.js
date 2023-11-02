// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources() {
return await db('resources')
}

async function createResource(resource) {
    await db('resources').insert(resource);
    const newresource = {
        resource_id: resource.resource_id,
        resource_name: resource.resource_name,
        resource_description: resource.resource_description
    }
    return newresource
}



module.exports = {
    getResources,
    createResource
}