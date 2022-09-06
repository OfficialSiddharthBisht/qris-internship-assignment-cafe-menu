import React from 'react'

function Menu({items}) {
  return (
    <div className='section-center'>
        {items.map((item)=>{
            return(
                <article key = {item.id} className = "menu-item">
                    <img src={item.img} alt={item.title} className = "photo" />
                    <div className='info'>
                        <header>
                            <h2>{item.title}</h2>
                            <h4 className='price'>{item.price}</h4>
                        </header>
                        <p className='item-text'>
                            {item.desc}
                        </p>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default Menu