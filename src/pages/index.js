import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AnimatedLine from "@/app/components/animatedLine";

export default function Home() {
  const scalingWallRef = useRef(null);
  const fadingGlassRef = useRef(null);
  const fadingGlassRef2 = useRef(null);
  const fadingGlassRef3 = useRef(null);

  const [isInView, setIsInView] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isSectionVisible2, setIsSectionVisible2] = useState(false);
  const [isSectionVisible3, setIsSectionVisible3] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (scalingWallRef.current) {
      observer.observe(scalingWallRef.current);
    }

    return () => {
      if (scalingWallRef.current) {
        observer.unobserve(scalingWallRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (fadingGlassRef.current) {
      sectionObserver.observe(fadingGlassRef.current);
    }

    return () => {
      if (fadingGlassRef.current) {
        sectionObserver.unobserve(fadingGlassRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const sectionObserver2 = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsSectionVisible2(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (fadingGlassRef2.current) {
      sectionObserver2.observe(fadingGlassRef2.current);
    }

    return () => {
      if (fadingGlassRef2.current) {
        sectionObserver2.unobserve(fadingGlassRef2.current);
      }
    };
  }, []);
  useEffect(() => {
    const sectionObserver3 = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsSectionVisible3(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (fadingGlassRef3.current) {
      sectionObserver3.observe(fadingGlassRef3.current);
    }

    return () => {
      if (fadingGlassRef3.current) {
        sectionObserver3.unobserve(fadingGlassRef3.current);
      }
    };
  }, []);

  const onClickBtn = (path) => {
    router.push(path);
  };

  return (
    <div className="w-full">
      <div className="pt-[132px] w-full flex flex-col items-center">
        <h1 className="gls-coach">GLS Coach</h1>
      </div>

      <section className="moving-line-container">
        <p className="text-white text-50 whitespace-nowrap ">스트리머와</p>
        <AnimatedLine />
        <p className="text-white text-50 whitespace-nowrap">
          게임 개발자를 위한
        </p>
      </section>

      <section className="ml-[240px] mt-[95px] white text-90">
        <b>저작권</b>
        <p>문제 해결 솔루션</p>
      </section>

      <section ref={scalingWallRef} className="scaling-wall-container">
        <img
          src="/net_walls.svg"
          alt="scaling walls"
          className={`scaling-wall ${isInView ? "show" : ""}`}
        />
        <div className={`overlay-text text-100 ${isInView ? "show" : ""}`}>
          <span className="orange">게임 방송 계약</span>
          <span className="white">의 새로운 경험</span>
        </div>
      </section>

      <section className="appearing-glass-container">
        <div
          ref={fadingGlassRef}
          className={`background-image ${isSectionVisible ? "show" : ""}`}
        ></div>
        <div
          ref={fadingGlassRef2}
          className={`overlay-text-2 ${isSectionVisible2 ? "show" : ""}`}
        >
          <h2 className="text-white text-80">
            <span className="border-b border-[#FF5B15] border-b-[3px]">
              GLS Coach
            </span>
            <span className="text-[#D8D8D8]"> 하나로</span>
          </h2>

          <div className="mt-[47px] ml-[-1px] gray text-30">
            <p>스트리머가 게임 방송을 할 때,</p>
            <p>복잡한 저작권 문제를 한 곳에서 해결할 수 있습니다.</p>
            <p>계약에서 게임 플레이, 방송 제어까지</p>
            <p>
              하나로 손쉽게<span className="text-white"> 라이선스 문제</span>를
              해결하세요.
            </p>
          </div>
        </div>
        <div
          ref={fadingGlassRef3}
          className={`overlay-text-3 ${isSectionVisible3 ? "show" : ""}`}
        >
          <h2 className="text-white text-80">쉬운 저작권 관리</h2>
          <br />
          <br />

          <div className="text-[#D0D0D0] text-30 mr-[8px]">
            <p>게임 개발사도 저작권 관리가 훨씬 쉬워집니다.</p>
            <p>스트리머와의 저작권 계약을 간편하게 체결하고,</p>
            <p>복잡한 방송 조건을 설정할 수도 있습니다.​</p>
          </div>
        </div>
      </section>
      <section
        style={{ height: "600px" }}
        className="flex justify-center gap-[40px] pt-[156px]"
      >
        <button className="btn" onClick={() => onClickBtn("/streamer")}>
          스트리머 <span className="font-light text-[#929292]">이신가요?</span>
        </button>
        <button className="btn" onClick={() => onClickBtn("/game")}>
          게임 개발사{" "}
          <span className="font-light text-[#929292]">이신가요?</span>
        </button>
      </section>
    </div>
  );
}
