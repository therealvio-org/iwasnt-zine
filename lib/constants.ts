// development controls
export const PREVIEW_MODE = process.env.NEXT_PUBLIC_PREVIEW_MODE === "true"

// issue-specific constants
export const TITLE = "IWASNT"
export const SUBTITLE = "there" // this changes per issue
export const FULL_TITLE = `${TITLE} [${SUBTITLE}]` // use when colouration of `subtitle` doesn't matter

export const EXAMPLE_PATH = "blog-starter"
export const CMS_NAME = "Markdown"
export const HOME_OG_IMAGE_URL =
  "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
