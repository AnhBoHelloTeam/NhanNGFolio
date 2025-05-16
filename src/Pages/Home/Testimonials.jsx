export default function Testimonial() {
  return (
    <section className="testimonial--section bg-gray-100 py-8" id="testimonial">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Download CV Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="/Nguyen_Thanh_Nhan_CV.pdf"
            download
            className="bg-blue-700 text-gray-900 text-2xl font-semibold px-10 py-4 rounded-full shadow-lg border-2 border-blue-800 hover:bg-blue-800 hover:scale-110 transition-all duration-300"
          >
            Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay Tải CV Ngay
          </a>
        </div>

        {/* CV Images */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <img
            src="/img/webDT/cv1.png"
            alt="CV Image 1"
            className="max-w-xs w-full h-auto rounded-md shadow-md object-cover"
          />
          <img
            src="/img/webDT/cv2.png"
            alt="CV Image 2"
            className="max-w-xs w-full h-auto rounded-md shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}