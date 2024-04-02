import './RowPost.css';
import axios from '../../axios';
import YouTube from 'react-youtube';
import { useContext, useEffect, useState } from 'react';
import { API_KEY, image_URL } from '../../constants/constants';
import {context} from '../Posts/Posts.jsx';

function RowPost(props) {

  const {urlKey, setUrlKey, title, isSmall, url} = props;

  const {setOriginalsUrl, setActionUrl, setHorrorUrl, setComedyUrl, setRomanceUrl} = useContext(context);

  const [movies, setMovies] = useState([]);

  useEffect(() => {    

   const fetchData = async () => {
      try {
        const response = await axios.get (url);
        const results = response.data.results;
        setMovies(results)
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
   }

   fetchData();

  }, []);
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {     
      autoplay: 1,
    },
  }

  const removeAllUrls = () => {
    setOriginalsUrl (null);
    setActionUrl (null);
    setHorrorUrl (null);
    setComedyUrl (null);
    setRomanceUrl (null);
  }

  const handleClick  = (id) => {

    const fetchData = async () => {
      try {
        console.log(id);
        const response = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);

        if (response.data.results.length !== 0) {
          removeAllUrls();
          setUrlKey(response.data.results[0].key);
        }
        
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }



  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='posters'>           
            {
              movies.map ((movie, index) => {
                return <img key={index} onClick={() => handleClick(movie.id)} className = {isSmall ? 'smallPoster' : 'poster'} src={image_URL + movie.backdrop_path} alt="posts" />
              })
            }
        </div>
        {urlKey && <YouTube opts={opts} videoId = {urlKey} />}
    </div>
  )

}

export default RowPost