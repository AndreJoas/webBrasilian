// export default Video;export const videoq={width:'2%', height:'2%'}
import vid from "./imgIcons/quiz.mp4"

const Quizv = () => {
  return (
    <iframe
      width="100%"
      height="86%"
      src={vid}
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Quizv;