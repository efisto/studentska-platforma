import { Outlet, Link } from "react-router-dom";

const MainLayout = () =>{
    return (
        <div>
            <nav className="flex justify-center gap-2 text-xl text-yellow-800 mb-[50px] bg-white/10 backdrop-blur-lg max-w-sm rounded-lg mx-auto shadow-lg mt-2">
            <Link className="flex rounded-lg p-2" to="/">
                Početna
            </Link>
            <Link className="flex rounded-lg p-2" to="/accommodations">
                Smještaj
            </Link>
            <Link className="flex rounded-lg p-2" to="/roommates">
                Cimeri
            </Link>
            <Link className="flex  rounded-lg p-2" to="/events">
                Događaji
            </Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default MainLayout;