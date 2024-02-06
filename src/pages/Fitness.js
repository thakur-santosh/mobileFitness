import FrameA from "../components/FrameA";
import SaveDetails from "../components/SaveDetails";
import DetailsFrame from "../components/DetailsFrame";
import PersonalInfoFrame from "../components/PersonalInfoFrame";
import styles from "./Fitness.module.css";

const Fitness = () => {
  return (
    <div className={styles.fitness}>
      <FrameA />
      <section className={styles.frameC}>
        <SaveDetails />
        <DetailsFrame />
      </section>
      <PersonalInfoFrame />
    </div>
  );
};

export default Fitness;
