import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex items-center flex-col justify-center h-full flex-1 relative z-10">
      <Image src="/window-loading.svg" height={306} width={450} alt="" />
      <h1 className="text-6xl pt-12 text-[#1A135F] font-bold">
        We&apos;re Under Maintenance!
      </h1>
      <p className="text-lg pt-2">
        We&apos;re making some updates to improve your experience.
      </p>
    </section>
  )
}
