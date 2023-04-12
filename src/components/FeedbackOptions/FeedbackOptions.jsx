import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({title}) => {
    return (
        <div className={css.box}>
            <button tupe="button" className={css.btn}>{title}</button>
            <button tupe="button" className={css.btn}>Neutral</button>
            <button tupe="button" className={css.btn}>Bad</button>
        </div>
    );
}

FeedbackOptions.propTypes = {
    title: PropTypes.string.isRequired,
}
export default FeedbackOptions;