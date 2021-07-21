const fastify = require('fastify')({
    logger: true
}) // fastify({logger: true}) - remember fastify is just a function.

fastify.get('/', (req, res) => {
    res.send({ hello: 'world'})
})

fastify.listen(process.env.PORT || 8080, (err, addy) => {
    //Error handling always comes first
    if (err) {
        fastify.log.error(err)
        process.exit(1) //OH SHIT! Learned something new you can exit the server if there's an error instead of crashing!!!
    }

    fastify.log.info(`server listening on ${addy}`)
})