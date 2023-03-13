import React from "react";
import CustomCard from "./CustomCard";
//import NavBar from "./Navbar";

export default function HomePage(){
    const categories = ["History", "Science", "etc"];

    return (
        <div>
            <h1>Explore your chosen topics</h1>
            {categories.map((category, index) => (
                <CustomCard className="categoryCard" text={category} key={index}></CustomCard>
            ))}

            
        </div>
    )
}
