import css from '../button/Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <button className={css.button} type="button" onClick={() => onGood()}>
        Good
      </button>
      <button className={css.button} type="button" onClick={() => onNeutral()}>
        Neutral
      </button>
      <button className={css.button} type="button" onClick={() => onBad()}>
        Bad
      </button>
    </div>
  );
};

Button.protoType = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};

export default Button;
