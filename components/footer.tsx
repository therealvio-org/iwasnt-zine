import { EXAMPLE_PATH } from "../lib/constants"
import Container from "./container"

const Footer = () => {
  return (
    <footer className="border-t border-white bg-black">
      <Container>
        <div className="flex flex-col items-center justify-center py-28 lg:flex-row">
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 mb-6 border-black bg-white py-3 px-12 font-bold text-black transition-colors duration-200 lg:mb-0 lg:px-8"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
