import './styles.scss';

const CircleChart = ({
  value,
  label,
  labelPostfix = '',
  color,
}: {
  value: number;
  label: string;
  labelPostfix?: string;
  color: string;
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="circular-chart">
      <svg width="100" height="100" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#E0E0E0"
          strokeWidth="8"
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        {/* Percentage Text */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dy="7"
          fontSize="16"
          fontWeight="bold"
        >
          {value}%
        </text>
      </svg>
      <div className={'chart-label-wrapper'}>
        <div className="chart-label">{label}</div>
        {!!labelPostfix && (
          <div className="chart-label-postfix">{labelPostfix}</div>
        )}
      </div>
    </div>
  );
};

export default CircleChart;
