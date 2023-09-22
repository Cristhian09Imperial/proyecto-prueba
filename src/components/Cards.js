import React from 'react'
import Card from './Card';
import image1 from "../assets/imagen.jpg"
import image2 from "../assets/imagen2.jpg"
import image3 from "../assets/imagen4.jpg"

const cards = [
  {
    id: 1,
    title: 'Pelicula 1',
    image: image1,
    instructor:"Benito Samuel Lopez Razo"
  },
  {
    id: 2,
    title: 'Pelicula 2',
    image: image2,
    instructor: "Brandon Viveros Gutierrez"
  },
  {
    id: 3,
    title: 'Pelicula 3',
    image: image3,
    instructor: "Juan Carlos Jimenez Hernandez"
  }
]


export default function Cards() {
  console.log()
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className='row'>
        {
        cards.map(c => (
          <div className='col-md-4' key={cards.id}>
            <Card
            key = {c.id}
            id = {c.id}
            title = {c.title}
            image = {c.image}
            instructor = {c.instructor}
          />
        </div>
        ))

      } 
      </div>
      </div>
  );
}
