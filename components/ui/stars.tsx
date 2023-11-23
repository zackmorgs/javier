import { FaStar } from "react-icons/fa6";

interface StarsProps {
    stars: number;
}

export default function Stars({stars}:StarsProps){
    // Create an array of stars based on the stars prop
    // thanks chatgpt
    const starElements = [];
    for (let i = 0; i < stars; i++) {
        starElements.push(<FaStar key={i} />);
    }
    
    return (
        <span className="flex flex-row stars" aria-label="Rated 5.0 out of 5">
            {starElements}
        </span>
    )
}