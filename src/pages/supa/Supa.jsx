import supabase from "../../config/supabase";
import { useEffect, useState } from "react";
import '../../css/supa.css'
import { Link } from "react-router-dom";
import SupaItem from "./SupaItem";


export default function Supa() {
  const [movies, setMovies] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=> {
    const fetchData = async () => {
      const { data, error } = await supabase.from('movies').select()
      if(error) setError('데이타를 가져올 수 없습니다.')
      if(data) setMovies(data)
    }

    fetchData()    
  }, [])

  function onRemove(id) {
    setMovies(pre => pre.filter(p => p.id !== id))
  }


  return (
    <>
      {error && <h2>데이타를 가져올 수 없습니다.</h2> }
      <Link className="write_btn" to={'/supawrite'}>Write</Link>
      {movies && (
        <div className="movies_list">
          {movies.map(movie => <SupaItem key={movie.id} movie={movie} onRemove={onRemove} /> )}
        </div>
      )}
        
    </>
  )
}
 