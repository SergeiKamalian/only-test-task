import { memo, useMemo } from "react";
import {
  StyledArrowsRow,
  StyledCircleSliderArrow,
  StyledCircleSliderArrows,
  StyledLabel,
} from "./styles";
import { mockData } from "../../../../../../data.mock";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface CircleSliderArrowsProps {
  activePeriodId: number;
  setActivePeriodId: React.Dispatch<React.SetStateAction<number>>;
}

export const CircleSliderArrows = memo((props: CircleSliderArrowsProps) => {
  const { activePeriodId, setActivePeriodId } = props;

  const nextIsDisabled = useMemo(
    () => activePeriodId === mockData[mockData.length - 1].id,
    [activePeriodId]
  );
  const prevIsDisabled = useMemo(
    () => activePeriodId === mockData[0].id,
    [activePeriodId]
  );

  return (
    <StyledCircleSliderArrows>
      <StyledLabel>{`0${activePeriodId}/0${mockData.length}`}</StyledLabel>
      <StyledArrowsRow>
        <StyledCircleSliderArrow
          disabled={prevIsDisabled}
          onClick={() => setActivePeriodId((prev) => prev - 1)}
        >
          <MdKeyboardArrowLeft
            size={25}
            color={prevIsDisabled ? "#42567a70" : "#42567A"}
          />
        </StyledCircleSliderArrow>
        <StyledCircleSliderArrow
          disabled={nextIsDisabled}
          onClick={() => setActivePeriodId((prev) => prev + 1)}
        >
          <MdKeyboardArrowRight
            size={25}
            color={nextIsDisabled ? "#42567a70" : "#42567A"}
          />
        </StyledCircleSliderArrow>
      </StyledArrowsRow>
    </StyledCircleSliderArrows>
  );
});
