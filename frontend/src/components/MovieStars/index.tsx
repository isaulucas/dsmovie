import { ReactComponent as StarFull } from 'assets/img/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg';
import "./styles.css";

type Props = {
  score: number;
};

type StarProps = {
  fill: number;
};

function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];

    const intergerPart =  Math.floor(score)

    for (let i = 0; i < intergerPart; i++) {
        fills[i] = i;
    }

    const diff = score - intergerPart;
    if (diff > 0) {
        fills[intergerPart] = 0.5;
    }

  return fills;
}

function Star({ fill }: StarProps) {
  if (fill === 0) {
    return <StarEmpty />;
  } 
  else if (fill === 1) {
    return <StarFull />;
  } 
  else {
    return <StarHalf />;
  }
}

function MovieStars({ score }: Props) {
 
    const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />
    </div>
  );
}

export default MovieStars;
