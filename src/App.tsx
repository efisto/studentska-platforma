import { useRoutes } from "react-router-dom"
import routes from "./routes"

const App= () => {
  const element = useRoutes(routes);
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-300 to-amber-100 mx-auto p-2 ">
      <div className="flex bg-yellow-200 shadow-lg h-[65px]">
        <h1 className="ml-5 text-[30px] text-yellow-900 m-auto">
          Studentska platforma
        </h1>
      </div>
      {element}
    </div>
  );
}

export default App;
