import React from 'react';
import TrackVisibility from "react-on-screen";
import Skill from "./Skill";

const progressData = [
  {
    id: 1,
    title: "Web, Web Application Development",
    percantage: 80,
    progressColor: "#FF4B7D",
  },
  {
    id: 2,
    title: "Photoshop & Lightroom",
    percantage: 65,
    progressColor: "#FF4B7D",
  },
  {
    id: 3,
    title: "Premiere Pro",
    percantage: 60,
    progressColor: "#FF4B7D",
  },
  {
    id: 4,
    title: "App Development",
    percantage: 60,
    progressColor: "#FF4B7D",
  },
  {
    id: 5,
    title: "Back End",
    percantage: 70,
    progressColor: "#FF4B7D",
  },
];

const ProgressbarTwo = () => {
  return (
    <>
      {progressData.map((progress) => (
        <TrackVisibility
          once
          key={progress.id}
          className="single-progress"
        >
          <Skill progress={progress} />
        </TrackVisibility>
      ))}
    </>
  )
}

export default ProgressbarTwo;
