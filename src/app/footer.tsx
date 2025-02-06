import { IconInsta } from '@/assets/insta'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="relative z-10 py-12 container flex justify-between items-center">
      <div>
        <h2 className="font-light text-sm">Contact Information</h2>
        <p>
          If you need assistance, feel free to reach out to us at{' '}
          <Link
            href={'tel:+971524538074'}
            className="underline hover:text-[#1A135F] transition-colors"
          >
            +971 52 453 8074
          </Link>
          ,{' '}
          <Link
            href={'tel:+971527356869'}
            className="underline hover:text-[#1A135F] transition-colors"
          >
            +971 52 735 6869
          </Link>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <h3>Follow us on</h3>
        <Link
          href={'https://www.instagram.com/astro_overseas/'}
          className="hover:text-[#1A135F]"
        >
          <IconInsta />
        </Link>
      </div>
    </footer>
  )
}
