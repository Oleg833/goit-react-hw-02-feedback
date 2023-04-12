// import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

const Statistics = () => {
    return (
        <div className={css.box}>
            <p className={css.value}><b className={css.title}>Good:</b>Stat</p>
            <p className={css.value}><b className={css.title}>Neutral:</b>Stat</p>
            <p className={css.value}><b className={css.title}>Bad:</b>Stat</p>
            <p className={css.value}><b className={css.title}>Total:</b>Stat</p>
            <p className={css.value}><b className={css.title}>Positive feedback:</b>Stat</p>
        </div>
    );
}


export default Statistics;
