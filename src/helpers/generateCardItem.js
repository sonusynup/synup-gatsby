export default (
  title,
  description,
  actionText,
  isHtml = false,
  bgImage,
  bgHoverImage,
  featureIcon,
  bgClass,
  featureUrl,
) => ({
  title,
  description,
  actionText,
  isHtml,
  bgImage,
  bgHoverImage,
  featureIcon,
  bgClass,
  to: featureUrl
})
