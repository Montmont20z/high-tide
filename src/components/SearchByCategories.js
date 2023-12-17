import react from 'react'
import CategoriesItem from './CategoriesItem'
import outwear from '../images/outwear.jpg'
import shirt_blouse from '../images/shirt&blouses.webp'
import sweater from '../images/sweaters.webp'
import tshirt from '../images/t-shirt.webp'
import jeans from '../images/jeans.webp'
import longpants from '../images/longpants.webp'
import dresses from '../images/dresses.webp'
import loungewear from '../images/loungewear.jpeg'

export default function SearchByCategories(){
    const data = [
        {image:outwear, text:'Outwear'}, 
        {image:shirt_blouse, text:'Shirt & Blouses'}, 
        {image:sweater, text:'Sweaters'}, 
        {image:tshirt, text:'T-Shirts'}, 
        {image:jeans, text:'Jeans'}, 
        {image:longpants, text:'Long Pants'},
        {image:dresses, text:'Dresses'}, 
        {image:loungewear, text:'Lounge Wear'}
    ]

    const elements = data.map(item => {
        return <CategoriesItem images={item.image} text={item.text} />
    })

    return (
        <div className="SearchByCategories">
            <h1 className='SearchByCategories-title'>Seach By Category</h1>
            <div className="SearchByCategories-table">
                {elements}
            </div>
        </div>
    )
}