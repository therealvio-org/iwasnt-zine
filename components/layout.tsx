import { PREVIEW_MODE } from "../lib/constants"
import Alert from "./alert"
import Footer from "./footer"
import Meta from "./meta"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={PREVIEW_MODE} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
