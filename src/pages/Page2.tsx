import { PageLayout } from "../components/PageLayout";
import { NextButton } from "../components/NextButton";

export function Page2() {
  return (
    <PageLayout>
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-serif text-pink-600 mb-6">
          My Dearest Mama Ponney ❤️
        </h1>
        <div className="text-xl text-gray-700 leading-relaxed space-y-4">
          <p>You walked into my life and quietly made everything better.</p>
          <p>Your smile calms me. Your presence comforts me.</p>
          <p>I'm grateful for you today, tomorrow, and always.</p>
        </div>
        <div className="pt-8">
          <NextButton to="/3"> Next 💖</NextButton>
        </div>
      </div>
    </PageLayout>
  );
}
