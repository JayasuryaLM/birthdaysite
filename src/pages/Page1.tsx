import { PageLayout } from "../components/PageLayout";
import { NextButton } from "../components/NextButton";

export function Page1() {
  return (
    <PageLayout>
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-serif text-pink-600 mb-4">
          Happy Birthday, Mama Ponney!! ❤️
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Today is special because you were born.
        </p>
        <div className="pt-8">
          <NextButton to="/2">👉 Next 💕</NextButton>
        </div>
      </div>
    </PageLayout>
  );
}
