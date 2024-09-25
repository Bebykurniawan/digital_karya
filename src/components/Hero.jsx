import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* Disocunt Tag */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">25%</span> Discount for{" "}
          <span className="text-white">New</span> Customers
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next{" "}
          <br
            className="sm:block
        hidden"
          />{" "}
          <span className="text-gradient">Development</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold text-white ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
        Modern Website
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {" "}
        A web design service established with the aim of helping businesses and
        individuals to have an attractive, functional and responsive website.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="hero" className="w-[100%] h-[100%] relative z-[5]"/>

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
      {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/> */}
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}><GetStarted/></div>
  </section>
);

export default Hero;
