import React, { useEffect } from 'react'
import { matchPath, useLocation } from 'react-router'
import { titles } from '../destinations';

const DynamicTitle = () => {
  
  const location = useLocation();
  console.log(location);
    useEffect(() =>{
        let newTitle = titles[location.pathname];
        if(!newTitle){
            //check dynamic rote
            const match = matchPath("/destinations/:id", location.pathname);
            if(match){
                const {id} = match.params;
                newTitle = ` ${id}`
            }
        }
        document.title = newTitle
    }, [location.pathname]);

    return null;
}

export default DynamicTitle
