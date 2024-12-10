import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//include images into your bundle


const cards = [
    {
        image: "https://i.pinimg.com/1200x/59/49/a9/5949a92ccf7a95e6acdb5bb1a4a43ef5.jpg",
        title: "Sorner",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.",
    },
    {
        image: "https://i.pinimg.com/1200x/fd/90/4d/fd904dcd8a27643e3573fdecad540984.jpg",
        title: "El dinero a mi me llueve",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.",
    },
    {
        image: "https://i.pinimg.com/1200x/76/89/7c/76897cef4e89c5902b1b67b766edf740.jpg",
        title: "Joguito",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.",
    },
    {
        image: "https://i.pinimg.com/1200x/2a/d2/94/2ad294c7d2d70f6b0c3cfe5068efe264.jpg",
        title: "EL princi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.",
    }
];

//create your first component
const Home = () => {
	return (
        <div className="text-center">
            <Navbar />
            <div className="container-fluid m-2">
                <Jumbotron />
                <div className="container-card container-fluid">
                    <div className="row">
                        {cards.map((item, index) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                                <Card cardData={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
