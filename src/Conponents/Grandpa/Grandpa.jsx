import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
export const SendGift = createContext('Diamond');
export const MoneyContext = createContext(1000);
const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    return (
        <div className="border border-2 border-amber-600 p-5 rounded-lg m-5">
            <h2>Grandpa: net Tk {money}</h2>
            <MoneyContext.Provider value={[money, setMoney]}>
                <SendGift.Provider value="Diamond">
                    <section className="flex">
                        <Dad></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </SendGift.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;