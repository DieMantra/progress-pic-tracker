import Image from "next/image";
import React, { useState } from "react";
import Webcam from "react-webcam";
import Camera from "../components/Camera";
import BottomNav from "../components/layouts/BottomNav";

const dashboard = () => {
  const [snapshot, setSnapshot] = useState<string | undefined>();
  const [cameraIsOpen, setCameraIsOpen] = useState(false);

  return (
    <>
      <Image
        src="/dot-texture.jpg"
        alt="hero section cartwheel"
        className="fixed top-0 z-[-10] h-[100vh] w-[100vw] object-cover opacity-40"
        width={2000}
        height={1000}
        draggable={false}
      />
      <div className="fixed top-0 z-[-10] h-full w-full bg-gradient-to-b from-white via-white to-purple-100 opacity-90"></div>
      <main className="pt-12">
        <div className={`flex items-center justify-center `}>
          {/* {cameraIsOpen ? (
            <Camera
              snapshot={snapshot}
              setSnapshot={setSnapshot}
              isMounted={cameraIsOpen}
            />
          ) : null} */}

          <Webcam audio={false} />
        </div>
      </main>
      <BottomNav setCameraIsOpen={setCameraIsOpen} />
    </>
  );
};

export default dashboard;
