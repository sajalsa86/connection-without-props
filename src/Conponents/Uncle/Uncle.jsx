import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className="border border-2 border-amber-400 p-5 rounded-lg m-5">
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={"Motiur"}></Cousin>
                <Cousin name={"Subas"}></Cousin>
            </section>
            <p>{money}</p>
            <button className="bg-slate-500 p-2" onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Uncle;