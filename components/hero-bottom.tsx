import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

export default function HeaderBottom() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex gap-8 justify-center items-center">
        <span>section 1</span>
      </div>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        section 2
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
