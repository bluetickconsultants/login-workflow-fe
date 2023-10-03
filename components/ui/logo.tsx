import Link from 'next/link'
import BluetickLogo from '@/public/images/blueticklogo.png'
import Image from 'next/image'


export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={BluetickLogo} width={170} alt="blue tick logo"/>
      </Link>
  )
}
