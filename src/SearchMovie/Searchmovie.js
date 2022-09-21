import React,{useState} from 'react'
import {Formik,Field,Form} from "formik";
import {v4 as uuidv4} from "uuid";

function Searchmovie() {
    const [movieValue,setMovieValue] = useState("");
    const [movieData,setMovieData] = useState([
        {
            id:1,
            title:"Kapı",
            img:"https://upload.wikimedia.org/wikipedia/tr/9/94/Kap%C4%B1_film_afi%C5%9Fi.jpg",
            description:"This description belongs to the door film."
        },
        {
            id:2,
            title:"The Matrix",
            img:"https://productimages.hepsiburada.net/s/40/1500/10675433766962.jpg",
            description:"This description belongs to the The Matrix film."
        },
        {
            id:3,
            title:"Lord of War",
            img:"https://img-s1.onedio.com/id-52d7c61f43516df043000070/rev-0/w-620/f-jpg/s-2f82f0a673b7a26228aade083807fa2800247095.jpg",
            description:"This description belongs to the Lord of War film."

        },
        {
            id:4,
            title:"Star Wars",
            img:"https://productimages.hepsiburada.net/s/59/1500/110000000103782.jpg",
            description:"This description belongs to the Star Wars film."
        },
        {
            id:5,
            title:"Black Swan",
            img:"https://galeri13.uludagsozluk.com/661/en-iyi-film-afisleri_1201649.jpg",
            description:"This description belongs to the Black Swan film."
        },
        
    ]);
    const filteredMovie = movieData.filter((item)=>{
            return Object.keys(item).some((key)=>
            item[key].toString().toLowerCase().includes(movieValue.toLowerCase())
            )
        })
    const filmDelete = (id)=>{
        const cloned_films = [...movieData];
        const filmIndex = cloned_films.findIndex((film)=>film.id===id);
        cloned_films.splice(filmIndex,1);
        setMovieData(cloned_films);
    }    
    

   return (
    <div>
        <div className='searchbar'>
            <div className='formik-form'>
            <Formik
            initialValues={{
                filmname: '',
                filmpicture:"",
                filmdescription:""
                }}
                onSubmit={(values,bag) => {
                setMovieData(()=>[...movieData,{id:uuidv4(),title:values.filmdescription,img:values.filmpicture,description:values.filmdescription}]);
                bag.resetForm();
            }}>
            <Form>
                <h2>Add a Movie :)</h2>
                
                <Field className="field-input" name="filmname" placeholder="Enter a film name"/>
                <Field className="field-input" name="filmpicture" placeholder="Enter a film picture"/>
                <Field className="field-input" name="filmdescription" placeholder="Enter a film description"/>
                <button className='add-btn' type='submit'>Add</button>
            </Form>
            </Formik>
            </div>
            <div className='main-searchbar'>
                <input placeholder='Search movie..' value={movieValue} onChange={(e)=>setMovieValue(e.target.value)}/>
            </div>
           
        </div>
        <h2>Movies</h2>
        <div className='main-movie'>
            
            <div className='main-boxs'>
                {filteredMovie.length===0 && 
                <>
                
                <p className='not-found'>No Found Result</p>
                <img src='https://cdn.pixabay.com/photo/2020/09/22/14/55/sad-emoji-5593352_960_720.png' 
                style={{width:"100px",height:"100px",marginLeft:"20px"}}
                alt='Sad Emote'/>
                </>}
               {
                filteredMovie.map((movie)=>{
                    return(
                        <div className='boxs'>
                        <img src={movie.img} alt='Korkunç bir film'/>
                        
                        <div className='movie-info'>
                        
                            <span className='movie-info-title'>{movie.title}</span>
                            <p className='movie-info-text'>{movie.description}</p></div>
                            <a className='delete-btn' onClick={()=>filmDelete(movie.id)}>Delete</a><br/><br/>  
                        </div>
                       
                        
                    )
                })
                
               }
             
            </div>

        </div>
    </div>
  )
}

export default Searchmovie;