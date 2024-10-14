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
          maxWidth: "1920px",
          // backgroundColor: "grey",
        }}
      >
        <AnimatedElement classname={"text_1"}>
          <div>
            <span>저작권</span> 때문에
            <br />
            어려움을 겪고 계신가요?
          </div>
        </AnimatedElement>
      </div>
      <div
        style={{
          minHeight: 800,
          minWidth: "1920px",
          maxWidth: "1920px",
          backgroundColor: "#444",
        }}
      >
        test2
      </div>
      <div
        style={{
          minHeight: 800,
          minWidth: "1920px",
          maxWidth: "1920px",
          backgroundColor: "#444",
        }}
      >
        test2
      </div>
      <div
        style={{
          minHeight: 800,
          minWidth: "1920px",
          maxWidth: "1920px",
          backgroundColor: "#404",
        }}
      >
        test2
      </div>
      <div
        style={{
          minHeight: 800,
          minWidth: "1920px",
          maxWidth: "1920px",
          backgroundColor: "#440",
        }}
      >
        test2
      </div>
    </div>
  );
}
