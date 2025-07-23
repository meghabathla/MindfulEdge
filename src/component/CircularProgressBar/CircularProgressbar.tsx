import "./CircularProgressbar.css";

type CircularProgressBarProps = {
  percentage: number;
  size: number;
  strokeWidth: number;
  transform?: string;
  children?: React.ReactNode;
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage = 0,
  size = 120,
  strokeWidth = 12,
  transform,
  children,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        transform,
      }}
    >
      <svg width={size} height={size}>
        <circle
          stroke="rgba(255,255,255,0.3)"
          fill="none"
          strokeWidth={strokeWidth}
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
        <circle
          stroke="#edefef"
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            transition: "stroke-dashoffset 0.35s ease",
          }}
        />
      </svg>
      {children && (
        <div className="circular_progressbar_container">{children}</div>
      )}
    </div>
  );
};

export default CircularProgressBar;
