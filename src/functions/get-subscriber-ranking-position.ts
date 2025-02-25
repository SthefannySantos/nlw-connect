import { redis } from '../redis/client'

interface GetSubscriberRankingPositionParams {
  subscriberId: string
} // interfaces definem a estrutura esperada de um objeto

export async function getSubscriberRankingPosition({
  subscriberId,
}: GetSubscriberRankingPositionParams) {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)
  /* determina o ranking ordenando do maior p menor */

  if (rank == null) {
    return { position: null }
  }

  return { position: rank + 1 } // +1 pq retorna o indice
}
