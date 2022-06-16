import './icon.css'

const Icon = ({
    icon,
    background,
    color
}) => {
    return (
        <div className="icon" style={{backgroundColor: background, color: color}}>
           {icon}
        </div>
    )
}

export default Icon