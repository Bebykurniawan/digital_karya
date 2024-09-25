import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Payments available to <br className="sm:block hidden" />
      purchase our services.
      </h2>
      <p className={`${styles.paragraph}`}>
      You can use a variety of payments, <br sm:block hidden/> such as gopay, dana, shoppePay and bank transfers.
      </p>
    <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
