
 export const initialState = {
    countries: [],
    
    allCountries: [],
    details: [],
    activity: [],
    allActivity: [],
}
// console.log('esto es el estado countries',initialState.countries)
// console.log('esto es el estado activity',initialState.activity)

function rootReducer(state=initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                //a mi estado countries que al inicio esta vacio, mandale todo lo que me trae la accion GET_COUNTRIES
            }

        case 'GET_COUNTRIES_BY_NAME':
            return {
                ...state,
                countries: action.payload,
                }

                case 'GET_COUNTRIES_BY_ID':
            return {
                ...state,
                details: action.payload,
            }

            case 'FILTER_BY_CONTINENT':
                    const allCountry= state.allCountries;
                const filterContinent = action.payload === 'All' ? allCountry : allCountry.filter(country => country.continent === action.payload);
            return {
                ...state,
                countries: filterContinent,
            }

            case 'GET_ACTIVITY':
             
             return{
                    ...state,
                    activity: action.payload,
                    allActivity: action.payload,
             }

            

             case 'FILTER_BY_ACTIVITY':
                    const allActivity= state.allActivity;
                    
                    const filterActivity= allActivity?.filter(country => country.name === action.payload);
                    
                    
                    console.log('esto es el estado activity',filterActivity)
            return {
                ...state,
                activity:filterActivity,
        }

            case 'ORDER_BY_NAME' :
            let order = action.payload === 'asc(a-z)' ? 
            state.countries?.sort(function(a,b) {
                
                if(a.name> b.name) {
                  
                    return 1;
                }
                if( b.name > a.name){
                    return -1;
                }
                return 0;
            }) : 
            state.countries?.sort(function(a,b) {
                if(a.name > b.name) {
                    return -1;
                }
                if( b.name > a.name){
                    return 1;
                }
                return 0;
            })
            return{
                ...state ,
                countries : order

        }

        case 'ORDER_BY_SCORE':
            let orderScore = action.payload === 'population(men-may)' ?
            state.countries.sort(function(a, b){
                if(a.population > b.population) {
                  
                    return 1;
                }
                if( b.population > a.population){
                    return -1;
                }
                return 0;
            }) : 
            state.countries.sort(function(a,b) {
                if(a.population > b.population) {
                    return -1;
                }
                if( b.population > a.population){
                    return 1;
                }
                return 0;
            })
            return{
                ...state ,
                countries : orderScore

        }
                
            
            


            

            

            

            case 'POST_ACTIVITY':
            return {
                ...state,
                
            }   

        default:
            return state;
    }
}   
// case 'FILTER_BY_TYPES':
// 			const allPokemons = state.allPokemons;
// 			const typesFilter = action.payload ==='All'? allPokemons 
// 			: allPokemons?.filter(pok => pok.types.includes(action.payload)			
// 			);
// 			return {
// 				...state,
// 				pokemons: typesFilter
// 			}

export default rootReducer;