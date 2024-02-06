import styles from "./SaveDetails.module.css";

const SaveDetails = () => {
  return (
    <div className={styles.saveDetails}>
      <div className={styles.meatEaterFrame} />
      <div className={styles.frameScanthedeviceQR}>
        <div className={styles.frameScanthedeviceQRChild} />
        <div className={styles.ellipse}>
          <div className={styles.smartwatchIcon}>
            <div className={styles.smartWatch}>Smart Watch</div>
            <h1 className={styles.fireBoltt}>Fire Boltt</h1>
          </div>
        </div>
        <div className={styles.saveandExit}>
          <div className={styles.scanTheDevice}>
            Scan the device QR to connect
          </div>
        </div>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <b className={styles.scan}>Scan</b>
        </button>
      </div>
      <div className={styles.devicesStatsFrame}>
        <div className={styles.devicesStatsFrameChild} />
        <div className={styles.ellipseParent}>
          <div className={styles.frameItem} />
          <img
            className={styles.screenshot20240205200304P}
            loading="eager"
            alt=""
            src="/screenshot-20240205-200304photoroom-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SaveDetails;
