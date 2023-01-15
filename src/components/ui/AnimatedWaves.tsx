export const AnimatedWaves = () => {
  return (
    <>
      <div
        className={
          "absolute bottom-0 left-0 h-4/5 w-[200%] animate-wave rounded-[1000%_1000%_0_0] bg-m-wave opacity-80 "
        }
      ></div>
      <div
        className={
          "absolute left-0 -bottom-5 h-4/5 w-[200%] animate-[wave_18s_linear_infinite] rounded-[1000%_1000%_0_0] bg-m-wave opacity-80"
        }
      ></div>
      <div
        className={
          "absolute -bottom-10 left-0 h-4/5 w-[200%] animate-[wave_20s_-1s_reverse_infinite] rounded-[1000%_1000%_0_0] bg-m-wave opacity-90 "
        }
      ></div>
    </>
  );
};
