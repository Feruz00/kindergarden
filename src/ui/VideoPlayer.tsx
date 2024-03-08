// YouTubePlayer.tsx
import React from 'react';
import ReactPlayer from 'react-player';

interface YouTubePlayerProps {
  url: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url }) => {
  return (
    <div className="youtube-player-wrapper">
      {/* <ReactPlayer
        url={`${process.env.SERVER}/${url}`}
        controls
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: {
              showinfo: 1,
              modestbranding: 1,
              rel: 0,
              color: 'white',
            },
          },
        }}
      /> */}
      <video controls width="100%" height="auto">
        <source src={`${process.env.SERVER}/${url}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default YouTubePlayer;
