/* eslint-disable @next/next/no-img-element */
function mockNextImage(props: any) {
  const { src, alt, width, height, testId } = props
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-testid={testId}
    />
  )
}

export default mockNextImage
