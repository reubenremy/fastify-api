const fastify = require('fastify')({
    logger: true //this is the gate keeper to all console logs -> Already doper than express. but lets see if there is:
    /*
    [] built in JSON / body parser
    [] built in url encoder
    [] good routing
    */
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

    // fastify.log.info(`Umm where are we listening? ${addy}`) -> Logger already has a built in log statement. DOPE!
})