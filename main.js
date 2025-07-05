document.addEventListener("DOMContentLoaded", function () {
  initSmoothScrolling();
  initNavbarEffects();
  initAnimations();
  initContactForm();
  initLazyLoading();
});

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          location.hash = targetId;
        }
      }
    });
  });
}

function initNavbarEffects() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  let lastScroll = 0;
  const navbarHeight = navbar.offsetHeight;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.style.removeProperty("transform");
      navbar.style.removeProperty("box-shadow");
      return;
    }

    if (currentScroll > lastScroll && currentScroll > navbarHeight) {
      navbar.style.transform = `translateY(-${navbarHeight}px)`;
    } else {
      navbar.style.transform = "translateY(0)";
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    }

    lastScroll = currentScroll;
  });
}

function initAnimations() {
  animateElements(".vm-card", {
    initial: "translateY(20px)",
    final: "translateY(0)",
    transition: "0.6s ease",
  });

  animateElements(".service-card", {
    initial: "translateY(30px)",
    final: "translateY(0)",
    transition: "0.5s ease",
  });

  animateElements(".developer-card", {
    initial: "scale(0.95)",
    final: "scale(1)",
    transition: "0.4s ease-out",
  });
}

function animateElements(selector, options) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = options.final;
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = options.initial;
    el.style.transition = `opacity ${options.transition}, transform ${options.transition}`;
    observer.observe(el);
  });
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    try {
      submitBtn.disabled = true;
      submitBtn.textContent = "Mengirim...";

      await new Promise((resolve) => setTimeout(resolve, 1500));

      showToast(
        "Pesan terkirim! Kami akan segera menghubungi Anda.",
        "success"
      );
      contactForm.reset();
    } catch (error) {
      console.error("Form error:", error);
      showToast("Gagal mengirim pesan. Silakan coba lagi.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

function initLazyLoading() {
  if ("loading" in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    const lazyObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          lazyObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      lazyObserver.observe(img);
    });
  }
}
