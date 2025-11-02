import { Link } from "react-router-dom";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header: Back Button */}
        <header className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white text-gray-700 text-sm font-semibold px-6 py-3 rounded-xl shadow-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
          >
            <span>←</span>
            Back to Home
          </Link>
        </header>

        {/* CV Images */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800" style={{ letterSpacing: '1px' }}>
            My Curriculum Vitae
          </h1>
          <p className="text-center text-gray-600 mb-8">
            A detailed overview of my professional journey and experience.
          </p>

          <div className="space-y-6">
            <img
              src="/cv1.jpg"
              alt="CV Page 1"
              className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/cv2.jpg"
              alt="CV Page 2"
              className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/cv3.jpg"
              alt="CV Page 3"
              className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
