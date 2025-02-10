import { memo, useCallback, useMemo } from "react";
import { StyledCircleSliderBtnItem, StyledInnerContent } from "./styles";
import { mockData } from "../../../../../../data.mock";

interface CircleSliderBtnProps {
  id: number;
  activePeriodId: number;
  setActivePeriodId: React.Dispatch<React.SetStateAction<number>>;
}

export const CircleSliderBtn = memo((props: CircleSliderBtnProps) => {
  const { id, activePeriodId, setActivePeriodId } = props;

  const isActive = useMemo(() => id === activePeriodId, [activePeriodId, id]);
  const activeIndex = useMemo(
    () => mockData.findIndex(({ id }) => id === activePeriodId) || 0,
    [activePeriodId]
  );
  const periodItem = useMemo(
    () => mockData.find((data) => data.id === id) || mockData[0],
    [id]
  );
  const onSelect = useCallback(
    () => setActivePeriodId(id),
    [id, setActivePeriodId]
  );

  return (
    <StyledCircleSliderBtnItem
      onClick={onSelect}
      $name={periodItem.name}
      $isActive={isActive}
    >
      <StyledInnerContent $isActive={isActive}>
        <span>{id}</span>
      </StyledInnerContent>
    </StyledCircleSliderBtnItem>
  );
});
// 0 - 45
// 1 - -15
//2 - -75
