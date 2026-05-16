import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

// const STEP = 0;
// const MIN = 0;
// const MAX = 10000;

const RangeSlider = ({ MIN, MAX, STEP }) => {
  // const DefaultValues = () => {
  //   const average = (MIN + MAX) / 2;
  //   const minimum = Math.floor(average / 2);
  //   const maximum = Math.floor(minimum * 3);
  //   return [minimum, maximum];
  // };
  const [values, setValues] = useState([MIN, MAX]);
  return (
    <div className='mb-10'>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className='flex w-full h-9'
          >
            <div
              ref={props.ref}
              className='self-center w-full h-1.5 rounded bg-gray-300'
              style={{
                background: getTrackBackground({
                  values,
                  colors: [
                    "rgba(220, 220, 220,0.5)",
                    "var(--color-primary)",
                    "rgba(220, 220, 220,0.5)",
                  ],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index, isDragged }) => (
          <div
            {...props}
            className='relative flex items-center justify-center size-6  bg-base-100 border border-gray-400 rounded-full shadow-md focus:outline-none'
          >
            {/* Label */}
            <div className='absolute px-2 py-1 text-sm font-bold text-primary-content -bottom-9 rounded bg-primary'>
              ${values[index]}
            </div>

            {/* Inner bar */}
            <div
              className={`size-3 rounded-full ${
                isDragged ? "bg-primary" : "bg-gray-400"
              }`}
            />
          </div>
        )}
      />
    </div>
  );
};

export default RangeSlider;
