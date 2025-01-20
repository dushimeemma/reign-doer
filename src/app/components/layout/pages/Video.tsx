"use client";

import ReactPlayer from "react-player";
import { VIDEO_URL } from "@/app/helpers/constants";
import { VIDEO_STYLES } from "@/app/helpers/styles";
import { VIDEO_CONFIGS } from "@/app/helpers/configs";

export default function VideoPage({
  videoUrl,
  classNames,
}: {
  videoUrl?: string;
  classNames?: string;
}) {
  return (
    <div id="home" className={`${classNames}`}>
      <ReactPlayer
        url={videoUrl ?? VIDEO_URL}
        width="100%"
        height="100%"
        controls={true}
        style={VIDEO_STYLES}
        config={VIDEO_CONFIGS}
      />
    </div>
  );
}
