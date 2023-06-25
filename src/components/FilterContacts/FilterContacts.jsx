import { PropTypes } from "prop-types";
import { FindContactInput, SearchTitle } from "./FilterContacts.styled";


export const Filter = ({ value, filterInputChange }) => {
    return (
        <div>
            <SearchTitle>Find contacts by name</SearchTitle>
            <FindContactInput type="text" value={value} onChange={filterInputChange} />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filterInputChange: PropTypes.func.isRequired,
}