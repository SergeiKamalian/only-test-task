import { memo, useEffect, useState } from "react";
import { mockData } from "../../../../../../data.mock";
import {
  StyledCircleSliderYears,
  StyledPeriodYearFrom,
  StyledPeriodYearTo,
} from "./styles";

interface CircleSliderYearsProps {
  activePeriodId: number;
}

const easeOutQuad = (t: number) => t * (2 - t);

export const CircleSliderYears = memo((props: CircleSliderYearsProps) => {
  const { activePeriodId } = props;
  const activePeriod = mockData[activePeriodId - 1];

  const [yearFrom, setYearFrom] = useState(activePeriod.period[0]);
  const [yearTo, setYearTo] = useState(activePeriod.period[1]);

  useEffect(() => {
    const startFrom = yearFrom;
    const startTo = yearTo;
    const endFrom = activePeriod.period[0];
    const endTo = activePeriod.period[1];

    let startTime: number | null = null;
    const duration = 300;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);

      setYearFrom(
        Math.round(startFrom + (endFrom - startFrom) * easedProgress)
      );
      setYearTo(Math.round(startTo + (endTo - startTo) * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [activePeriod.period, activePeriodId, yearFrom, yearTo]);

  return (
    <StyledCircleSliderYears>
      <StyledPeriodYearFrom>{yearFrom}</StyledPeriodYearFrom>
      <StyledPeriodYearTo>{yearTo}</StyledPeriodYearTo>
    </StyledCircleSliderYears>
  );
});
