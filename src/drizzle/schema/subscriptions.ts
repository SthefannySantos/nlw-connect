import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(), // defaultRandom gera aleatório
  name: text('name').notNull(), // 1 campo query 2 como vai ficar no banco
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
