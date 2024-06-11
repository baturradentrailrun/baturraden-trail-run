import ReactPlayer from "react-player/lazy";
export const VideoComponent = () => {
  return (
    <div>
      <iframe
        src="https://drive.google.com/file/d/1LvuyUzUUshzAPbdDjNucQVbMqWmvD74-/preview"
        width="640"
        height="300"
        allow="autoplay"
        allowFullScreen
        className="rounded-2xl w-[300px] border border-slate-900 shadow-lg lg:w-[600px]"
      ></iframe>
    </div>
  );
};
