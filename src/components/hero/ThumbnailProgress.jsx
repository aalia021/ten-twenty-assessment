export default function ThumbnailProgress({ thumb, onNext, duration }) {
  return (
    <button
      onClick={onNext}
      className="absolute bottom-[8%] sm: left-[8%] 
  md:left-[6%] 
  lg:left-[5%] 
  xl:left-[4%] 
  2xl:left-[11%] z-20"
    >
      <div className="relative w-[104px] h-[104px] mt-8">
        {" "}
        {/* Added mt-8 to push below title */}
        {/* Thumbnail Image */}
        <img
          src={thumb}
          alt="Next slide"
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* Big, spaced animated white border */}
        <svg
          viewBox="0 0 160 160" // bigger svg box
          className="absolute -top-[28px] -left-[28px] w-[160px] h-[160px] pointer-events-none"
        >
          <rect
            x="5"
            y="5"
            width="150"
            height="150"
            fill="none"
            stroke="white"
            strokeWidth="10" // much thicker border
            strokeDasharray="600"
            strokeDashoffset="600"
            style={{
              animation: `drawBorder ${duration}ms linear forwards`,
            }}
          />
        </svg>
        {/* Centered "Next" label */}
        <span className="absolute inset-0 flex items-center justify-center text-white text-[12px] font-medium">
          Next
        </span>
      </div>
    </button>
  );
}
