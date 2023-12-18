// ScrollToTopButton.js
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Kiểm tra vị trí cuộn của trang, nếu lớn hơn 300px thì hiển thị nút
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Cuộn về đầu trang khi click nút
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Thêm sự kiện scroll để kiểm tra khi nào hiển thị nút
    window.addEventListener("scroll", handleScroll);

    // Loại bỏ sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
