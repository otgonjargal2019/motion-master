import AnimatedElement from "@/app/components/AnimatedElement";

import "@/styles/streamer.scss";

export default function Streamer() {
  return (
    <div className="bg-black max-w-[1920px] min-h-[100vh] relative">
      <AnimatedElement classname={"streamer_page_title"}>
        <div>
          <div>
            <span>for</span>&nbsp;<span>Streamer</span>
          </div>
        </div>
      </AnimatedElement>

      <div className="min-h-[920px] overflow-y-hidden overflow-x-hidden relative top-[-50px]">
        <AnimatedElement classname={"streamer_strip_2"}>
          <div>
            <div>
              <span>
                Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright{" "}
              </span>
            </div>
            <div>
              <span>
                Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright{" "}
              </span>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement classname={"streamer_strip_1"}>
          <div>
            <div>
              <span>
                Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright{" "}
              </span>
            </div>
            <div>
              <span>
                Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ Copyright Ⓒ
                Copyright Ⓒ Copyright Ⓒ Copyright{" "}
              </span>
            </div>
          </div>
        </AnimatedElement>
      </div>

      <div
        style={{
          marginTop: -400,
          minHeight: 800,
          minWidth: "1920px",
          maxWidth: "100vw",
          backgroundColor: "grey",
        }}
      >
        test
      </div>
      <div
        style={{ minHeight: 800, maxWidth: "100vw", backgroundColor: "#444" }}
      >
        test2
      </div>
      <div
        style={{ minHeight: 800, maxWidth: "100vw", backgroundColor: "#444" }}
      >
        test2
      </div>
      <div
        style={{ minHeight: 800, maxWidth: "100vw", backgroundColor: "#444" }}
      >
        test2
      </div>
      <div
        style={{ minHeight: 800, maxWidth: "100vw", backgroundColor: "#444" }}
      >
        test2
      </div>
    </div>
  );
}
