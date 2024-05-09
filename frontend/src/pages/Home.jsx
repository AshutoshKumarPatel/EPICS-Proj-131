import { useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import './styles.css';

function Home() {
  const imageUrl = './hero_image.png';
  const mockup = './device_mockup.png';
  const { user } = useUser();
  const navigate = useNavigate();

  const userInfo = [
    {
      name: "Ashutosh Kumar Patel",
      regNo: "21BCE10313",
      role: "Backend Developer",
      imageUrl: "./Ashutosh.png"
    },
    {
      name: "Ansha Goyal",
      regNo: "21BHI10089",
      role: "UI/UX Designer",
      imageUrl: "./Ansha.jpeg"
    },
    {
      name: "Arpan Biswas",
      regNo: "21BAI10352",
      role: "ML Developer",
      imageUrl: "./Arpan.jpg"
    },
    {
      name: "Arush Shrivastava",
      regNo: "21BCY10203",
      role: "Frontend Developer",
      imageUrl: "./Arush.png"
    },
    {
      name: "Kanak",
      regNo: "21BCE11352",
      role: "Data Analyst",
      imageUrl: "./Kanak.jpeg"
    },
    {
      name: "Satvik Gupta",
      regNo: "21BCE11031",
      role: "Data Analyst",
      imageUrl: "./Satvik.jpeg"
    },
    {
      name: "Ananya Mohanty",
      regNo: "21BHI10046",
      role: "UI/UX Designer",
      imageUrl: "./Ananya.jpeg"
    },
    {
      name: "Pragya Choubey",
      regNo: "21BCE10667",
      role: "ML Developer",
      imageUrl: "./Pragya.jpeg"
    },
    {
      name: "Adarsh Kanungo",
      regNo: "21BCE11188",
      role: "Data Analyst",
      imageUrl: "./Adarsh.jpeg"
    },
    {
      name: "Shristi Kushwaha",
      regNo: "21BCE11111",
      role: "Frontend Developer",
      imageUrl: "./Shristi.jpeg"
    },
  ];

  const handleButtonClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <MainLayout>
      {/* <div
        className="flex flex-col items-center justify-center flex-1 text-center font-Poppins w-full h-[80vh] gap-16"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        <h1 className='text-6xl font-bold'>Mental Health <br/>Prediction</h1>
        <p className='w-1/2 text-xl leading-8'>Embark on a journey towards understanding your mental well-being. Our tool uses advanced predictive algorithms to provide personalized insights into your mental health. It’s designed to empower you with knowledge and guide you towards resources and actions that can help improve your mental wellness. Ready to begin?</p>
      </div> */}
      <div className="p-6 bg-white rounded-xl flex items-center space-x-4 w-screen mt-24">
        <div className="flex flex-col gap-8 flex-1 p-8">
          <div className="text-xl font-medium text-blue-700 w-fit bg-blue-200 rounded-lg p-6">#MentalHealthPrediction</div>
          <p className="text-black text-7xl font-bold leading-snug">&apos;&apos;Predict your mental well being and empower it.&apos;&apos;</p>
          <p className="text-gray-500 text-3xl font-bold">Embark on a journey towards understanding your mental well being. Reday to begin ?</p>
          <button onClick={handleButtonClick} type="button" className='bg-blue-500 w-max px-6 py-4 rounded-full text-white text-2xl'>Get Started</button>
        </div>
        <div className="flex flex-1 justify-center">
          <img className="w-2/3" src={imageUrl} alt="Logo" />
        </div>
      </div>
      <div className="flex h-screen mt-24 gap-4">
        <img className="w-2/4 h-3/4" src={mockup} alt="Logo" />
        <div className="w-full p-4 pr-8">
          <p className="text-6xl font-bold text-gray-600">What we do ?</p>
          <p className="text-3xl text-gray-500 font-medium mt-12">Our team uses advanced predictive algorithms to provide personalized insights into your mental health . It&apos;s designed to empower you with knowledge and guide towards resources and actions that can help improve your mental wellness. </p>
        </div>
      </div>
      <p className="text-6xl font-gray-500 font-semibold text-center w-full">Behind the project</p>
      <div className="h-screen grid grid-cols-5 gap-8 p-12 mt-4">
          {userInfo.map((user, index) => (
            <div key={index} className="w-64 h-96 shadow-2xl relative bg-red">
              <img className="w-fit object-contain aspect-square" src={user.imageUrl} alt="Logo" />
              <div className="px-4 py-2 font-medium leading-relaxed mt-4">
                Name: {user.name}
                <br />
                Reg: {user.regNo}
                <br />
                Role: {user.role}
              </div>
            </div>
          ))}
        </div>
    </MainLayout>
  );
}

export default Home;
