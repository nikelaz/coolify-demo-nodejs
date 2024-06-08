const fastify = require('fastify')();

fastify.get('/', function handler (request, reply) {
  reply.send({ hello: 'world' })
});

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
});
