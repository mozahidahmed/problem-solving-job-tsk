import React, { memo } from 'react';
import PropTypes from 'prop-types';


const WrappedSingleListItem = ({index,isSelected, onClickHandler, text,}) => {

    return (

        <li style={{ backgroundColor: isSelected ? 'green' : 'red' , margin: "20px", padding: '15px'}}
            onClick={() => onClickHandler(index)} >
            {text}
        </li>


    );

};







// ..............................................................................
WrappedSingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.number,
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);
// ............................................................................

export default SingleListItem;