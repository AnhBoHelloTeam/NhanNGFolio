import { useParams, Link } from "react-router-dom";
import { useRef, useState } from "react";
import data from "../../data/index.json";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = data?.portfolio?.find((item) => item.id === id);
  const [selectedImage, setSelectedImage] = useState({ section: null, index: null });

  const loginImagesRef = useRef(null);
  const adminImagesRef = useRef(null);
  const userImagesRef = useRef(null);
  const additionalImagesRef = useRef(null);

  const scrollToSection = (ref, section, index) => {
    setSelectedImage({ section, index });
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!project) {
    return (
      <section className="portfolio--section bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800">Không Tìm Thấy Dự Án</h2>
            <p className="text-lg text-gray-600 mt-4">Rất tiếc, dự án bạn đang tìm kiếm không tồn tại.</p>
            <Link
              to="/#MyPortfolio"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition-colors"
            >
              Quay Lại Danh Mục
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="portfolio--section bg-gray-100 py-12 relative">
      <div className="container mx-auto px-6">
        <Link
          to="/#MyPortfolio"
          className="fixed top-4 left-4 bg-blue-600 text-white text-base font-medium px-4 py-2 rounded-full shadow-lg border border-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 z-10"
        >
          ← Quay Lại
        </Link>
        <div className="mt-12 space-y-12">
          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{project.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src={project.src}
                  alt={project.title}
                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full"
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 text-white text-lg font-medium rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tính Năng Chính</h3>
            <ul className="text-lg text-gray-600 list-none pl-6 space-y-4">
              {project.features?.map((feature, index) => (
                <li key={index} className="flex items-start border-l-2 border-gray-200 pl-4">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Login Images */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Giao Diện Đăng Nhập/Đăng Ký</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {project.loginImages?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Giao diện đăng nhập ${index + 1}`}
                  className="rounded-lg shadow-md hover:scale-110 hover:ring-2 hover:ring-blue-500 transition-all duration-300 cursor-pointer"
                  style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }}
                  onClick={() => scrollToSection(loginImagesRef, "login", index)}
                />
              ))}
            </div>
            <div
              ref={loginImagesRef}
              className={`mt-8 ${selectedImage.section === "login" ? "block animate-slide-up" : "hidden"}`}
            >
              {selectedImage.section === "login" && (
                <img
                  src={project.loginImages?.[selectedImage.index]}
                  alt={`Giao diện đăng nhập lớn ${selectedImage.index + 1}`}
                  className="rounded-lg shadow-lg mx-auto"
                  style={{ maxWidth: "800px", maxHeight: "800px", objectFit: "contain" }}
                />
              )}
            </div>
          </div>

          {/* Admin Interface Images */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Giao Diện Admin</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {project.adminInterfaceImages?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Giao diện admin ${index + 1}`}
                  className="rounded-lg shadow-md hover:scale-110 hover:ring-2 hover:ring-blue-500 transition-all duration-300 cursor-pointer"
                  style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }}
                  onClick={() => scrollToSection(adminImagesRef, "admin", index)}
                />
              ))}
            </div>
            <div
              ref={adminImagesRef}
              className={`mt-8 ${selectedImage.section === "admin" ? "block animate-slide-up" : "hidden"}`}
            >
              {selectedImage.section === "admin" && (
                <img
                  src={project.adminInterfaceImages?.[selectedImage.index]}
                  alt={`Giao diện admin lớn ${selectedImage.index + 1}`}
                  className="rounded-lg shadow-lg mx-auto"
                  style={{ maxWidth: "800px", maxHeight: "800px", objectFit: "contain" }}
                />
              )}
            </div>
          </div>

          {/* User Interface Images */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Giao Diện Người Dùng</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {project.userInterfaceImages?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Giao diện người dùng ${index + 1}`}
                  className="rounded-lg shadow-md hover:scale-110 hover:ring-2 hover:ring-blue-500 transition-all duration-300 cursor-pointer"
                  style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }}
                  onClick={() => scrollToSection(userImagesRef, "user", index)}
                />
              ))}
            </div>
            <div
              ref={userImagesRef}
              className={`mt-8 ${selectedImage.section === "user" ? "block animate-slide-up" : "hidden"}`}
            >
              {selectedImage.section === "user" && (
                <img
                  src={project.userInterfaceImages?.[selectedImage.index]}
                  alt={`Giao diện người dùng lớn ${selectedImage.index + 1}`}
                  className="rounded-lg shadow-lg mx-auto"
                  style={{ maxWidth: "800px", maxHeight: "800px", objectFit: "contain" }}
                />
              )}
            </div>
          </div>

          {/* Additional Images */}
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Ảnh Xem Thêm</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {project.additionalImages?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Ảnh bổ sung ${index + 1}`}
                  className="rounded-lg shadow-md hover:scale-110 hover:ring-2 hover:ring-blue-500 transition-all duration-300 cursor-pointer"
                  style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }}
                  onClick={() => scrollToSection(additionalImagesRef, "additional", index)}
                />
              ))}
            </div>
            <div
              ref={additionalImagesRef}
              className={`mt-8 ${selectedImage.section === "additional" ? "block animate-slide-up" : "hidden"}`}
            >
              {selectedImage.section === "additional" && (
                <img
                  src={project.additionalImages?.[selectedImage.index]}
                  alt={`Ảnh bổ sung lớn ${selectedImage.index + 1}`}
                  className="rounded-lg shadow-lg mx-auto"
                  style={{ maxWidth: "800px", maxHeight: "800px", objectFit: "contain" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}