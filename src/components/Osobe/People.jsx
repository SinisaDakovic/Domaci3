import React from 'react'
import {Link} from 'react-router-dom'
import { useCon } from '../Context/Context'
import {useNavigate} from 'react-router-dom'
import '../tabele.css'

function People() {

    const navigate = useNavigate()

   const {people, setPeople} = useCon()

    const deleteItem = (osoba) => {

        let newArray = people.filter((prsn) => prsn.id !== osoba.id)
        setPeople(newArray)

    }

    const edit = (osb) => {
        navigate('edit',{state: osb})
    }

    return (
         <div className="tableList">
              <Link to="add" className="addBtn">Add item</Link>
            <table className="tabela">
                <tbody>

                <tr>
                    <td>ID</td>
                    <td>Ime</td>
                    <td>Prezime</td>
                    <td>Drzava</td>
                </tr>
                {people.map((osoba,id) => {
                    return (<>
                    <div>
                        <button className="deleteBtn" onClick={(e) => deleteItem(osoba)}>Delete</button>
                  </div>
                        <tr key={id} onClick={() => edit(osoba)} className="tr">
                            <td>{id}</td>
                            <td>{osoba.first_name}</td>
                            <td>{osoba.last_name}</td>
                            <td>{osoba.country}</td>
                        </tr>
                        </>
                    )
                })}

                </tbody>
            </table>
        </div>
    )
}

export default People
