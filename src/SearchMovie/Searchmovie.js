import React,{useState} from 'react'

function Searchmovie() {
    const [movieValue,setMovieValue] = useState("");
    const [movieData] = useState([
        {
            title:"Kapı",
            img:"https://upload.wikimedia.org/wikipedia/tr/9/94/Kap%C4%B1_film_afi%C5%9Fi.jpg",
            description:"This description belongs to the door film."
        },
        {
            title:"The Matrix",
            img:"https://productimages.hepsiburada.net/s/40/1500/10675433766962.jpg",
            description:"This description belongs to the The Matrix film."
        },
        {
            title:"Lord of War",
            img:"https://img-s1.onedio.com/id-52d7c61f43516df043000070/rev-0/w-620/f-jpg/s-2f82f0a673b7a26228aade083807fa2800247095.jpg",
            description:"This description belongs to the Lord of War film."

        },
        {
            title:"Star Wars",
            img:"https://productimages.hepsiburada.net/s/59/1500/110000000103782.jpg",
            description:"This description belongs to the Star Wars film."
        },
        {
            title:"Black Swan",
            img:"https://galeri13.uludagsozluk.com/661/en-iyi-film-afisleri_1201649.jpg",
            description:"This description belongs to the Black Swan film."
        },
        {
            title:"Dark",
            img:"https://images.bursadabugun.com/galeriler/2017/12/27/44693-2017-de-en-cok-konusulan-film-afisleri-5a4393cb4fef6.jpg",
            description:"This description belongs to the Dark film."
        },
        {
            title:"The Dark Night",
            img:"https://i.pinimg.com/736x/30/02/fa/3002fad6e01c4beda09da1cc5764d51a.jpg",
            description:"This description belongs to the The Dark Night film."
        },
        {
            title:"Titanic",
            img:"https://i.pinimg.com/550x/8b/f4/67/8bf467baf3aaf4e4f4e5863c9c24e970.jpg",
            description:"This description belongs to the Titanic film."
        }
        ,
        {
            title:"Shutter Island",
            img:"https://img-s1.onedio.com/id-52d7c61f43516df043000073/rev-0/w-620/f-jpg/s-3a03cf2abdd9e875d8436259447d37ed01a32fa3.jpg",
            description:"This description belongs to the Shutter Island film."
        },
        {
            title:"Outlander",
            img:"https://static.boxofficeturkiye.com/movie//poster/full/63/2010063-284290983.jpg",
            description:"This description belongs to the Outlander film."

        }
    ]);
    const filteredMovie = movieData.filter((item)=>{
            return Object.keys(item).some((key)=>
            item[key].toString().toLowerCase().includes(movieValue.toLowerCase())
            )
        })
    

   return (
    <div>
        <div className='searchbar'>
            <div className='main-searchbar'>
                <h2>Search Movie</h2>
                <input placeholder='Search movie..' onChange={(e)=>setMovieValue(e.target.value)}/>
                
            </div>

        </div>
        <div className='main-movie'>
            
            <div className='main-boxs'>
                {filteredMovie.length===0 && 
                <>
                
                <p className='not-found'>No Found Result</p>
                <img src='https://cdn.pixabay.com/photo/2020/09/22/14/55/sad-emoji-5593352_960_720.png' style={{width:"100px",height:"100px",marginLeft:"20px"}}alt='Sad Emote'/><br/>
                </>}
               {
                filteredMovie.map((movie)=>{
                    return(
                        <div className='boxs'>
                        <img src={movie.img} alt='Korkunç bir film'/>
                        <div className='movie-info'>
                            <span className='movie-info-title'>{movie.title}</span>
                            <p className='movie-info-text'>{movie.description}</p></div>
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