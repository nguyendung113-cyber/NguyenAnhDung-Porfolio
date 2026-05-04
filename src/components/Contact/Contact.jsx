import React, { useState } from "react";
import { contactInfo, socialLinks } from "../../data";

/**
 * Contact Section - Phần liên hệ với form và thông tin
 */
const Contact = () => {
  const [status, setStatus] = useState("IDLE"); // IDLE, LOADING, SUCCESS, ERROR

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("LOADING");
    
    const formData = new FormData(e.target);
    // Tùy chỉnh tiêu đề email
    formData.append("_subject", `Contact from Portfolio: ${formData.get("subject")}`);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("SUCCESS");
        e.target.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setStatus("ERROR");
    }
  };
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
                  Junior Software Engineer
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
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg font-bold hover:text-[#ff4d4d] transition-colors"
                  >
                    {contactInfo.email}
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
                    href={`tel:${contactInfo.phoneRaw}`}
                    className="text-lg font-bold hover:text-[#ff4d4d] transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-dashed border-gray-700 flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-500 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* CỘT PHẢI: Form liên hệ */}
          <div className="bg-white p-8 md:p-10 shadow-2xl rounded-sm">
            {status === "SUCCESS" ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Gửi thành công!</h3>
                <p className="text-gray-500 mb-6">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại trong thời gian sớm nhất.</p>
                <button 
                  onClick={() => setStatus("IDLE")}
                  className="px-6 py-2 bg-[#1e1f26] text-white hover:bg-[#ff4d4d] transition-colors font-bold uppercase tracking-widest text-xs"
                >
                  Gửi tin nhắn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Các trường ẩn để cấu hình FormSubmit */}
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-4 bg-gray-100 text-gray-800 border-0 focus:ring-2 focus:ring-[#ff4d4d] transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-4 bg-gray-100 text-gray-800 border-0 focus:ring-2 focus:ring-[#ff4d4d] transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full p-4 bg-gray-100 text-gray-800 border-0 focus:ring-2 focus:ring-[#ff4d4d] transition-all outline-none"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full p-4 bg-gray-100 text-gray-800 border-0 focus:ring-2 focus:ring-[#ff4d4d] transition-all resize-none outline-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {status === "ERROR" && (
                  <p className="text-red-500 text-sm font-medium">Đã có lỗi xảy ra. Vui lòng thử lại sau!</p>
                )}

                <button
                  type="submit"
                  disabled={status === "LOADING"}
                  className="w-full py-4 bg-[#1e1f26] text-white font-black uppercase tracking-[0.2em] hover:bg-[#ff4d4d] transition-all disabled:opacity-50 flex justify-center items-center gap-2"
                >
                  {status === "LOADING" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Đang Gửi...
                    </>
                  ) : (
                    "Gửi Tin Nhắn"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
