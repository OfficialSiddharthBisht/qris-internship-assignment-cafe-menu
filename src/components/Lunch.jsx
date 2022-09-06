import React from 'react'
import items from '../data/dummyData'
function Lunch() {
  return (
    <div className='section-center'>
    {items.map((item) => {
      if(item.category === 'lunch') {
        return (
          <article key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="photo" />
            <div className='info'>
              <header>
                <h2>{item.title}</h2>
                <h4 className='price'>Rs {item.price * 100}</h4>
              </header>
              <p className='item-text'>
                {item.desc}
              </p>
            </div>
          </article>
        )
      }
  })}
  </div>
  )
}

export default Lunch