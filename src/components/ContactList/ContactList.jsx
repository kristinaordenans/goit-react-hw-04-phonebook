import React from "react";
import { PropTypes } from "prop-types";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactListContainer} from "./ContactList.styled";


export const ContactList = ({ contacts, onDeliteContact }) => {
    return (
    <div>
        <ContactListContainer>
           {contacts.map(({ name, number, id })=>{
               return (
                   <ContactItem key={id}
                        id={id}
                        name={name}
                        tel={number}
                        onDeliteContact={onDeliteContact} />
                )
             })
           }     
       </ContactListContainer>
    </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired),
    onDeliteContact: PropTypes.func.isRequired,
}