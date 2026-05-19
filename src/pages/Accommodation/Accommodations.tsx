import { Link } from "react-router-dom";
import { accommodations } from "../../data/accommodationsData";

const Accommodations = () =>{
    return (
        <>
            <b className="ml-12 mb-4 text-[28px] text-yellow-700">
                Smještaj za studente
            </b>

        {accommodations.map((acco) => (
            <Link key={acco.id} to={`/accommodations/${acco.id}`}>
                <div className="flex ml-10 mr-10 mt-5 mb-5 p-2 bg-white/30 rounded-lg shadow-lg font-poppins">
                    <img className="w-[400px] h-[300px] m-3 rounded-lg" src={acco.img} />
                    <div className="flex flex-col flex-1 m-10">
                        <b className="text-yellow-600 text-[20px]">{acco.title}</b>
                        <p className="text-[17px] mt-2">{acco.location}</p>
                        <b className="mt-auto self-end text-yellow-800 text-[19px]">
                        {acco.price} €
                        </b>
                    </div>
                </div>
            </Link>
            ))}
        </>
    );
}

export default Accommodations;