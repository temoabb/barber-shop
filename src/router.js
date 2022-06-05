import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home.page";
import BarbersList from "./pages/BarbersList.page";
import BarberDetails from "./pages/BarberDetails.page";
import MyBookings from "./pages/MyBookings.page";

const routes = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/barbers",
    element: <BarbersList />,
  },
  {
    id: 3,
    path: "/barbers/:id",
    element: <BarberDetails />,
  },
  {
    id: 4,
    path: "/my-bookings",
    element: <MyBookings />,
  },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} {...route} />
      ))}
    </Routes>
  );
};

export default AppRouter;