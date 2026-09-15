import { KageLandingPage } from "@designcodeio/threeui/components/KageLandingPage";
import "@designcodeio/threeui/style.css";

export function KageHero() {
  return (
    <div className="fixed inset-0 w-full h-full bg-ink">
      <KageLandingPage
        className="w-full h-full"
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={46}
        bodySize={17}
        headingLetterSpacing={-0.012}
      />
    </div>
  );
}
