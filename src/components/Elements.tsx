import React from 'react';


interface ElementsProps {
    isClicked: boolean | null;
  }

const Elements: React.FC<ElementsProps> = ({isClicked})=> {

   
        return (
            <>
            {isClicked ? <div> hello John</div> :null}
            </>
           
           );
  
}

export default Elements;
