import Special from "../Special/Special";

const MySelf = () => {
    return (
        <div className="border border-2 border-amber-200 p-5 rounded-lg m-5">
            <h2>My Self</h2>
            <section className="flex">
                <Special></Special>
            </section>
        </div>
    );
};

export default MySelf;