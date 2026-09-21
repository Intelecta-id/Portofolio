export default function WaveDivider({
  fromDark = false,
}: {
  fromDark?: boolean;
}) {
  return (
    <div className="wave-divider -mb-px">
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: 48 }}
      >
        <path
          d="M0 24 C180 44 360 4 540 24 C720 44 900 4 1080 24 C1260 44 1380 10 1440 24 L1440 48 L0 48 Z"
          fill={fromDark ? "#F3EBD9" : "#3A2318"}
        />
      </svg>
    </div>
  );
}
