import './App.css';
import { useState,useEffect } from 'react';
import { Auth } from './components/auth';
import {db} from "./config/firebase"
import { getDocs,collection,addDoc,deleteDoc,doc,updateDoc } from 'firebase/firestore';

function App() {

  const [movieList,setMovieList] =useState ([])

  const moviesCollectionRef = collection(db,"movies")


  const getMovieList = async ()=>{
    //Read the Data
    //Set the Movie List

try {
  const data = await getDocs(moviesCollectionRef)
  const filteredData = data.docs.map((doc)=>({...doc.data(),id:doc.id}))
  setMovieList(filteredData)
  console.log(filteredData)
} catch (error) {
  console.error(error)
}


  }






useEffect(() => {

  getMovieList()
  
  },[]);


  // Set New Movie States
  const [newMovieName,setNewMovieName] =useState ("")
  const [newReleaseDate,setNewReleaseDate] =useState (0)
  const [isNewMovieOscar,setIsNewMovieOscar] =useState (false)

  const submitMovie = async ()=>{
try {
  await addDoc(moviesCollectionRef,{
    movie: newMovieName,
    ReleaseDate:newReleaseDate,
    RecievedAnOscar: isNewMovieOscar})
    getMovieList()
} catch (error) {
  console.error(error)
}


  }



  const deleteMovie = async (id)=>{
  
      const movieDoc = doc(db, "movies",id)
      await deleteDoc(movieDoc)

    
    
      }

const [UpdateMovieTitle,setUpdateMovieTitle] = useState("")
const [UpdateReleaseDate,setUpdateReleaseDate] = useState("")
const [UpdateMovieOscar,setUpdateMovieOscar] =useState (false)
      const UpdateMovie = async (id)=>{
  
        const movieDoc = doc(db, "movies",id)
        await updateDoc(movieDoc,{
          movie:UpdateMovieTitle,
          ReleaseDate:UpdateReleaseDate,
          RecievedAnOscar: UpdateMovieOscar
        })
  
      
      
        }

  
  return (
    <>
   <Auth/>


   <div>
<div style={{width:"13%",margin: '0 auto'}}>
    <input type='text' placeholder='Movie' onChange={(e)=>setNewMovieName(e.target.value)}/><br/>
    <input type='number' placeholder='Date' onChange={(e)=>setNewReleaseDate(Number(e.target.value))}/><br/>
    <input type="checkbox"  checked={isNewMovieOscar} onChange={(e)=>setIsNewMovieOscar(e.target.checked)}/>
    <label>Recieved an Oscar</label><br/>
    <button onClick={submitMovie}>Submit Movie</button><br/>
    </div>
    {
      movieList.map((mov)=>{
    return    <div key={mov.id} style={{textAlign:"center"}}>
          <h1 style={{color:mov.RecievedAnOscar?"green":"red"}}>{mov.movie}</h1>
          <p>Date: {mov.ReleaseDate}</p>
          <button onClick={()=>deleteMovie(mov.id)}>Delete Movie</button>

<br/>
          <input type='text' placeholder=' Update Movie Title' onChange={(e)=>setUpdateMovieTitle(e.target.value)}/>
          <input type='number' placeholder=' Update Date' onChange={(e)=>setUpdateReleaseDate(Number(e.target.value))}/>
           <input type="checkbox"  checked={UpdateMovieOscar} onChange={(e)=>setUpdateMovieOscar(e.target.checked)}/>Is Oscar
          <button onClick={()=>UpdateMovie(mov.id)}>Update Movie</button><br/>


   


        </div>
      })
    }
   </div>
    
    
    </>
  );



}

export default App;
