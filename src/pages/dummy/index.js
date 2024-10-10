import AnimatedElement from "@/app/components/AnimatedElement";

export default function DummyPage() {
  return (
    <div>
      <AnimatedElement classname={"just_test1"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100vw",
            width: "100%",
            maxHeight: "100vh",
            height: "100vh",
            overflow: "hidden",
            // backgroundColor: "red",
          }}
        >
          <h2>Test 2</h2>
          <p>This is test website 2 This is test website 2</p>
        </div>
      </AnimatedElement>

      <AnimatedElement
        classname={"moving_walls"}
        // style={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   maxWidth: "100vw",
        //   width: "100%",
        //   maxHeight: "calc(100vw * 0.3784860557768924)",
        //   height: "calc(100vw * 0.3784860557768924)",
        //   backgroundColor: "green",
        // }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100vw",
            width: "100%",
            maxHeight: "calc(100vw * 0.3784860557768924)",
            height: "calc(100vw * 0.3784860557768924)",
            // backgroundColor: "white",
          }}
        >
          <img src="/Group.svg" alt="moving walls" style={{ width: "50%" }} />
        </div>
      </AnimatedElement>

      <AnimatedElement classname="just_test2">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100vw",
            width: "100%",
            maxHeight: "100vh",
            height: "100vh",
            overflow: "hidden",
            // backgroundColor: "grey",
          }}
        >
          <h2>Test 3</h2>
          <p>This is test website 3 This is test website 3</p>
        </div>
      </AnimatedElement>
    </div>
  );
}
