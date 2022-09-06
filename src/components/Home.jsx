import React from "react";
import items from '../data/dummyData';

const Home = () => {
    return (
        <div>
            <div className='section-center'>
                {items.map((item) => {
                        return (
                            <article key={item.id} className="menu-item">
                                <img src={item.img} alt={item.title} className="photo" />
                                <div className='info'>
                                    <header>
                                        <h2>{item.title}</h2>
                                        <h4 className='price'>Rs {parseInt(item.price * 100)}</h4>
                                    </header>
                                    <p className='item-text'>
                                        {item.desc}
                                    </p>
                                </div>
                            </article>
                        )
                    }
                )}
            </div>
        </div>

    )
}

export default Home;