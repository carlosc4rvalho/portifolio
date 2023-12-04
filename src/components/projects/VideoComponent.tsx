// src/components/VideoComponent.tsx
import React from 'react';
import styles from './VideoComponent.module.css';

interface VideoComponentProps {
  videoUrl: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoUrl }) => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted width="450" height="350">
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default VideoComponent;
