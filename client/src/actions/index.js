import axios from 'axios';
 const GET_COUNTRIES = "GET_COUNTRIES";
 const GET_COUNTRIES_BY_NAME='GET_COUNTRIES_BY_NAME';
 const GET_COUNTRIES_BY_ID='GET_COUNTRIES_BY_ID';
 const FILTER_BY_CONTINENT='FILTER_BY_CONTINENT';
 const FILTER_BY_ACTIVITY='FILTER_BY_ACTIVITY';
 const ORDER_BY_NAME='ORDER_BY_NAME';
 const ORDER_BY_SCORE='ORDER_BY_SCORE';
const GET_ACTIVITY='GET_ACTIVITY';

export  function getCountries (){
    
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/countries");
        
        return dispatch({
            type : GET_COUNTRIES,
            payload: json.data,
            
        }) 
    }  
} 

export function getCountriesByName(name){
    return async function(dispatch){
        try{
            var json= await axios.get(`http://localhost:3001/countries?name=${name}` );
            return dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: json.data,
            })
        }catch(err){
            console.log(err)
        }
        }
}

export function getCountriesById(id){
    return async function(dispatch){
        try{
            var json= await axios.get(`http://localhost:3001/countries/${id}` );
            return dispatch({
                type: GET_COUNTRIES_BY_ID,
                payload: json.data,
            })
        }catch(error){
            console.log(error)
        }
        }
}

export function filterByContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload,
    }

}
export function getActivity(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/activity");
        
        return dispatch({
            type : GET_ACTIVITY,
            payload: json.data,
            
        }) 
    }  
}
export function filterByActivity(payload){
    return {
        type: FILTER_BY_ACTIVITY,
        payload,
    }
    
}



export function orderByName (payload){
    return {
        type : ORDER_BY_NAME,
        payload,
    }
}

export function orderByScore (payload){
    return {
        type : ORDER_BY_SCORE,
        payload,
    }
}

export function postActivity (payload){
    return async function(dispatch){
        var json = await axios.post(`http://localhost:3001/activity`,payload);
        return json
    }

}    





