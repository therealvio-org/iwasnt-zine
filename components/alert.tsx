import Container from "./container"
import cn from "classnames"

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-black border-black text-white": preview,
        "bg-white border-white text-black": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>Work in Progress</>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert
