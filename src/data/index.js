/**
 * Data Index - Export all data modules
 */
export { navLinks, socialLinks, contactInfo } from "./navigation";
export { projects, projectsPlaceholder } from "./projects";
export { skillGroups } from "./skills";
export { experiences, coreValues, strengths } from "./about";

window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");

  // Thêm một khoảng trễ nhỏ (ví dụ 500ms) để người dùng kịp thấy hiệu ứng
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 0);
});
