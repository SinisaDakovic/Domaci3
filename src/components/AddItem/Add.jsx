import React,{useState} from 'react'
import { Form, Input, Button } from 'antd';
import './add.css'
import { useCon } from '../Context/Context';
import {useNavigate, useMatch} from 'react-router-dom'

function Add() {

    const navigate = useNavigate()

    const {setBooks} = useCon()
    const {people, setPeople} = useCon()
    const {setFilms} = useCon()
    
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [year, setYear] = useState('')
    const [country, setCountry] = useState('')
    const [surname, setSurname] = useState('')

   const match = useMatch('home/:list/add')

   const addingBooks = () => {
       setBooks((prev) => [...prev,{author, title:name, year}])
       navigate(-1)
   }

   const addingFilms = () => {
       setFilms((prev) => [...prev,{Title:name, Released: year}])
       navigate(-1)
   }

   const addingPeople = () => {
       setPeople((prev) => [...prev,{id: people.length + 1,first_name:name, last_name: surname, country}])
       navigate(-1)
   }

    return (
    
        <div className="formAdd">
     <Form
      layout="vertical"
    >
    {match.params.list === "knjige" ? <>
      <Form.Item label="Naziv" required className="formItm">
        <Input placeholder="The Stranger" onChange={(e) => setName(e.target.value)}/>
      </Form.Item>
      <Form.Item
      label="Autor"
      className="formItm"
      >
        <Input placeholder="Albert Camus" onChange={(e) => setAuthor(e.target.value)}/>
      </Form.Item>
        <Form.Item
        className="formItm"
        label="Godina"
        >
        <Input placeholder="1942" type="number" onChange={(e) => setYear(e.target.value)}/>
      </Form.Item>
      <Form.Item >
        <Button type="primary" style={{width:"100%", marginTop:"1em"}} onClick={() => addingBooks()}>Add</Button>
        <Button type="primary" style={{width:"100%", cursor:"pointer", marginTop:'1em'}} onClick={() => navigate(-1)}>Cancel</Button>
      </Form.Item>
            </> : ''}


        {match.params.list === "filmovi" ? <>

        <Form.Item label="Naziv filma" required className="formItm">
        <Input placeholder="Interstellar" onChange={(e) => setName(e.target.value)}/>
      </Form.Item>

        <Form.Item
        className="formItm"
        label="Godina"
        >
        <Input placeholder="2003" type="number" onChange={(e) => setYear(e.target.value)}/>
      </Form.Item>
        <Form.Item >
        <Button type="primary" style={{width:"100%", marginTop:"1em"}} onClick={() => addingFilms()}>Add</Button>
        <Button type="primary" style={{width:"100%", cursor:"pointer", marginTop:'1em'}} onClick={() => navigate(-1)}>Cancel</Button>
      </Form.Item>
        </> : ''}

        {match.params.list === "osobe" ? <>
            <Form.Item label="Ime" required className="formItm">
        <Input placeholder="John" onChange={(e) => setName(e.target.value)}/>
      </Form.Item>
      <Form.Item
      label="Prezime"
      className="formItm"
      >
        <Input placeholder="Doe" onChange={(e) => setSurname(e.target.value)}/>
      </Form.Item>
        <Form.Item
        className="formItm"
        label="Drzava"
        >
        <Input placeholder="Montenegro" onChange={(e) => setCountry(e.target.value)}/>
      </Form.Item>
      <Form.Item >
        <Button type="primary" style={{width:"100%", marginTop:"1em"}} onClick={() => addingPeople()}>Add</Button>
        <Button type="primary" style={{width:"100%", cursor:"pointer", marginTop:'1em'}} onClick={() => navigate(-1)}>Cancel</Button>
      </Form.Item>
        </> : ''}

      
    </Form>
        </div>
    )
}

export default Add
