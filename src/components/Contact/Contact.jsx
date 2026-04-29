import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#1e1f26] py-24 px-6 md:px-20 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề phần Liên hệ */}
        <div className="relative mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Liên Hệ<span className="text-[#ff4d4d]">.</span>
          </h2>
          <div className="absolute -bottom-4 left-0 w-24 h-2 bg-[#ff4d4d]"></div>
          <p className="mt-8 text-gray-500 font-mono text-sm tracking-[0.3em] uppercase opacity-60">
            // Let's_Build_Something_Great
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* CỘT TRÁI: Thông tin kết nối */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">
                Sẵn sàng cho những thử thách mới
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Tôi luôn sẵn lòng thảo luận về các dự án tiềm năng, cơ hội nghề
                nghiệp tại vị trí{" "}
                <span className="text-white font-bold">
                  Senior Software Engineer
                </span>{" "}
                hoặc các giải pháp công nghệ mới.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-lg border border-gray-700 group-hover:border-[#ff4d4d] transition-all">
                  <i className="fas fa-envelope text-[#ff4d4d]"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                    Email me at
                  </p>
                  <a
                    href="mailto:nadung.hutech@gmail.com"
                    className="text-lg font-bold hover:text-[#ff4d4d] transition-colors"
                  >
                    nadung.hutech@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-lg border border-gray-700 group-hover:border-[#ff4d4d] transition-all">
                  <i className="fas fa-phone-alt text-[#ff4d4d]"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                    Call me at
                  </p>
                  <a
                    href="tel:+84394468285"
                    className="text-lg font-bold hover:text-[#ff4d4d] transition-colors"
                  >
                    +84 394 468 285
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-dashed border-gray-700 flex space-x-6">
              <a
                href="https://github.com/nguyendung113-cyber"
                target="_blank"
                className="text-2xl text-gray-500 hover:text-white transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/nguyen.dung.710310/"
                target="_blank"
                className="text-2xl text-[#ff4d4d] hover:text-white transition-colors"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* CỘT PHẢI: Form liên hệ */}
          <div className="bg-white p-8 md:p-10 shadow-2xl rounded-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Họ & Tên
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-black focus:outline-none focus:border-[#ff4d4d] transition-colors"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-black focus:outline-none focus:border-[#ff4d4d] transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Lời nhắn
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 text-black focus:outline-none focus:border-[#ff4d4d] transition-colors"
                  placeholder="Tôi muốn trao đổi về dự án..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1e1f26] text-white font-black py-4 uppercase tracking-[0.2em] hover:bg-[#ff4d4d] transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
