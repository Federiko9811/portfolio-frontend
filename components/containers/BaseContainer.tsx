import React from 'react';


const BaseContainer = ({children}: ReactNodeChildrenProp) => {
    return (
        <div className={"container"}>
            {children}
        </div>
    );
};

export default BaseContainer;