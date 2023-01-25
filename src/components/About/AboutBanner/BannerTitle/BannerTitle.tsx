export const BannerTitle = ({
  isSectionInView,
}: {
  isSectionInView: boolean;
}) => {
  return (
    <div className="flex min-w-[80%] justify-between text-2xl font-bold md:text-4xl">
      <h2
        className="font-poppins"
        style={{
          transform: isSectionInView ? "none" : "translateY(-100%)",
          opacity: isSectionInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Some facts{" "}
      </h2>
      <p>
        <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-[transparent]">
          about me
        </span>{" "}
        <span className="text-2xl md:text-4xl">🫡</span>
      </p>
    </div>
  );
};
