export type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  width?: number | string
  height?: number | string
  priority?: boolean
}
