import type { ImgHTMLAttributes } from "react"

type LogosProps = {
  logos: ImgHTMLAttributes<HTMLImageElement>[]
}

export const Logos = ({ logos }: LogosProps) => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
          {logos.map((logo) => (
            <Logo key={logo.src} {...logo} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Logo = ({ className, ...logo }: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div className="bg-gray-400/5 p-6 sm:p-10">
      <img
        className="max-h-12 w-full object-contain"
        width="158"
        height="48"
        {...logo}
      />
    </div>
  )
}
