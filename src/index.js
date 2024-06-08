const fastify = require('fastify')();

fastify.get('/', function handler (request, reply) {
  reply.send({ hello: 'world' })
});

fastify.listen({ port: process.env.PORT }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
});
