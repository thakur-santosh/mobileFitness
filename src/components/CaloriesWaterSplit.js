import { useMemo } from "react";
import styles from "./CaloriesWaterSplit.module.css";

const CaloriesWaterSplit = ({ calories, kcal, propPadding }) => {
  const caloriesWaterSplitStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.caloriesWaterSplit} style={caloriesWaterSplitStyle}>
      <div className={styles.caloriesWaterSplitChild} />
      <div className={styles.nameAgeHeightSplit}>
        <div className={styles.calories}>{calories}</div>
      </div>
      <div className={styles.kcal}>{kcal}</div>
    </div>
  );
};

export default CaloriesWaterSplit;
