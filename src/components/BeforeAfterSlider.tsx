import React from "react";
import CompareImage from "react-compare-image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  alt,
}) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <CompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
        leftImageLabel=""
        rightImageLabel=""
        sliderLineColor="#ffff"
        handleSize={25}
      />
      <p className="text-center mt-4 font-semibold text-black">{alt}</p>
    </div>
  );
};

export default BeforeAfterSlider;
