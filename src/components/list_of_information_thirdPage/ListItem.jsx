import './listItem.css'

const ListItem = ({
    imageIcon,
    icon,
    text
}) => {
    return (
        <li className='list-item'>
            <div className="icon-wrapper">
                {
                    imageIcon ? <img src={imageIcon} alt="check icon" /> :
                        icon
                }

            </div>
            <p id='paragraph'> { text}</p>
        </li>
    )
}

export default ListItem