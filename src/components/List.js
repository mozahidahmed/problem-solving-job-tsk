
import React, { useState, useEffect, memo } from 'react';
import SingleListItem from './SingleListItem';


const WrappedListComponent = ({ items }) => {

    const [selectedIndex, setSelectedIndex] = useState();

    useEffect(() => {
        setSelectedIndex(null);
    }, [items, selectedIndex]);

    const handleClick = index => {
        setSelectedIndex(index);
    };

    return (
        <ul style={{ textAlign: 'left' , width: '200px', margin: '0 auto'}}>
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


WrappedListComponent.defaultProps = {
    items: null,
};

const List = memo(WrappedListComponent);

export default List;

