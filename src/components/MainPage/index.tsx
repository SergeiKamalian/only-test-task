import { memo, useState } from "react";
import { Container } from "../../ui";
import { StyledMainPageH1, StyledMainPageWrapper } from "./styles";
import { CircleSlider, EventsSlider } from "./components";
import { mockData } from "../../data.mock";

export const MainPage = memo(() => {
  const [activePeriodId, setActivePeriodId] = useState(mockData[0].id);

  return (
    <Container>
      <StyledMainPageWrapper>
        <StyledMainPageH1>
          Исторические <br /> даты
        </StyledMainPageH1>
        <CircleSlider
          activePeriodId={activePeriodId}
          setActivePeriodId={setActivePeriodId}
        />
        <EventsSlider activePeriodId={activePeriodId} />
      </StyledMainPageWrapper>
    </Container>
  );
});
