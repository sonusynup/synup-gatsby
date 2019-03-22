export default (buttonType) => {
  let className = null;
  if (buttonType === 'Full button') {
    className = 'primary'
  }
  if (buttonType === 'Border button') {
    className = 'secondary'
  }
  return className
}