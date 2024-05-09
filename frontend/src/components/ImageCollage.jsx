import image from "../assets/Images/concert.jpg"
import image1 from "../assets/Images/talk.jpg"
import image2 from "../assets/Images/discussion.jpg"
import image3 from "../assets/Images/music.jpg"

function ImageCollage() {
  return (
    <div className="relative md:w-[600px] md:h-[600px] w-full h-[400px]">
      <img src={image} alt="" className="absolute w-2/6 rounded-lg h-2/6 top-1 left-[20%] blur-[3px]"/>
      <img src={image} alt="" className="absolute rounded-lg w-2/6 h-2/6 bottom-[-5%] right-[22%] blur-[2px] scale-[0.7]"/>
      <img src={image2} alt="" className="absolute rounded-lg w-3/6 h-2/6 top-[20%] right-1 blur-[1px] scale-[0.7]"/>
      <img src={image3} alt="" className="absolute rounded-lg w-3/6 h-2/6 top-[45%] left-2 blur-[1px] scale-[0.9]"/>
      <img src={image1} alt="" className="absolute rounded-lg w-3/6 h-2/6 top-[10%] left-0 blur-[1px] scale-[0.8]"/>
      <img src={image2} alt="" className="absolute rounded-lg w-3/6 h-2/6 top-[55%] left-[50%] blur-[1px] scale-[0.8]"/>
      <img src={image3} alt="" className="absolute rounded-lg w-3/6 h-2/6 top-[10%] left-[30%] blur-0"/>
      <img src={image1} alt="" className="absolute rounded-lg w-3/6 h-2/6 top-[35%] left-[20%] blur-0 scale-[1.2]"/>
      
    </div>
  )
}

export default ImageCollage;
