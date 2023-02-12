import { BlobAvatar } from "../AboutBanner/BlobAvatar/BlobAvatar";
import { FactsList } from "./FactsList/FactsList";

export function AboutBanner() {
  return (
    <div className="mt-[2rem] flex flex-col items-center gap-12 bg-purple-radial lg:mt-0 lg:min-h-[60vh] lg:justify-center lg:gap-20">
      <BlobAvatar />
      <FactsList />
    </div>
  );
}
