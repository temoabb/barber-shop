import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home.page";
import BarbersList from "./pages/BarbersList.page";
import BarberDetails from "./pages/BarberDetails.page";
import MyBookings from "./pages/MyBookings.page";
import Register from "./pages/Register.page";
import Login from "./pages/Login.page";

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
  {
    id: 5,
    path: "/register",
    element: <Register />,
  },
  {
    id: 6,
    path: "/login",
    element: <Login />,
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
