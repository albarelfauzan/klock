import styles from "@/assets/styles";
import { logoText } from "@/assets/images";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-center text-center w-full">
          <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Unlocking Security, <br className="sm:block hidden" />{" "}
            <h1 className="text-white">Powered by Blockchain:</h1>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold text-center ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          K-Lock, Your Gateway to Trust.
        </h1>
        <p className={`${styles.paragraph} text-center max-w-[470px] mt-5`}>
          K-Lock aims to revolutionize home security systems. Our mission is to
          provide a robust and tamper-proof solution that ensures the safety of
          personal property and privacy. By combining blockchain technology with
          Internet Of Things.
        </p>
        <Image
          src={logoText}
          alt="klock"
          className="w-[700px] h-[180px] mt-10"
          width={700}
          height={180}
        />
      </div>
    </section>
  );
};

export default Hero;
