import { redis } from '../redis/client'

interface GetSubscriberInviteClicksParams {
  subscriberId: string
} // interfaces definem a estrutura esperada de um objeto

export async function getSubscriberInviteClicks({
  subscriberId,
}: GetSubscriberInviteClicksParams) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
