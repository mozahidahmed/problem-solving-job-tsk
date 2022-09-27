
import React, { useState, useEffect, memo, PropTypes } from 'react';
// import PropTypes from 'prop-types';
import SingleListItem from './SingleListItem';

// Single List Item


// List Component
const WrappedListComponent = ({ items }) => {

    const [selectedIndex, setSelectedIndex] = useState();

    useEffect(() => {
        setSelectedIndex(null);
    }, [items, selectedIndex]);

    const handleClick = index => {
        setSelectedIndex(index);
    };

    return (
        <ul style={{ textAlign: 'left' }}>
            {items.map((item, index) => (
                <SingleListItem
                    key={index}
                    onClickHandler={() => handleClick(index)}
                    text={item.text}
                    index={index}
                    isSelected={selectedIndex}
                />
            ))}
        </ul>
    )
};

WrappedListComponent.propTypes = {
    items: PropTypes?.toArray(PropTypes.shape({
        text: PropTypes.string.isRequired,
    })),
};

WrappedListComponent.defaultProps = {
    items: null,
};

const List = memo(WrappedListComponent);

export default List;

