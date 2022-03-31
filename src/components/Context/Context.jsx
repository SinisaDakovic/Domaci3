import React, { useContext, useState } from 'react'

const dataContext = React.createContext()

export default function Context({children}){

 const [books, setBooks] = useState([

  {
    author: "Chinua Achebe",
    title: "Things Fall Apart",
    year: 1958
  },
  {
    author: "Hans Christian Andersen",
    title: "Fairy tales",
    year: 1836
  },
  {
    author: "Dante Alighieri",
    title: "The Divine Comedy",
    year: 1315
  },
  {
    author: "Unknown",
    title: "The Epic Of Gilgamesh",
    year: -1700
  },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    year: 1813
  },
  {
    author: "Honor\u00e9 de Balzac",
    title: "Le P\u00e8re Goriot",
    year: 1835
  },
  {
    author: "Samuel Beckett",
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    year: 1952
  },
  {
    author: "Giovanni Boccaccio",
    title: "The Decameron",
    year: 1351
  },
  {
    author: "Jorge Luis Borges",
    title: "Ficciones",
    year: 1965
  },
  {
    author: "Emily Bront",
    title: "Wuthering Heights",
    year: 1847
  }
])


    const [films, setFilms] = useState(
        [
  {
    Title: "Avatar",
    Released: "18 Dec 2009"
  },
  {
    Title: "I Am Legend",
    Released: "14 Dec 2007"
  },
  {
    Title: "300",
    Released: "09 Mar 2007"
  },
  {
    Title: "The Avengers",
    Released: "04 May 2012"
  },
  {
    Title: "The Wolf of Wall Street",
    Released: "25 Dec 2013"
  },
  {
    Title: "Interstellar",
    Released: "07 Nov 2014",
  },
  {
    Title: "Game of Thrones",
    Released: "17 Apr 2011"
  },
  {
    Title: "Vikings",
    Released: "03 Mar 2013"
  },
  {
    Title: "Gotham",
    Released: "01 Aug 2014"
  },
  {
    Title: "Power",
    Released: "N/A"
  },
  {
    Title: "Narcos",
    Released: "28 Aug 2015"
  }

]
    )


     const [people, setPeople] = useState([
{id:1,first_name:"Gary",last_name:"Ortiz",country:"Indonesia"},
{id:2,first_name:"Albert",last_name:"Williamson",country:"China"},
{id:3,first_name:"Mildred",last_name:"Fuller",country:"Peru"},
{id:4,first_name:"Russell",last_name:"Robinson",country:"Belarus"},
{id:5,first_name:"Laura",last_name:"Harper",country:"Philippines"},
{id:6,first_name:"Larry",last_name:"Sanders",country:"China"},
{id:7,first_name:"Michael",last_name:"Rice",country:"Philippines"},
{id:8,first_name:"Sara",last_name:"Harris",country:"Indonesia"},
{id:9,first_name:"Phyllis",last_name:"Webb",country:"China"},
{id:10,first_name:"Roger",last_name:"Alvarez",country:"Finland"}

    ])

    return(
        <dataContext.Provider value={{books, setBooks, films, setFilms, people, setPeople}}>
            {children}
        </dataContext.Provider>
    )

}

export const useCon = () => {
    return useContext(dataContext)
}