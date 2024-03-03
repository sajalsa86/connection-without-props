import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div className="border border-2 border-amber-100 p-5 rounded-lg m-5">
            <h2>Brother: {money}</h2>
        </div>
    );
};

export default Brother;