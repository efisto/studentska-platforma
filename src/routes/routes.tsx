import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts";
import Home from "../pages/Home/Home";
import Events from "../pages/Events/Events";
import Accommodations from "../pages/Accommodation/Accommodations";
import Roommates from "../pages/Roommates/Roommates";
import AccommodationDetails from "../pages/Accommodation/AccommodationDetails";
import RoomateDetails from "../pages/Roommates/RoommateDetails";
import NotFound from "../pages/NotFound/NotFound";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
        { index: true, element: <Home /> },
        {
            path: "accommodations",
            children: [
            { index: true, element: <Accommodations /> },
            { path: ":id", element: <AccommodationDetails /> },
            ],
        },
        {
            path: "roommates",
            children: [
            { index: true, element: <Roommates /> },
            { path: ":id", element: <RoomateDetails /> },
            ],
        },
        { path: "events", element: <Events /> },
        { path: "*", element: <NotFound /> },
        ],
    },
];

export default routes;
