import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div className="border border-2 border-amber-300 p-5 rounded-lg m-5">
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={"Khushi"}></Cousin>
                <Cousin name={"Reshma"}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;