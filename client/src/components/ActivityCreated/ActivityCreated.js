



import React from 'react'
import { useEffect, useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {getCountries, postActivity} from '../../actions/index.js'
import { Link } from 'react-router-dom'

export default function ActivityCreated(){
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);
    //const[inputCountries, setInputCountries] = useState([])

    const[input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country:[],

    })
    //necesito despachar la accion para que me traiga todo lo que esta en el estado de countries
    useEffect(()=>{
        dispatch(getCountries());
    }, [dispatch])

    function handlerOnChange (e){
                setInput({
                    ...input,
                    [e.target.name]:e.target.value
                })
            }

            function handleSelect(e){
                setInput({
                    ...input,
                    country:[...input.country, e.target.value]
                })
            }

            function handleDelete(e){
                setInput({
                    ...input,
                    allCountries:input.country.filter(el => el.name !== e)
                })
            }

            function handleSubmit(e){
                e.preventDefault();
                dispatch(postActivity(input))
                alert('¡Activity created Successfully !')
                setInput({
                    name: '',
                    difficulty: '',
                    duration: '',
                    season: '',
                    country:[],
                })
             
            }
            



return(
    <div>
<Link to='/home'><button>GO BACK</button></Link>

<h1>Create your Activity!!!!</h1>

<form onSubmit={e=>handleSubmit(e)} >
                 <label>Activity Name:</label>
                 <input name='name' value={input.name} onChange={handlerOnChange} required/>

                 <label>Duration:</label>
                 <input name='duration' type="number" min="1" max="24" value={input.duration} onChange={handlerOnChange} required/>

                 <label>Dificulty:</label>
                 <select name="difficulty"  value={input.difficulty} onChange={handlerOnChange}  required>
                 <option  value={''}></option>
                 <option value={1}>1</option>
                 <option value={2}>2</option>
                 <option value={3}>3</option>
                 <option value={4}>4</option>
                 <option value={5}>5</option>
                 </select>



                <label>Season:</label>
                 <select name="season"  onChange={handlerOnChange} value={input.season}  required>
                 <option  value={''}></option>
                <option value={'winter'}>Winter</option>
                <option value={'autumn'}>Autumn</option>
               <option value={'spring'}>Spring</option>
                 <option value={'summer'}>Summer</option>
                 </select> 



                

                <label>Country:</label>
                <select  onChange={handleSelect} >
                    {allCountries?.map(el => {
                     return    <option value={el.name} >{el.name}</option>
                    })}
                </select>
                <button type='submit'>Create Activity</button>
                

</form>
{input.country?.map(el=>
                <div >
                    <p >{el}<button  onClick={()=>{handleDelete(el)}}>X</button></p>
                </div>
                )}
    </div>


)

}


