import React from "react"
import PropTypes from "prop-types"
import css from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.infoBox}>
    <p className={css.label}>
      Good:
      <span className={css.value}>{good}</span>
    </p>

    <p className={css.label}>
      Neutral:
      <span className={css.value}>{neutral}</span>
    </p>

    <p className={css.label}>
      Bad:
      <span className={css.value}>{bad}</span>
    </p>

    <p className={css.label}>
      Total:
      <span className={css.value}>{total}</span>
    </p>

    <p className={css.label}>
      Positive feedback:
      <span className={css.value}>{positivePercentage}%</span>
    </p>
  </div>
)

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics
