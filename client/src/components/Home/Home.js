import React from 'react';

import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect, useState } from 'react';
import {getCountries, filterByContinent, orderByName, orderByScore,getActivity, filterByActivity} from  '../../actions';
import {Link} from 'react-router-dom';

import Card from '../Card/Card';
import Paged from '../Paged/Paged';
import SearchBar from '../SearchBar/SearchBar';

import styles from './Home.module.css';


  export default function Home(){
         


//me creo una constante para ir despachando las acciones a mi store
    const dispatch= useDispatch();

    //me creo una constante para traerme todo lo que esta en el estado de countries (mapStateToProps)
    const allCountries = useSelector(state => state.countries);
    const allActivities = useSelector(state => state.allActivity);
//console.log('lo que me trae el estado countries',allCountries)
    //traerme del estado,  countries cuando el componente se monta
    //despacho la accion invocada (mapDispatchToProps)
    

    
   //el [] es para que se ejecute solo una vez 
   //el [dispatch] es para que se ejecute cada vez que se haga un dispatch
   
   
     const[order,setOrder] =useState('') 
     const[orderScore,setOrderScore] =useState('')
     const[currentPage, setCurrentPage] = useState(1);
     const[countriesPerPage, setCountriesPerPage] = useState(10);
     const lastCountry = currentPage * countriesPerPage;
     const firstCountry = lastCountry - countriesPerPage;
     const currentCountries = allCountries?.slice(firstCountry, lastCountry);
     //console.log('que me trae el currentCountries',currentCountries);
     //console.log('que me trae firt',lastCountry);

     const paged = (pageNumber) => {
            setCurrentPage(pageNumber);
        }
        useEffect(()=>{
            dispatch(getCountries());
            dispatch(getActivity());
        },[dispatch]);

   function handleClick(e){
       e.preventDefault();
       dispatch(getCountries());
       
   }

   function handleFilterContinent(e){
         e.preventDefault();
         dispatch(filterByContinent(e.target.value));
         

   }
   

   function handleSortName(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
}

function handleSortScore(e){
    e.preventDefault();
    dispatch(orderByScore(e.target.value))
    //para que me setee esa pagina en 1
    setCurrentPage(1);
    //me modifique el estado local y se renderice
    setOrderScore(`Ordenado ${e.target.value}`)
}

function handleFilterActivity(e){
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
    

}




    return(
        <div className={styles.home}>
            <Link to="/activity">
                <button className={styles.create}>Create Activity</button>
            </Link>

            <div><h1>Countries</h1></div>

 <button onClick={e=> handleClick(e)}>Volver a cargar Countries</button>

<div>
<label>Selecciona un Continente: </label>
    <select onChange={(e)=>{handleFilterContinent(e)}} className={styles.select} >
    <option value="All">All</option>
    <option value="Europe">Europe</option>
    <option value="Americas">America</option>
    <option value="Asia">Asia</option>
    <option value="Oceania">Oceania</option>
    <option value="Africa">Africa</option>
    </select>
</div>

<div>
    <select onChange={e=>handleSortScore(e)} className={styles.select}>
    <option value="">Ordenar por Poblacion</option>
    <option value="population(men-may)">Poblacion de menor a mayor</option>
    <option value="population(may-men)">Poblacion de mayor a menor</option>
    </select>
</div>

<div>
    <select  onChange={e=>handleSortName(e) } className={styles.select}>
    <option value="">Ordenar por Orden Alfabetico</option>
    <option value="asc(a-z)"> Por orden alfabetico ascendente</option>
    <option value="desc(z-a)">Por orden alfabetico descendente</option> 
    </select>
</div>
        <div>
        <label>Selecciona una Actividad: </label>

                 
                    
                    <select  onChange={e=>handleFilterActivity(e)}>
                <option value=''></option>
                {allActivities?.length &&
                    allActivities.map(a=>{return(
                        <option key={a.id} value={a.name}>{a.name}</option>
                    )})

                    } 
                </select>
        
        </div>

<div className={styles.paginado} >
        <Paged countriesPerPage={countriesPerPage} 
        allCountries={allCountries?.length}
        paged={paged}/>

        </div>

        
        <div>
        <SearchBar />
        </div>

<div className={styles.cards}>
{
 currentCountries?.map((el) => {
            return(
                
            
                <Link to={'/home/' + el.id}>
                <Card  flag={el.flag} name={el.name} continent={el.continent} key={el.id}/>
                </Link>
                
                
            );})} 
            </div>

            
</div>

    )
        }
        

  


    
    


