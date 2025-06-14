import { PageTitle } from "./components";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4 pb-20">
      <section className="relative flex h-[300px] w-full flex-col items-center justify-center bg-gradient-to-b from-white/10 via-white/10 to-white px-10 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:bg-[url(/images/bg.svg)] before:bg-cover before:bg-scroll before:bg-center before:bg-no-repeat before:opacity-10 before:backdrop-hue-rotate-90 sm:px-20">
        <PageTitle />
      </section>
      <section className="flex w-10/12 flex-col gap-12 sm:w-[550px] md:w-[750px]">
        {children}
      </section>
    </div>
  );
}
