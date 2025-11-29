import profile from "../assets/profile.JPG";

export default function Home() {
  return (
    <div className="ml-[1%] mt-5">
      <img src={profile} alt="Profile Pic" className="w-50 h-50 rounded-2xl" />
      <h1 className="text-6xl font-bold">Lemuel Tadeo</h1>
      <h5 className="text-lg font-normal ml-1">
        Full Stack Developer Specializing in React and Laravel
      </h5>
    </div>
  );
}
