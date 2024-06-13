import MainLayout from "./pages/MainLayout";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes.config";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map((route, index) =>
            route.index ? (
              <Route index element={route.element} key={index} />
            ) : (
              <Route path={route.path} element={route.element} key={index} />
            )
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
