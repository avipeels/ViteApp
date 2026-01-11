import Fastify from 'fastify'
import cors from '@fastify/cors'
import staticPlugin from '@fastify/static'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..')

const fastify = Fastify({
  logger: true
})

// Register CORS
fastify.register(cors)

// Register static file serving
fastify.register(staticPlugin, {
  root: join(__dirname, 'dist'),
  prefix: '/'
})

// API routes
fastify.get('/api/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date().toISOString() }
})

fastify.get('/api/users', async (request, reply) => {
  return [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]
})

// Serve React app for all other routes (SPA fallback)
fastify.setNotFoundHandler(async (request, reply) => {
  if (request.url.startsWith('/api/')) {
    reply.code(404).send({ error: 'API endpoint not found' })
  } else {
    reply.sendFile('index.html')
  }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
    console.log('🚀 Fastify server running on http://localhost:3000')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
