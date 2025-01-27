import { Button } from "@/Button"
import { Image, type ImageProps } from "@/Image"
import styles from "./ProjectShowcase.module.css"

export const ProjectShowcase = ({ title, description, link }) => {
  return (
    <div className="space-y-2 max-w-[100vw] overflow-hidden relative">
      <div className="container flex gap-2">
        <div className="flex flex-col justify-center gap-2 py-20 flex-shrink-0 pr-8 w-full h-[31.25rem] max-w-80">
          <h2 className="">{title}</h2>
          <p className="font-light text-gray-400">{description}</p>
          <div className="pt-2">
            <Button variant="secondary" {...link} />
          </div>
        </div>
        <div
          className={`${styles["image-row-top"]} absolute -right-1/3 flex flex-col gap-2`}
        >
          <div className="flex gap-2 flex-nowrap pl-20">
            <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
            <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
            <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
            <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
          </div>
          <div className="flex gap-2 flex-nowrap">
            <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
            <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
            <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
            <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
          </div>
        </div>
      </div>
      <div
        className={`${styles["image-row-bottom"]} flex gap-2 flex-nowrap overflow-hidden`}
      >
        <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
        <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
        <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
        <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
        <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
        <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
        <ProjectImage src="/pigeon-loans-1.png" alt="Pigeon Loans" />
      </div>
    </div>
  )
}

const ProjectImage = ({ src, alt }: ImageProps) => {
  return (
    <div className="rounded-sm overflow-hidden flex-shrink-0">
      <Image src={src} alt={alt} width="350" height="246" className="" />
    </div>
  )
}
