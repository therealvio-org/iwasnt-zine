import { SUBTITLE, TITLE } from "../lib/constants"

const Intro = () => {
  return (
    <section className="float-left mt-16 mb-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <h1 className="font-punkboy text-5xl leading-tight tracking-tighter md:pr-8 md:text-8xl">
        {TITLE}
      </h1>
      <h1 className="font-punkboy text-5xl leading-tight tracking-tighter text-theme-colour md:pr-8 md:text-8xl">
        [{SUBTITLE}]
      </h1>
    </section>
  )
}

export default Intro
