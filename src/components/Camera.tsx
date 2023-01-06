import { useEffect, useRef, useState } from "react";

interface CameraProps {
  snapshot: string | undefined;
  setSnapshot: React.Dispatch<React.SetStateAction<string | undefined>>;
  isMounted: boolean;
}
const Camera: React.FC<CameraProps> = ({
  snapshot,
  setSnapshot,
  isMounted,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream>();
  const [cameraIsOpen, setCameraIsOpen] = useState(true);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        setMediaStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (cameraIsOpen) {
      getMedia();
    }

    return () => {
      if (mediaStream && mediaStream.getTracks()) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [cameraIsOpen]);

  const takeSnapshot = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const snapshotUrl = canvas.toDataURL("image/png");
        setSnapshot(snapshotUrl);
      }
    }
  };

  const handleStopVideo = () => {
    if (mediaStream && mediaStream.getTracks()) {
      mediaStream.getTracks().forEach((track) => track.stop());
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div>
      {!cameraIsOpen ? (
        <div className={`flex flex-col items-center justify-center`}>
          <img src={snapshot} alt="Snapshot" />
          <div
            className={`flex w-full flex-col items-center justify-center gap-3 bg-white bg-opacity-10 py-7 backdrop-blur-lg`}
          >
            <button
              className={`rounded-md bg-gray-100 py-2 px-4 hover:bg-gray-200`}
            >
              Save image!
            </button>
            <button
              onClick={() => {
                setCameraIsOpen(true);
                setSnapshot(undefined);
              }}
              className={`text-sm font-light underline underline-offset-2`}
            >
              Retry?
            </button>
          </div>
        </div>
      ) : (
        <div className={`flex flex-col items-center`}>
          <video ref={videoRef} autoPlay />
          <div
            className={`flex w-full items-center justify-center bg-white bg-opacity-80 py-7 backdrop-blur-lg`}
          >
            <button
              onClick={() => {
                takeSnapshot();
                setCameraIsOpen(false);
              }}
              className={`rounded-lg bg-pink-100 py-4 px-8`}
            >
              Take snapshot
            </button>
          </div>
        </div>
      )}
      <button
        onClick={handleStopVideo}
        className={` h-12 w-48 rounded-md bg-fuchsia-300`}
      >
        Stop video
      </button>
    </div>
  );
};

export default Camera;
