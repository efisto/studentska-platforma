import { Link } from "react-router-dom";
import { roommates } from "../../data/roommatesData";

const Roommates = () => {
    return (
        <>
            <b className="ml-12 mb-4 text-[28px] text-yellow-700">Pronađi cimera</b>

            <div>
            {roommates.map((roomate) => (
                <Link key={roomate.id} to={`/roommates/${roomate.id}`}>
                <div className="flex ml-10 mr-10 mt-5 mb-5 p-2 bg-white/30 rounded-lg shadow-lg font-poppins">
                    <div className="flex flex-col flex-1 m-5 p-2">
                    <b className="text-yellow-600 text-lg">{roomate.name}</b>
                    <div className="mt-2">
                        <p>
                        <b>Godine:</b> {roomate.years}
                        </p>
                        <p>
                        <b>Dolazim iz:</b> {roomate.from}
                        </p>
                        <p>
                        <b>Tražim smještaj u:</b> {roomate.location}
                        </p>
                    </div>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </>
    );
};
export default Roommates;
