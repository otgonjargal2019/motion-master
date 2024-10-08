import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

export default function AnimatedElement({ children, classname, style }) {
  const ref = useRef(null);

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    // console.log("ref", ref);

    if (ref.current) {
      // console.log("ref.current", ref.current);
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <section ref={ref} style={style}>
      <div
        className={classNames([
          classname,
          isInView === true ? "show" : "hided",
        ])}
				style={{
					width: "100%",
					height: "100%",
				}}
      >
        {children}
      </div>
    </section>
  );
}
