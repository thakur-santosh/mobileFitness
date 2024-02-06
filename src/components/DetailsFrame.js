import CaloriesWaterSplit from "./CaloriesWaterSplit";
import styles from "./DetailsFrame.module.css";

const DetailsFrame = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.ellipseGroup}>
            <div className={styles.frameInner} />
            <div className={styles.steps}>Steps</div>
            <b className={styles.b}>5,233</b>
          </div>
        </div>
      </div>
      <div className={styles.caloriesWaterFrame}>
        <CaloriesWaterSplit calories="Calories" kcal="1200 Kcal" />
        <CaloriesWaterSplit
          calories="Water"
          kcal="1.8 Ltrs"
          propPadding="var(--padding-xl) var(--padding-xl) var(--padding-4xl)"
        />
      </div>
    </div>
  );
};

export default DetailsFrame;
