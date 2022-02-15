import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import {getCountriesById} from "../../actions"
import { Link } from 'react-router-dom';

import styles from "./Detail.module.css"



function CountryDetail () {
    
    const dispatch = useDispatch()
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(getCountriesById(id))
    },[dispatch,id])

    const details = useSelector(state => state.details)
    let {flag, name, continent, capital, subregion, area, population,activities } = details

    
    


    return (
        <div >
            <div>
                <Link to='/home'>Home</Link>
            </div>
        <div className={styles.all} >  
            <div >
               
                 <h5>{id}</h5> 
                <h1>{name}</h1>
                
                <img src = {flag} alt="non" style={{width:300}}/>
                <h3>Continent: {continent}</h3>
                <h3>Subregion: {subregion}</h3>
                <h3>Capital: {capital}</h3>
                <h4>Area: {area} Km2</h4>
                <h4>Population: {population}</h4>  
            
                  
<div  className={styles.activity}>
 <h2>Activities:</h2>
                <p>
                    {activities&&activities.length ?
                    activities.map(a=>
                    <li> Name: <span>{a.name} </span>      
                        <p>Duration: <span>{a.duration}</span>  Hours  </p>   
                        <p>Difficulty: <span>{a.difficulty}</span> </p>   
                        <p>Season: <span>{a.season}</span></p> 

                        <div className="Actividad-Linea"></div>
                        
                    </li>) 
                     : <span>No activities yet</span>}   
                </p> 
                </div>
            </div>
            </div>
        </div>
    )
}
                    
            
                 
                
           
            <div>   
            
            
                
                
                     
               
                
                
               

            </div>
    
    
export default CountryDetail;