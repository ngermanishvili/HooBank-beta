import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div />
    {/* TODO */}

    <div className="w-full flex justify-between item-center md:flex-row flex-col sm::mb-16 mb-6 relative z-[1]  ">
      <h2 className={styles.heading2}>
        Find a better card deal in <br className="sm:block hidden" /> few easy steps.
      </h2>
      <div className="w-full md:mt-0 mt-6" >
      <p className={`${styles.paragraph} text-left max-w-[470px] text-[18px] tracking-wider`}>
      Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card ) => (
        <FeedbackCard  key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
