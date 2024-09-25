import { website } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={website}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-[0] -left-1/2 bottom-0 top-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        our services also <br className="sm:block hidden" /> have a warranty.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      If there are aspects of the design that do not match your expectations, we are ready to make revisions until your site is completely in line with your vision, at no additional cost within the agreed time limit.
      </p>

      <div></div>
    </div>
  </section>
);

export default Billing;
