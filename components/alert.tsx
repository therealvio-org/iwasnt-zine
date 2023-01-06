import Container from "./container"
import cn from "classnames"

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "border-black bg-black text-white": preview,
        "border-white bg-white text-black": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline transition-colors duration-200 hover:text-teal-300"
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
