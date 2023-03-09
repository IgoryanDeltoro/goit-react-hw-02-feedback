import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onGood, onNeutral, onBad, total }) => {
  return (
    <>
      <button
        className={css.goodBtn}
        type="button"
        onClick={() => {
          onGood();
          total();
        }}
      >
        Good
      </button>
      <button
        className={css.neutralBtn}
        type="button"
        onClick={() => {
          onNeutral();
          total();
        }}
      >
        Neutral
      </button>
      <button
        className={css.badBtn}
        type="button"
        onClick={() => {
          onBad();
          total();
        }}
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.protoType = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default FeedbackOptions;
