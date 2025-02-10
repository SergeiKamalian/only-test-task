import { memo, useMemo } from "react";
import { useWindowSize } from "react-use";
import {
  StyledCircleSlider,
  StyledCircleSliderWrapper,
  StyledSliderPoint,
} from "./styles";
import {
  CircleSliderArrows,
  CircleSliderBtn,
  CircleSliderYears,
} from "./components";
import { mockData } from "../../../../data.mock";

interface CircleSliderProps {
  activePeriodId: number;
  setActivePeriodId: React.Dispatch<React.SetStateAction<number>>;
}

export const CircleSlider = memo((props: CircleSliderProps) => {
  const { activePeriodId, setActivePeriodId } = props;
  const { height } = useWindowSize();

  const activePeriodIndex = useMemo(
    () => mockData.findIndex(({ id }) => id === activePeriodId) || 0,
    [activePeriodId]
  );

  const zoomScale = useMemo(() => {
    const zoom = height / 900;
    if (zoom > 1) return 1;
    return zoom;
  }, [height]);

  const sliderRotate = useMemo(
    () => 45 + activePeriodIndex * (360 / mockData.length),
    [activePeriodIndex]
  );

  console.log(sliderRotate);

  return (
    <StyledCircleSliderWrapper $zoomScale={zoomScale}>
      <CircleSliderYears activePeriodId={activePeriodId} />
      <CircleSliderArrows
        activePeriodId={activePeriodId}
        setActivePeriodId={setActivePeriodId}
      />
      <StyledCircleSlider $rotate={sliderRotate}>
        {mockData.map(({ id }, index) => (
          <StyledSliderPoint
            key={id}
            $angle={`${(index * 360) / mockData.length}deg`}
            $btnRotate={sliderRotate - index * (360 / mockData.length)}
          >
            <CircleSliderBtn
              activePeriodId={activePeriodId}
              setActivePeriodId={setActivePeriodId}
              id={id}
            />
          </StyledSliderPoint>
        ))}
      </StyledCircleSlider>
    </StyledCircleSliderWrapper>
  );
});
