import { createContext, useState} from 'react';
import RowPost from '../RowContents/RowPost';
import { originals, action, horror, comedy, romance } from '../../urls';

export const context = createContext();

function Posts() {

  //state variables will have a key (a url key(string));
  const [originalsUrl, setOriginalsUrl] = useState(null);
  const [actionUrl, setActionUrl] = useState(null);
  const [horrorUrl, setHorrorUrl] = useState(null);
  const [comedyUrl, setComedyUrl] = useState(null);
  const [romanceUrl, setRomanceUrl] = useState(null);

  return (
    <>
      <context.Provider value={{setOriginalsUrl, setActionUrl, setHorrorUrl, setComedyUrl, setRomanceUrl}}>
        <RowPost title = {'Netflix Originals'} url = {originals} urlKey = {originalsUrl} setUrlKey = {setOriginalsUrl}/>
        <RowPost title = {'Action'} isSmall url = {action} urlKey = {actionUrl} setUrlKey = {setActionUrl}/>
        <RowPost title = {'Horror'} isSmall url = {horror} urlKey = {horrorUrl} setUrlKey = {setHorrorUrl}/>
        <RowPost title = {'Comedy'} isSmall url = {comedy} urlKey = {comedyUrl} setUrlKey = {setComedyUrl}/>
        <RowPost title = {'Romance'} isSmall url = {romance} urlKey = {romanceUrl} setUrlKey = {setRomanceUrl}/>
      </context.Provider>
    </>
  )
}

export default Posts