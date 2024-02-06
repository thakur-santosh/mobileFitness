import styles from "./PersonalInfoFrame.module.css";

const PersonalInfoFrame = () => {
  return (
    <section className={styles.personalInfoFrame}>
      <div className={styles.personalInfoFrameChild} />
      <div className={styles.addDetailsFrame}>
        <h3 className={styles.addDetails}>Add Details</h3>
      </div>
      <div className={styles.ageFrame}>
        <input className={styles.heightFrame} placeholder="Name" type="text" />
        <div className={styles.heightFrame1}>
          <input
            className={styles.cyclistFrame}
            placeholder="Age"
            type="text"
          />
          <input
            className={styles.cyclistFrame1}
            placeholder="Height"
            type="text"
          />
        </div>
        <div className={styles.saveDetailsButton}>
          <div className={styles.areagymmemberQuestion}>
            <div className={styles.areagymmemberQuestionChild} />
            <div className={styles.areYouA}>Are you a gym member?</div>
            <img
              className={styles.ionarrowBackOutlineIcon}
              alt=""
              src="/ionarrowbackoutline-1@2x.png"
            />
          </div>
          <div className={styles.areagymmemberQuestion1}>
            <div className={styles.areagymmemberQuestionItem} />
            <div className={styles.doYouEat}>Do you eat meat?</div>
            <img
              className={styles.ionarrowBackOutlineIcon1}
              alt=""
              src="/ionarrowbackoutline-1@2x.png"
            />
          </div>
          <div className={styles.areagymmemberQuestion2}>
            <div className={styles.areagymmemberQuestionInner} />
            <div className={styles.areYouA1}>Are you a cyclist?</div>
            <img
              className={styles.ionarrowBackOutlineIcon2}
              alt=""
              src="/ionarrowbackoutline-1@2x.png"
            />
          </div>
        </div>
      </div>
      <footer className={styles.saveButton}>
        <div className={styles.saveButtonChild} />
        <b className={styles.saveDetails}>Save Details</b>
      </footer>
    </section>
  );
};

export default PersonalInfoFrame;
