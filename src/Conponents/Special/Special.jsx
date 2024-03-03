import { useContext } from "react";
import { SendGift } from "../Grandpa/Grandpa";

const Special = () => {
    const receivedGift = useContext(SendGift);
    return (
        <div className="border border-2 border-amber-200 p-5 rounded-lg m-5">
            <h2>Special</h2>
            <p>Has {receivedGift}</p>
        </div>
    );
};

export default Special;