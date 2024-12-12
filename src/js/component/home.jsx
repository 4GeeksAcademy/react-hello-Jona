import React from "react"; 

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";  
import Jumbotron from "./Jumbotron.jsx"; 
import Card from "./Card.jsx"; 
import Footer from "./Footer.jsx";



//create your first component
const Home = () => { 
	const cards = [
		{
			image: "https://picsum.photos/id/10/200/300",
			title: "Parque",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			image: "https://picsum.photos/id/17/200/300",
			title: "Sendero",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			image: "https://picsum.photos/id/28/200/300",
			title: "Bosque",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			image: "https://picsum.photos/id/54/200/300",
			title: "Montaña",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		}
	];
	return (
		
		<div className="text-center">
			<div className="Navbar"> 
				<Navbar/>
				</div> 
			
			<div className="Jumbotron"> 
             <Jumbotron/>
			</div>  
			
			<div className="Cartas"> 
			<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div> 
			<div className="Footer"> 
            <Footer/>
			</div>
			
			
		</div>
	);
};

export default Home;
