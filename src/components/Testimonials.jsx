import {feedback} from "../constants"
import styles from "../style"
import FeedBackCard from "./FeedBackCard"


const Testimonials = () =>  (
<section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
  {/* TODO */}
<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full pink__gradient"/>

<div className="w-full flex justify-between items-center flex-col md:flex-row sm:mb-16 mb-6 relative z-[1]">
  <h1 className={styles.heading2}>price range<br className="sm:block hidden"/>of our services.</h1>
  <div className="w-full md:mt-0 mt-6">
<p className={`${styles.paragraph} text-left max-w-[450px]`}>Our service has 3 different packages, each of which has its own advantages.</p>
  </div>
</div>
  <div className="flex flex-wrap  sm:justify-start justify-center w-full feedback-container relative z-[1]">
{feedback.map((card) => (
  <FeedBackCard key={card.id} {...card}/>
))}
  </div>
</section>
  )


export default Testimonials
