import './button.css'
const Button = ({
  text,
  width,
  icon
}) => {
  return (
    <button style={width && { width: width }}>
      {
        icon && <span>{icon}</span>
      }
      {text}
    </button>
  )
}

export default Button