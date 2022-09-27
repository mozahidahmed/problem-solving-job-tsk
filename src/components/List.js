import React, { useState, useEffect, memo } from 'react';
import SingleListItem from './SingleListItem';


const WrappedListComponent = ({ items }) => {
    const [selectedIndex, setSelectedIndex] = useState();


    // useEffect.............
    useEffect(() => {
        setSelectedIndex(null);
    }, [items, selectedIndex]);

    // handle ...........
    const handleClick = index => {
        setSelectedIndex(index);
    };



    return (

        // ul ...........
        <ul style={{ textAlign: 'left' , width: '300px', margin: '0 auto'}}>
           
            {/* map ...........*/}
            {items.map((item, index) => (
            <SingleListItem key={index} onClickHandler={() => handleClick(index)} text={item.text}
                    index={index}
                    isSelected={selectedIndex}
                />
            ))}
         {/* map .............*/}


        </ul>
    )
};






// ........................................
WrappedListComponent.defaultProps = {
    items: null,
};
const List = memo(WrappedListComponent);
// ............................................
export default List;

