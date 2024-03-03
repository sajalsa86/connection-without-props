import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div className="border border-2 border-amber-500 p-5 rounded-lg m-5">
            <h2>Dad</h2>
            <section className="flex">
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;