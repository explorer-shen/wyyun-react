export function handlePlayCount(count: number) {
  if (count < 10000) return count
  else if (10000 < count && count < 100000000) {
    return Math.floor(count / 10000) + '万'
  } else if (100000000 < count) {
    return Math.floor(count / 100000000) + '亿'
  }
}
