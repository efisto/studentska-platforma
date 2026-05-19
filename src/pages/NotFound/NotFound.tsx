import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-yellow-600">404</h1>
        <p className="mt-4 text-xl">Stranica nije pronađena</p>

        <Link
            to="/"
            className="inline-block mt-6 px-4 py-2 bg-yellow-600 text-white rounded-lg"
        >
            Vrati se na početnu
        </Link>
        </div>
    );
    };

export default NotFound;
