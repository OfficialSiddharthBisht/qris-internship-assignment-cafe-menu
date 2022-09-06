import React from "react";
import items from '../data/dummyData';
import logo from "../logo.jpg";

// since we don't have have all in the name of categories we set from here
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Home = () => {
    const [menuItems, setMenuItems] = React.useState(items);
    const [activeCategory, setActiveCategory] = React.useState("");
    const [categories, setCategories] = React.useState(allCategories);

    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }
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