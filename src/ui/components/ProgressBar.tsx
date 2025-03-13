import { useScrollProgress } from "@/src/lib/hooks/useScrollProgress";

const ProgressBar = () => {
  const scrollPercentage = useScrollProgress();

  return (
    <div className="w-full h-[2px] bg-gray-500 z-[]">
      <div
        className="h-full bg-white transition-[width] duration-100 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
