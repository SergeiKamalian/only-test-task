import { memo, useMemo, useState } from "react";
import { Container } from "../../ui";
import { StyledMainPageH1, StyledMainPageWrapper } from "./styles";
import { CircleSlider, EventsSlider } from "./components";
import { mockData } from "../../data.mock";
import { useWindowSize } from "react-use";

export const MainPage = memo(() => {
  const [activePeriodId, setActivePeriodId] = useState(mockData[0].id);
  const { width } = useWindowSize();
  const isTabletL = useMemo(() => width <= 991, [width]);

  return (
    <Container>
      <StyledMainPageWrapper>
        <StyledMainPageH1>
          Исторические <br /> даты
        </StyledMainPageH1>
        <CircleSlider
          activePeriodId={activePeriodId}
          setActivePeriodId={setActivePeriodId}
          innerContent={
            isTabletL ? <EventsSlider activePeriodId={activePeriodId} /> : null
          }
        />
        {!isTabletL && <EventsSlider activePeriodId={activePeriodId} />}
      </StyledMainPageWrapper>
    </Container>
  );
});
