import { useParams, useNavigate } from "react-router-dom";
import { roommates } from "../../data/roommatesData";

const RoomateDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const roommate = roommates.find((s) => s.id === id);

    if (!roommate) {
        return (
          <p className="mt-4 text-2xl text-center font-bold text-yellow-600 ">
            Cimer nije pronađen
          </p>
        );
    }

    const handleClick = () => {
        return navigate(-1);
    };

    return (
      <div>
        <button
          className="mb-10 ml-2 flex items-center justify-center w-[80px] h-[35px] border-2 border-yellow-600 rounded-xl "
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
          <b className="text-yellow-600 text-[22px]">{roommate.name}</b>
          <div className="mt-3">
            <p>
              <b>Iz:</b> {roommate.from}
            </p>
            <p>
              <b>Tražim smještaj u:</b> {roommate.location}
            </p>
            <p>
              <b>Broj mobitela</b> {roommate.number}
            </p>
            <p>
              <b>Studij:</b> {roommate.uni}
            </p>
            <p className="mt-3">
              <b>Opis:</b> {roommate.description}
            </p>
          </div>
        </div>
      </div>
    );
};

export default RoomateDetails;
