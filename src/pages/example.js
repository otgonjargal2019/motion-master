import { useEffect, useRef, useState } from "react";
import AnimatedLine from "@/app/components/animatedLine";

export default function FirstPage() {
  const svgRef = useRef(null);
  const sectionRef = useRef(null);

  const [isInView, setIsInView] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="pt-[134.23px] w-full flex flex-col items-center">
        <h1 className="bg-[#FF5B15] text-black text-center text-[40px] font-bold rounded-[50px] w-[366.22px] h-[56.04px] flex items-center justify-center">
          GLS Coach
        </h1>
      </div>

      <section className="mt-[180.92px] mx-[239px] flex items-center justify-center gap-8">
        <p className="text-white text-[50px] whitespace-nowrap leading-[58px]">
          스트리머와
        </p>
        <AnimatedLine />
        <p className="text-white text-[50px] whitespace-nowrap leading-[58px]">
          게임 개발자를 위한
        </p>
      </section>

      <section className="ml-[239px] mt-[116px] text-white font-bold text-[90px]">
        <h2>저작권</h2>
        <p className="font-medium">문제 해결 솔루션</p>
      </section>

      <div className="flex justify-center mt-[400px]">
        <img
          src="/Group.svg"
          alt="moving walls"
          ref={svgRef}
          className={`scaling-svg ${isInView ? "scale-up" : ""}`}
          style={{ width: "10%" }}
        />
      </div>

      <section
        ref={sectionRef}
        className={`last-section ${isSectionVisible ? "bg-fade-in" : ""}`}
      >
        <div className={`content ${isSectionVisible ? "text-appear" : ""}`}>
          <h2 className="title">
            <span className="bordered-text">GLS Coach</span>
            <span> 하나로</span>
          </h2>

          <div className="description">
            <p>스트리머가 게임 방송을 할 때,</p>
            <p>복잡한 저작권 문제를 한 곳에서 해결할 수 있습니다.</p>
            <p>계약에서 게임 플레이, 방송 제어까지</p>
            <p>하나로 손쉽게 라이선스 문제를 해결하세요.</p>
          </div>
        </div>
      </section>
      <section className="h-[1500px]">cdscdsc</section>
    </div>
  );
}
