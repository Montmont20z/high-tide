import react from 'react'


export default function CategoriesItem(props){


    return (
        <div className='SearchByCategories-cell'>
            <img src={props.images} className='SearchByCategories-image' alt=""/>
            <p className='SearchByCategories-text' >{props.text}</p>
        </div>
    )
}