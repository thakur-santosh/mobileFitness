import styles from "./FrameA.module.css";

const FrameA = () => {
  return (
    <section className={styles.frameA}>
      <div className={styles.connectedDevicesStatsFrame}>
        <header className={styles.frameB}>
          <div className={styles.frameConnectedDevices}>
            <div className={styles.smartWatch}>
              <div className={styles.smartWatchChild} />
              <img
                className={styles.ionarrowBackOutlineIcon}
                loading="eager"
                alt=""
                src="/ionarrowbackoutline.svg"
              />
            </div>
            <img
              className={styles.containerRectangleIcon}
              loading="eager"
              alt=""
              src="/rectangle-7@2x.png"
            />
          </div>
        </header>
        <div className={styles.fitnessTrackerLabel}>
          <h1 className={styles.yourFitnessTrackerContainer}>
            <p className={styles.your}>{`Your `}</p>
            <p className={styles.fitnessTracker}>Fitness Tracker</p>
          </h1>
        </div>
        <div className={styles.connectedDevicesFrame}>
          <button className={styles.framesConnection}>
            <div className={styles.framesConnectionChild} />
            <b className={styles.connectedDevices}>Connected Devices</b>
          </button>
          <button className={styles.framesConnection1}>
            <div className={styles.framesConnectionItem} />
            <div className={styles.statistics}>Statistics</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameA;
