import React,{useState} from 'react'
import { useLocation, useMatch} from 'react-router-dom'
import { Form, Input, Button} from 'antd';
import {useCon} from '../Context/Context'
import {useNavigate} from 'react-router-dom'
import './edit.css'

function Edit() {

  

    const {books,setBooks} = useCon()
    const {people, setPeople} = useCon()
    const {films,setFilms} = useCon()

    
    const location = useLocation()
    const navigate = useNavigate()
    const match = useMatch('home/:list/edit')

    const [name, setName] = useState(location.state.title)
    const [first_name, setFirstName] = useState(location.state.first_name)
    const [author, setAuthor] = useState(location.state.author)
    const [year, setYear] = useState(location.state.year)
    const [Released, setReleased] = useState(location.state.Released)
    const [Title, setTitle] = useState(location.state.Title)
    const [country, setCountry] = useState(location.state.country)
    const [surname, setSurname] = useState(location.state.last_name)



    const editBook = () => {
        setBooks(books.map((itm) => itm.title === location.state.title ? {author, title:name, year} : itm))
        navigate(-1)
    }

     const editPeople = () => {
        setPeople(people.map((itm) => itm.first_name === location.state.first_name ? {first_name: first_name, last_name: surname, country} : itm))
        navigate(-1)
    }

    const editFilms = () => {
        setFilms(films.map((itm) => itm.Title === location.state.Title ? {Title: Title, Released: Released} : itm))
        navigate(-1)
    }

    return (
        <div className="editCont">
            <Form>

       {match.params.list === 'osobe' ? <> 
            <Form.Item label="Ime" className="editItm">
        <Input placeholder="Ime" defaultValue={location.state.first_name} onChange={(e) => setFirstName(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Prezime" className="editItm">
        <Input placeholder="Prezime" defaultValue={location.state.last_name} onChange={(e) => setSurname(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Drzava" className="editItm">
        <Input placeholder="Drzava" defaultValue={location.state.country} onChange={(e) => setCountry(e.target.value)}/>
      </Form.Item>
      <Form.Item >
        <Button type="primary" style={{width:"100%", cursor:"pointer", marginTop:'1em'}} onClick={() => editPeople()}>Submit</Button>
        <Button type="primary" style={{width:"100%", cursor:"pointer", marginTop:'1em'}} onClick={() => navigate(-1)}>Cancel</Button>
      </Form.Item>
       </> : ''}

       {match.params.list === 'filmovi' ? <> 
     <Form.Item label="Naziv filma" className="editItm">
        <Input placeholder="Naziv" defaultValue={location.state.Title} onChange={(e) => setTitle(e.target.value)}/>
      </Form.Item>

      <Form.Item label="Godina" className="editItm">
        <Input placeholder="Godina" defaultValue={location.state.Released} onChange={(e) => setReleased(e.target.value)}/>
      </Form.Item>

      <Form.Item >
        <Button type="primary" style={{width:"100%", cursor:"pointer", marginTop:'1em'}} onClick={() => editFilms()}>Submit</Button>
        <Button type="primary" style={{width:"100%", cursor:"pointer", marginTop:'1em'}} onClick={() => navigate(-1)}>Cancel</Button>
      </Form.Item>
       </> : ''}

       {match.params.list === 'knjige' ? <> 
     <Form.Item label="Naziv" className="editItm">
        <Input placeholder="Naziv" defaultValue={location.state.title} onChange={(e) => setName(e.target.value)}/>
      </Form.Item>

      <Form.Item label="Autor" className="editItm">
        <Input placeholder="Autor" defaultValue={location.state.author} onChange={(e) => setAuthor(e.target.value)}/>
      </Form.Item>
        

      <Form.Item label="Godina" className="editItm">
        <Input placeholder="Godina" defaultValue={location.state.year} onChange={(e) => setYear(e.target.value)}/>
      </Form.Item>

      <Form.Item >
        <Button type="primary" style={{width:"100%", cursor:"pointer", marginTop:'1em'}} onClick={() =>editBook()}>Submit</Button>
        <Button type="primary" style={{width:"100%", cursor:"pointer", marginTop:'1em'}} onClick={() => navigate(-1)}>Cancel</Button>
      </Form.Item>
       </> : ''}
      
    </Form>
        </div>
    )
}

export default Edit
