import { Elysia } from 'elysia'
import { autoroutes } from 'elysia-autoroutes'

const app = new Elysia()
  .use(
    autoroutes({
      routesDir: './routes',
      prefix: '/api',
      generateTags: false
    })
  )
  .listen(3000)

export type ElysiaApp = typeof app
