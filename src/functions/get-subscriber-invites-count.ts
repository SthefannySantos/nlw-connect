import { redis } from '../redis/client'

interface GetSubscriberInvitesCountParams {
  subscriberId: string
} // interfaces definem a estrutura esperada de um objeto

export async function getSubscriberInvitesCount({
  subscriberId,
}: GetSubscriberInvitesCountParams) {
  const count = await redis.zscore('referral:ranking', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
