import Image from 'next/image'

export default function ItemIcon({url, width, height, name}) {
  return <Image src={`/img/item/${url}`} alt={name} width={width} height={height} />
}
