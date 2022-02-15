import React from "react";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {filterByActivity, getActivity} from "../../actions";

export default function FilterActivity() {
    
    
    const allActivities = useSelector(state => state.activity);
    
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getActivity() );
    }, [dispatch])

    

   
    
    
     
    function handleFilterActivity(e){
        e.preventDefault();
        dispatch(filterByActivity(e.target.value));
        //que me vuelva a traer todo lo que esta en el estado de countries
    
    }
    
    
    

        return (
            <div>
                 <label>Selecciona una Actividad: </label>

                 
                    <select onChange={(e)=>{handleFilterActivity(e)}} >
                        
                    { allActivities?.map(el => {
                        
                            return (
                                
                            <option key={el.id} value={el.name}>{el.name}</option>)
                        
                        })}

                      
          
            </select>  
       </div>

    
    )
}





        


