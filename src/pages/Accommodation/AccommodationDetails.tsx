import { useParams, useNavigate } from "react-router-dom";
import { accommodations } from "../../data/accommodationsData";


const AccommodationDetails = () =>{
    const { id } = useParams();
    const navigate=useNavigate();
    const accommodation = accommodations.find((s) => s.id === id);

    if (!accommodation) {
        return (
            <p className="mt-4 text-2xl text-center font-bold text-yellow-600 ">
                Stan nije pronađen
            </p>
        );

    }

    const handleClick = () =>{
        return navigate(-1)
    }

    return (
        <div>
            <button
            className="ml-5 flex items-center justify-center w-[80px] h-[35px] border-2 border-yellow-600 rounded-xl "
            onClick={handleClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 text-yellow-600"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                    />
                </svg>
            </button>            
            <div className="m-[50px] mt-9 p-[50px] bg-white/30 rounded-lg shadow-lg font-poppins">
                <b className="text-yellow-600 text-[28px] ml-4">{accommodation.title}</b>
                <div className="flex p-5 mb-6 mt-5 rounded-lg shadow-lg border border-yellow-100 ">
                    <img
                        className="w-full max-w-[550px] h-[370px] shadow-xl border-2 border-yellow-100 m-auto mb-3 mt-3"
                        src={accommodation.img}
                        alt={accommodation.title}
                    />
                </div>
                <div className="ml-5">
                    <p className="mt-2"><b>Vlasnik:</b>  {accommodation.owner}</p>
                    <p><b>Broj telefona:</b> {accommodation.number}</p>
                    <p><b>Lokacija:</b> {accommodation.location}</p>
                    <p><b>Cijena:</b> {accommodation.price} €</p>
                    <p className="mt-4"><b>Opis:</b> {accommodation.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AccommodationDetails;