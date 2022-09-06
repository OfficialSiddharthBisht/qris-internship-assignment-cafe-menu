import React from "react";
import Menu from './Menu';
import Categories from './Categories';
import items from '../data/dummyData';
import logo from "../logo.jpg";

// since we don't have have all in the name of categories we set from here
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Home = () =>{
    const [menuItems,setMenuItems] = React.useState(items);
    const [activeCategory ,setActiveCategory] = React.useState("");
    const [categories,setCategories] = React.useState(allCategories);
    
    const filterItems = (category) =>{
        setActiveCategory(category);
        if(category === "all"){
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }
    return(
        <div>
            <Categories categories = {categories} activeCategory = {activeCategory} filterItems = {filterItems} />
            <Menu items={menuItems} />
        </div>
        
    )
}

export default Home;