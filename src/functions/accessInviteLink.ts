import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface AccessInviteLinkParams {
  subscriberId: string
} // interfaces definem a estrutura esperada de um objeto

export async function accessInviteLink({
  subscriberId,
}: AccessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)

  // redis armazena

  // list == [] - comeca com l
  // hashes == {} obj - comeca com h
  // sorted sets  [] ordenado por coluna - comeca com s
}
