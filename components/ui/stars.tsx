import { FiStar } from "react-icons/fi";

interface StarsProps {
    stars: Number;
}

export default function Stars({stars}:StarsProps){
    
    return (
        <span className="flex flex-row stars" aria-label="Rated 5.0 out of 5">
            <FiStar/><FiStar/><FiStar/><FiStar/><FiStar/>
        </span>
    )
}