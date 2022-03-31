import React from 'react'
import {Link} from 'react-router-dom'
import { useCon } from '../Context/Context'
import {useNavigate} from 'react-router-dom'
import '../tabele.css'

function Books() {

    const navigate = useNavigate()

    const {books, setBooks} = useCon()

     const deleteItem = (knjiga) => {

        let newArray = books.filter((book) => book.title !== knjiga.title)
        setBooks(newArray)

    }

     const edit = (knjg) => {
        navigate('edit',{state: knjg})
    }

    return (
        <div className="tableList">
           <Link to="add" className="addBtn">Add item</Link>
            <table className="tabela">
              <tbody>

                <tr>
                    <td>ID</td>
                    <td>Naziv</td>
                    <td>Autor</td>
                    <td>Godina</td>
                </tr>
                {books.map((knjiga,id) => {
                  return (<>
                  <div>
                        <button className="deleteBtn" onClick={(e) => deleteItem(knjiga)}>Delete</button>
                  </div>
                        <tr key={id} onClick={() => edit(knjiga)} className="tr">
                            <td>{id}</td>
                            <td>{knjiga.title}</td>
                            <td>{knjiga.author}</td>
                            <td>{knjiga.year}</td>
                        </tr>
                        </>
                    )
                  })}
                  </tbody>

            </table>
        </div>
    )
}

export default Books
