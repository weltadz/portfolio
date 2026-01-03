import profile from "../assets/profile.JPG";
import ReactLogo from "../assets/React.png";
import Laravel from "../assets/Laravel.png";
import Tailwind from "../assets/Tailwind.png";
import PHP from "../assets/PHP.png";
import ScreenShotSlider from "../components/ScreenShotSlider";

export default function Home() {
  const techStack = [
    { name: "React", logo: ReactLogo },
    { name: "Laravel", logo: Laravel },
    { name: "Tailwind", logo: Tailwind },
    { name: "PHP", logo: PHP },
  ];
  return (
    <div className="text-white h-screen flex flex-col items-center">
      <div className="profile flex flex-col items-center mt-10 ">
        <img
          src={profile}
          alt="Profile Pic"
          className="w-100 h-100 rounded-2xl "
        />
        <h1 className="text-6xl sm:text-7xl font-bold">Lemuel Tadeo</h1>
        <h5 className="text-sm sm:text-lg font-normal">
          Full Stack Developer Specializing in React and Laravel
        </h5>

        <div className="tech-stack-title mt-10 flex flex-col items-center">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="flex justify-center gap-10">
            {techStack.map((tech) => (
              <div key={tech.name}>
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-15 h-15 mt-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about text-justify p-8 mt-5">
        <h2 className="text-2xl text-center mb-5 font-bold">About Me</h2>
        <p>
          I am Lemuel Tadeo, a dedicated Full Stack Developer specializing in
          modern web application development. My focus is on creating smooth,
          user-friendly digital experiences. I use React and Tailwind CSS for
          clean, responsive front-ends, and I build powerful, reliable back-ends
          using Laravel and PHP. I enjoy taking a project from an initial idea
          all the way to a finished, scalable application. I am passionate about
          writing code that is easy to read, maintain, and expand. I am always
          looking for new ways to solve complex challenges and deliver
          high-quality results.
        </p>
      </div>

      <div className="projects mt-5 text-center">
        <h2 className="text-2xl text-center mb-5 font-bold">Projects</h2>
        <p className="font-bold ">
          Guidance Couseling Appointment Scheduling With Descriptive Analytics
        </p>
        <p className="text-justify pl-8 pr-8 mt-3">
          The Guidance Counseling Appointment Scheduling with Descriptive
          Analytics is a web-based system that helps students book, change, or
          cancel guidance counseling appointments online. Guidance counselors
          can manage schedules and student records easily. The system also shows
          simple reports about appointments and counseling activities to help
          counselors understand student needs and improve their services.
        </p>
      </div>
      <ScreenShotSlider />
    </div>
  );
}
