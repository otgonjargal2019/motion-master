import { useEffect, useRef, useState } from "react";
import AnimatedElement from "@/app/components/AnimatedElement";

export default function Game() {
  const imgRef = useRef(null);
  const [isInImgView, setIsInImgView] = useState(false);

  const img2Ref = useRef(null);
  const [isInImg2View, setIsInImg2View] = useState(false);

  const img3Ref = useRef(null);
  const [isInImg3View, setIsInImg3View] = useState(false);

  const img4Ref = useRef(null);
  const [isInImg4View, setIsInImg4View] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInImgView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInImg2View(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (img2Ref.current) {
      observer.observe(img2Ref.current);
    }

    return () => {
      if (img2Ref.current) {
        observer.unobserve(img2Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInImg3View(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (img3Ref.current) {
      observer.observe(img3Ref.current);
    }

    return () => {
      if (img3Ref.current) {
        observer.unobserve(img3Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInImg4View(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (img4Ref.current) {
      observer.observe(img4Ref.current);
    }

    return () => {
      if (img4Ref.current) {
        observer.unobserve(img4Ref.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="title-container text-40">
        <span className="gray">for</span>&nbsp;
        <span className="orange">Game co. / Game IP co.</span>
      </div>

      <section ref={imgRef} className="silver-cubes-container">
        <img
          src="/silver_cubes.png"
          alt="silver cubes"
          className={`silver-cubes scale-05 ${isInImgView ? "showed" : ""}`}
        />
        <div
          className={`overlay-text text-100 motion-y-50 ${
            isInImgView ? "showed" : ""
          }`}
        >
          <span className="white">이상적인</span>
          <br />
          <span className="orange">저작권 보호기술</span>
          <span className="white">을</span>
          <br />
          <span className="gray">현실로.</span>
        </div>
      </section>
      <section ref={img2Ref} className="shining-sun-container">
        <img
          className={`shining-sun motion-x-100 ${isInImg2View ? "showed" : ""}`}
          src="/ellipse.png"
          alt="ellipse"
        />
        <div
          className={`overlay-text scale-05 ${isInImg2View ? "showed" : ""}`}
        >
          <p className="orange text-30">실시간 가이드라인 준수 확인</p>
          <p className="white text-60 mt-[15px]">가이드라인이 지켜질까 걱정?</p>
          <p className="white text-60">이제 그럴 필요 없어요!</p>

          <p className="white text-30 mt-[39px]">
            노력해서 작성한 가이드라인,{" "}
            <span className="gray text-30">
              스트리머가 잘 지킬까 걱정할 필요 없습니다.
            </span>
          </p>
          <p className="gray text-30">
            방송과 게임 안에서 실시간으로 가이드라인을 자동으로 지켜드립니다.
          </p>
        </div>
      </section>
      <section ref={img3Ref} className="abstract-image-container">
        <img
          className={`abstract-image motion-x-minus-50 ${
            isInImg3View ? "showed" : ""
          }`}
          src="3D_Abstract3_(8).png"
          alt="3D Abstract3"
        />
        <div
          className={`overlay-text motion-x-50 ${isInImg3View ? "showed" : ""}`}
        >
          <p className="orange text-30">라이선스 승인 자동화</p>
          <p className="white text-60 mt-[13px]">
            이용허락 요청 처리도 간편하게,
          </p>
          <p className="white text-60">시간을 절약할 수 있습니다.</p>
          <p className="white text-30 mt-[39px]">
            이용허락 요청
            <span className="gray text-30">
              에 대해 일일이 답장할 필요 없이,
            </span>
          </p>
          <p className="gray text-30">
            일반 요청은 <span className="white text-30">자동 승인</span>
            <span className="gray text-30">
              , 개별 요청은 설정에 따라 자동 대응!
            </span>
          </p>

          <p className="gray text-30">
            누가 내 게임을 방송했는지도 손쉽게 확인할 수 있습니다.
          </p>
        </div>
      </section>
      <section ref={img4Ref} className="hairy-image-container">
        <img
          className={`hairy-image scale-05 ${isInImg4View ? "showed" : ""}`}
          src="/48.png"
          alt="hairy image"
        />
        <div
          className={`overlay-text motion-y-50 ${isInImg4View ? "showed" : ""}`}
        >
          <p className="orange text-30 ">
            전자 가이드라인 기반 핵심 콘텐츠 노출 방지
          </p>
          <p className="white text-60 mt-[14px]">
            스포일러 콘텐츠로 인한 매출 하락,
          </p>
          <p className="white text-60">이제 걱정 마세요!</p>
          <p className="gray text-30 mt-[40px]">
            복잡한 콘텐츠 노출 제한 조건도 전자 가이드라인으로 자동 처리됩니다.
          </p>
          <p className="gray text-30">
            스트리머에게 따로 설명하지 않아도
            <span className="white text-30"> 중요한 콘텐츠의 노출</span>
            <span className="gray text-30">을 자동으로 방지해서</span>
          </p>

          <p className="white text-30">
            매출 저하
            <span className="gray text-30">를 막아줍니다.</span>
          </p>

          <p className="gray text-30 mt-[57px]">
            이해하기 어려워서 지키도록 하기 힘들었던 허용/금지 조건들,
          </p>

          <p className="gray text-30">
            이제
            <span className="white text-30"> 자동으로 관리</span>
            <span className="gray text-30">
              되니까 원하는 조건을 마음대로 추가할 수 있습니다.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
