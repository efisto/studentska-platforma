import { events } from "../../data/eventsData";


const Events = () => {
    return (
        <>
            <b className="ml-12 mb-4 text-[28px] text-yellow-700">
            Smještaj za studente
            </b>

            {events.map((ev) => (
            <div className="flex ml-10 mr-10 mt-5 mb-5 p-2 bg-white/30 rounded-lg shadow-lg font-poppins">
                <img className="w-[400px] h-[300px] m-3 rounded-lg" src={ev.img} />
                <div className="flex flex-col flex-1 m-10">
                <b className="text-yellow-600 text-[20px]">{ev.title}</b>
                <div className="text-[17px] mt-6">
                    <p className="mb-1">
                    <b>Lokacija:</b> {ev.location}
                    </p>
                    <p className="mb-1">
                    <b>Datum:</b> {ev.date}
                    </p>
                    <p className="mb-1">
                    <b>Vrijeme:</b> {ev.time} sati
                    </p>
                    <p className="mb-1">
                    {" "}
                    {ev.price > 0 && (
                        <p>
                        {" "}
                        <b>Cijena:</b> {ev.price} €{" "}
                        </p>
                    )}
                    </p>
                </div>
                </div>
            </div>
            ))}
        </>
    );
};

export default Events;
