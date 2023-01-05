import { SUBTITLE } from "../lib/constants"

const Intro = () => {
  return (
    <section className="float-left flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="font-punkboy text-5xl md:text-8xl tracking-tighter leading-tight md:pr-8">
        IWASNT
      </h1>
      <h1 className="font-punkboy text-5xl text-cyan md:text-8xl tracking-tighter leading-tight md:pr-8">
        [{SUBTITLE}]
      </h1>
    </section>
  )
}

export default Intro
