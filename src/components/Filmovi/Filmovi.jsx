import React from 'react'
import { Link } from 'react-router-dom'
import { useCon } from '../Context/Context'
import {useNavigate} from 'react-router-dom'
import '../tabele.css'

function Filmovi() {

    const navigate = useNavigate()

  const {films,setFilms} = useCon()

  const deleteItem = (film) => {

        let newArray = films.filter((flm) => flm.Title !== film.Title)
        setFilms(newArray)

    }

    const edit = (flm) => {
        navigate('edit',{state: flm})
    }

    return (
        <div className="tableList">
          <Link to="add" className="addBtn">Add item</Link>
            <table className="tabela">
              <tbody>

                <tr>
                    <td>ID</td>
                    <td>Naziv filma</td>
                    <td>Godina</td>
                </tr>
                {films.map((film,id) => {
                  return (<>
                  <div>
                        <button className="deleteBtn" onClick={(e) => deleteItem(film)}>Delete</button>
                  </div>
                    <tr key={id} onClick={() => edit(film)} className="tr">
                            <td>{id}</td>
                            <td>{film.Title}</td>
                            <td>{film.Released}</td>
                        </tr>
                        </>
                    )
                  })}
                  </tbody>
            </table>
        </div>
    )
}

export default Filmovi
