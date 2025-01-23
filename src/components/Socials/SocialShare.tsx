import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link01Icon } from "@untitledui-icons/react/line"
import { cn } from "#/src/utils"
// import TrackGoal from "#/utils/trackGoal"
import { useState } from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
} from "react-share"
import {
  faBluesky,
  faMastodon,
  faReddit,
} from "@fortawesome/free-brands-svg-icons"

export const SocialShare = (
  props: React.HtmlHTMLAttributes<HTMLDivElement>
) => {
  return (
    <>
      <CopyLinkButton />
      <BlueskyShareButton />
      <SocialShareButton
        name="linkedin"
        icon={faLinkedinIn}
        as={LinkedinShareButton}
      />
      <SocialShareButton name="reddit" icon={faReddit} as={RedditShareButton} />
      <SocialShareButton
        name="facebook"
        icon={faFacebookF}
        as={FacebookShareButton}
      />
    </>
  )
}

const CopyLinkButton = () => {
  const [goal, setGoal] = useState(false)

  const handleClick = () => {
    setGoal(true)
    navigator.clipboard.writeText(window?.location?.href)
  }

  return (
    <>
      <button className="h-6 w-6" onClick={handleClick}>
        <span className="sr-only">Share link</span>
        <Link01Icon
          className="text-inherit hover:text-yellow-400"
          strokeWidth={2}
        />
      </button>

      {/* {goal ? (
        <TrackGoal name="Copy Blog" type="Blog" link={window?.location?.href} />
      ) : null} */}
    </>
  )
}

const SocialShareButton = ({
  name,
  icon,
  as,
  ...rest
}: {
  name: string
  icon: any
  as: any
}) => {
  const [goal, setGoal] = useState(false)

  const handleClick = () => {
    setGoal(true)
    navigator.clipboard.writeText(window?.location?.href)
  }

  const CustomComponent = as

  return (
    <>
      <CustomComponent
        url={typeof window !== "undefined" && window.location?.href}
        className="group"
        onClick={handleClick}
        {...rest}
      >
        <span className="sr-only">Share on {name}</span>
        <FontAwesomeIcon
          icon={icon}
          className={cn(
            "h-6 w-6 text-inherit duration-150",
            name === "facebook" && "hover:text-[#1877F2]",
            name === "twitter" && "hover:text-black",
            name === "linkedin" && "hover:text-[#0077B5]",
            name === "reddit" && "hover:text-[#FF5700]"
          )}
          strokeWidth={1.5}
        />
      </CustomComponent>

      {/* {goal ? (
        <TrackGoal name="Link Blog" type="Blog" name={name} link={window?.location?.href} />
      ) : null} */}
    </>
  )
}

const BlueskyShareButton = () => {
  const [goal, setGoal] = useState(false)

  const handleClick = () => {
    setGoal(true)
    navigator.clipboard.writeText(window?.location?.href)
  }

  return (
    <>
      <a
        href={
          typeof window !== "undefined"
            ? `https://bsky.app/intent/compose?text=I%20reccommend20%${window?.location?.href}`
            : undefined
        }
        onClick={handleClick}
        className="text-inherit"
      >
        <span className="sr-only">Share on Bluesky</span>
        <FontAwesomeIcon
          icon={faBluesky}
          className={"h-6 w-6 text-inherit duration-150 hover:text-[#208bfe]"}
          strokeWidth={1.5}
        />
      </a>

      {/* {goal ? (
        <TrackGoal name="Link Blog" type="Blog" name="bluesky" link={window?.location?.href} />
      ) : null} */}
    </>
  )
}
