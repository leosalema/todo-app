/** this is the component that helps us no longer 
 * need to make the javascript if inside other components */
import React from 'react'

export default props => {
    if(props.test){
        return props.children
    } else {
        return false
    }
}