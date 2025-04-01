import './styles.scss';

interface Props {
  rating: number;
}

function Stars({ rating }: Props) {
  const totalStars = 5;

  return (
    <div className="kvadred-flex kvadred-flex-column">
      <div className="rating">{rating}</div>
      <div className="stars">
        {Array.from({ length: totalStars }).map((_, index) => {
          const fillPercentage = Math.max(0, Math.min(1, rating - index)) * 100;

          return (
            <div key={index} className="star">
              {/* Empty Star (Base) */}
              <img
                src="/icons/star-empty.svg"
                alt="Empty Star"
                className="star-icon"
              />

              {/* Full Star (Overlay) - Clipped */}
              <div
                className="star-fill"
                style={{ width: `${fillPercentage}%` }}
              >
                <img
                  src="/icons/star-full.svg"
                  alt="Full Star"
                  className="star-icon"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stars;
