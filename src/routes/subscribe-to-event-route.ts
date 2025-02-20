import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { subscribeToEvent } from '../functions/subscribeToEvent'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Subscribes someone to the event',
        tags: ['subscription'],
        body: z.object({
          name: z.string(), // pode ser colocada o campo optional()
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body

      const { subscriberId } = await subscribeToEvent({
        name,
        email,
      })

      return reply.status(201).send({
        subscriberId,
      })
    }
  )
}
