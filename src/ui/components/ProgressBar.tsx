import { useScrollProgress } from "@/src/lib/hooks/useScrollProgress";

const ProgressBar = () => {
  const scrollPercentage = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[5px] bg-gray-500 z-[50]">
      <div
        className="h-full bg-white transition-[width] duration-100 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
