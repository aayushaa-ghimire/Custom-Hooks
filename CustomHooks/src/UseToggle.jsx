import { useState } from "react";

const useToggle = (defaultVal) =>{      //First make an arrow function
const[value, setValue] = useState(defaultVal);      //Then using useState
function toggleValue(val){
    if(typeof val!='boolean'){
        setValue(!value)
    }
    else{
        setValue(val)
    }
}
return [value, toggleValue];
}

export default useToggle;