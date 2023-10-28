// start your server here
require('dotenv').config()

const server = require('./api/server.js')

const PORT = process.env.PORT

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))