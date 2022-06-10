import { AvailableBarbersBtn } from "../components/styles/AvailableBarbersBtn.styled";
import { HomeWrapper } from "../components/styles/AvailableBarbersBtn.styled";

import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const handleNavigateToBarbersList = () => navigate("/barbers");

  return (
    <HomeWrapper>
      <img src="/img/barber.jpeg" alt="barber-cover" />
      <AvailableBarbersBtn onClick={handleNavigateToBarbersList}>
        Available barbers
      </AvailableBarbersBtn>
    </HomeWrapper>
  );
}

export default HomePage;
