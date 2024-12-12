import './styles.scss';

interface SkeletonLineProps {
  width?: number;
  className?: string;
}

function SkeletonLine({ width, className }: SkeletonLineProps) {
  return (
    <div
      className={`kvadred-skeleton-line ${className} ${width ? `kvadred-skeleton-line--width-${width}` : ''}`.trim()}
    ></div>
  );
}

export default SkeletonLine;
