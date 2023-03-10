import React from "react";
import CardContainer from "../containers/CardContainer";
import NavBar from "./Navbar";

export default function HomePage(){
    const categories = ["History", "Science", "etc"];

    return (
        <div>
            <h1>Explore your chosen topics</h1>
            {categories.map((category, index) => (
                <CardContainer className="categoryCard" text={category} key={index}></CardContainer>
            ))}

            
        </div>
    )
}
