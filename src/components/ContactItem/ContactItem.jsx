import { PropTypes } from "prop-types";
import { Item, P, DeliteBtn } from './ContactItem.styled';


export const ContactItem = ({ name, id, onDeliteContact, tel }) => {
    return (<Item>
        <P>{name}: <span>{tel}</span></P>
        <DeliteBtn type = "button" onClick={() => {onDeliteContact(id)}}>delete</DeliteBtn>
   </Item>)
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    onDeliteContact: PropTypes.func.isRequired,
}