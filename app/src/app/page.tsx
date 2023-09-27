// Components:
import HighlightButton from "@/components/buttons/HighlightButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-w-[30%]">
        <HighlightButton>Get started</HighlightButton>
      </div>
    </main>
  );
}
