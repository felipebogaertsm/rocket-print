// Components:
import HighlightButton from "@/components/buttons/HighlightButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="animate-typewriter">Hello World</h1>
      <div className="min-w-[30%]">
        <HighlightButton>
          <span>Upload de arquivo →</span>
          <span className="pl-8 text-zinc-500 text-xs hidden lg:inline">
            .stl | .step
          </span>
        </HighlightButton>
      </div>
    </main>
  );
}
