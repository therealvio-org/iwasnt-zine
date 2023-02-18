import Container from "./container"
import cn from "classnames"

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  if (preview) {
    return (
      <div
        className={cn("border-b", {
          "border-white bg-white text-black": preview,
        })}
      >
        <Container>
          <div className="py-2 text-center text-sm">
            <>Work in Progress</>
          </div>
        </Container>
      </div>
    )
  }

  return <></>
}

export default Alert
