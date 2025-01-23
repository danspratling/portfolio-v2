import { faDribbble } from "@fortawesome/free-brands-svg-icons/faDribbble"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn"
import { faThreads } from "@fortawesome/free-brands-svg-icons/faThreads"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import {
  FontAwesomeIcon,
  // FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"
// import { Link } from '#/ui/components/Link';
import { cn } from "#/src/utils"

export type SocialIconProps = {
  name: string
  icon: any //FontAwesomeIconProps['icon'];
  url: string
}

export type SocialIconsProps = {
  className?: string
}

export const SocialIcons = ({
  // socialIcons,
  className,
}: SocialIconsProps) => {
  return (
    <div className={cn("flex gap-5 text-white", className)}>
      {socialIcons.map(({ name, icon, url }: SocialIconProps) => (
        <a href={url} key={name}>
          <p className="sr-only">{name}</p>
          <FontAwesomeIcon icon={icon} className="h-6 w-6" />
        </a>
      ))}
    </div>
  )
}

const socialIcons: SocialIconProps[] = [
  {
    name: "github",
    icon: faGithub,
    url: "https://github.com/skyward-digital",
  },
  {
    name: "dribbble",
    icon: faDribbble,
    url: "https://dribbble.com/skyward-digital",
  },
  {
    name: "threads",
    icon: faThreads,
    url: "https://www.threads.net/@skywardagency",
  },
  // {
  //   name: 'instagram',
  //   icon: faInstagram,
  //   url: 'https://www.instagram.com/skywardagency/',
  // },
  {
    name: "twitter",
    icon: faXTwitter,
    url: "https://twitter.com/SkywardAgency",
  },
  {
    name: "linkedin",
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/company/skyward-agency/",
  },
  // {
  //   name: 'youtube',
  //   icon: faYoutube,
  //   url: 'https://www.instagram.com/skywardagency/',
  // },
]
