export default buttonType => {
  let className = null
  if (buttonType === "Full") {
    className = "primary"
  }
  if (buttonType === "Border") {
    className = "secondary"
  }
  return className
}
