import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBluesky } from "@fortawesome/free-brands-svg-icons/faBluesky"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"

type FooterProps = {
  logo: any
  title: string
  description: string
  links: JSX.IntrinsicElements["a"][]
}

const socials = [
  {
    title: "Bluesky",
    href: "https://bsky.app/profile/danspratling.dev",
    icon: faBluesky,
  },
  {
    title: "GitHub",
    href: "https://github.com/danspratling",
    icon: faGithub,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/dan-spratling/",
    icon: faLinkedin,
  },
]

export const Footer = ({ logo, title, description, links }: FooterProps) => {
  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="container pt-32">
        <div className="flex mb-6">
          <img {...logo} className="rounded-full" />
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-5 grid gap-4 mb-auto">
            <p className="text-2xl font-semibold">{title}</p>
            <p>{description}</p>

            <div className="flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={title}
                  href={social.href}
                  title={social.title}
                  className="p-1 text-gray-600 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-2xl size-6"
                    fixedWidth
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid md:grid-cols-2 gap-4">
            <div className="md:mx-auto my-4">
              <div className="grid gap-2">
                {links &&
                  links.map((link) => (
                    <p key={link.href}>
                      <a
                        {...link}
                        className="text-gray-300 hover:text-white focus:text-white focus:underline"
                      />
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 mt-16 border-t-2 border-gray-800">
          <p className="text-sm">© {new Date().getFullYear()} Dan Spratling</p>
        </div>
      </div>
    </footer>
  )
}
