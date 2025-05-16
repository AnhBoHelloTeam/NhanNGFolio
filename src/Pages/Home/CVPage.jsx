import { Link } from "react-router-dom";
import data from "../../data/index.json";

export default function CVPage() {
  return (
    <section className="bg-gray-100 py-8 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header: Back Button and Download CV */}
        <header className="sticky top-0 bg-gray-100 z-10 py-4 flex justify-between items-center">
          <Link
            to="/#MyPortfolio"
            className="bg-blue-600 text-white text-sm font-medium px-3 py-1.5 rounded-full shadow-lg border border-white hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            ← Quay Lại
          </Link>
          <a
            href="/Nguyen_Thanh_Nhan_CV.pdf"
            download
            className="bg-white text-blue-800 text-5xl font-bold px-12 py-6 rounded-xl shadow-xl border-4 border-blue-800 hover:bg-blue-800 hover:text-white hover:scale-110 transition-all duration-300"
          >
            Tải CV
          </a>
        </header>

        {/* Images */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <img
            src="/img/webDT/cv1.png"
            alt="Project 1"
            className="max-w-xs w-full h-auto rounded-md shadow-md object-cover"
          />
          <img
            src="/img/webDT/cv2.png"
            alt="Project 2"
            className="max-w-xs w-full h-auto rounded-md shadow-md object-cover"
          />
        </div>

        {/* CV Content */}
        <div className="bg-white border border-gray-200 rounded-md shadow-md p-8 mt-6 animate-fade-in font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4">
            {/* Left Column: Contact, Skills */}
            <div className="min-w-[200px] flex-shrink-0 lg:border-r lg:border-gray-200 lg:pr-4 space-y-4">
              <div className="border border-gray-300 rounded-lg shadow-md p-8">
                <a
                  href="/Nguyen_Thanh_Nhan_CV.pdf"
                  download
                  className="inline-block mb-4 bg-white text-blue-800 text-5xl font-bold px-12 py-6 rounded-xl shadow-xl border-4 border-blue-800 hover:bg-blue-800 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay
                </a>
                <h1 className="text-7xl font-bold text-gray-800">NGUYỄN THÀNH NHÂN</h1>
                <p className="text-5xl text-blue-700 font-semibold">Fullstack Developer Intern</p>
              </div>
              <div className="border border-gray-300 rounded-lg shadow-md p-8">
                <h3 className="text-5xl font-semibold text-blue-700 mb-2">Thông Tin Liên Hệ</h3>
                <p className="text-5xl text-gray-700">0766776855</p>
                <p className="text-5xl text-gray-700">nhanng.thdhk4@gmail.com</p>
                <p className="text-5xl text-gray-700">175 Đỗ Quang Street</p>
                <p className="text-5xl text-gray-700">
                  <a
                    href="https://github.com/AnhBoHelloTeam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 hover:underline"
                  >
                    github.com/AnhBoHelloTeam
                  </a>
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg shadow-md p-8">
                <h3 className="text-5xl font-semibold text-blue-700 mb-2">Kỹ Năng</h3>
                <h4 className="text-5xl font-medium text-gray-700">Kỹ Năng Kỹ Thuật</h4>
                <ul className="text-5xl text-gray-700 list-disc pl-4 space-y-1">
                  <li>JavaScript (Node.js, React.js, NestJS)</li>
                  <li>Python (Django, Flask)</li>
                  <li>Java (Spring Boot)</li>
                  <li>Flutter & Dart</li>
                  <li>HTML, CSS</li>
                  <li>Databases: MongoDB, MySQL, PostgreSQL</li>
                </ul>
                <h4 className="text-5xl font-medium text-gray-700 mt-3">Kỹ Năng Mềm</h4>
                <ul className="text-5xl text-gray-700 list-disc pl-4 space-y-1">
                  <li>Teamwork & Communication</li>
                  <li>Problem Solving & Logical Thinking</li>
                  <li>Self-learning & Documentation</li>
                  <li>Time Management</li>
                  <li>Presentation Skills</li>
                </ul>
              </div>
            </div>

            {/* Right Column: About, Education, Experience, Projects */}
            <div className="space-y-4">
              <div className="border border-gray-300 rounded-lg shadow-md p-8">
                <h3 className="text-5xl font-semibold text-blue-700 mb-2">Giới Thiệu</h3>
                <p className="text-5xl text-gray-700 leading-relaxed">
                  Tôi là một sinh viên Công nghệ Thông tin đam mê phát triển phần mềm và mạng máy tính. Tôi không ngừng nâng cao kỹ năng kỹ thuật thông qua các dự án thực tế, thực tập và công việc tự do. Tôi yêu thích giải quyết vấn đề, làm việc nhóm và học hỏi công nghệ mới để trở thành một lập trình viên fullstack chuyên nghiệp.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg shadow-md p-8">
                <h3 className="text-5xl font-semibold text-blue-700 mb-2">Học Vấn</h3>
                <div className="mb-3">
                  <h4 className="text-5xl font-medium text-gray-700">Đông Á University</h4>
                  <p className="text-5xl text-gray-700">Information Technology Engineer | 2022 - 2026</p>
                </div>
                <div>
                  <h4 className="text-5xl font-medium text-gray-700">Chinh Nguyen Computer</h4>
                  <p className="text-5xl text-gray-700">Computer Training Program | 2022 - 2024</p>
                </div>
              </div>
              <div className="border border-gray-300 rounded-lg shadow-md p-8">
                <h3 className="text-5xl font-semibold text-blue-700 mb-2">Kinh Nghiệm Làm Việc</h3>
                <div className="mb-3">
                  <h4 className="text-5xl font-medium text-gray-700">Chinh Nguyen Computer</h4>
                  <p className="text-5xl text-gray-700">Sep 2022 - Nov 2024</p>
                  <ul className="text-5xl text-gray-700 list-disc pl-4 space-y-1">
                    <li>Tư vấn và hỗ trợ khách hàng tại cửa hàng.</li>
                    <li>Quản lý SEO cho website và đăng quảng cáo (Facebook, ChợTốt).</li>
                    <li>Sửa chữa phần cứng và cài đặt phần mềm.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-5xl font-medium text-gray-700">IT Support Assistant (Part-time)</h4>
                  <p className="text-5xl text-gray-700">Dec 2022 - Present</p>
                  <ul className="text-5xl text-gray-700 list-disc pl-4 space-y-1">
                    <li>Hỗ trợ sinh viên và nhân viên giải quyết vấn đề kỹ thuật.</li>
                    <li>Cài đặt công cụ phát triển và hệ điều hành.</li>
                    <li>Hỗ trợ gỡ lỗi phần mềm và cấu hình hệ thống.</li>
                  </ul>
                </div>
              </div>
              <div className="border border-gray-300 rounded-lg shadow-md p-8">
                <h3 className="text-5xl font-semibold text-blue-700 mb-2">Dự Án</h3>
                {data.portfolio.slice(1, 4).map((project) => (
                  <div key={project.id} className="mb-3">
                    <h4 className="text-5xl font-medium text-gray-700">{project.title}</h4>
                    <p className="text-5xl text-gray-700">{project.description}</p>
                    <p className="text-5xl text-gray-700">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 hover:underline"
                      >
                        {project.github}
                      </a>
                    </p>
                    <p className="text-5xl text-gray-700">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 hover:underline"
                      >
                        {project.demo}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
