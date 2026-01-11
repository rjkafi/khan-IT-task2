const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtns = document.querySelectorAll(".ctaBtn");
const modal = document.getElementById("ctaModal");
const closeModal = document.getElementById("closeModal");
const servicesCardContainer = document.getElementById("servicesContainer");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.classList.remove("hidden");
    menuBtn.innerHTML = `<i class="fa-solid fa-xmark text-gray-600"></i>`;
  } else {
    mobileMenu.classList.add("hidden");
    menuBtn.innerHTML = `<i class="fa-solid fa-bars text-gray-600"></i>`;
  }
});
// Open modal for  CTA buttons
ctaBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Features/Services Data
const servicesData = [
  {
    title: "SEO Service",
    description:
      "Improve Google rankings and gain consistent, long-term traffic.",
    icon: "./icons/seo.svg",
  },
  {
    title: "Web Design",
    description: "Create websites that convert visitors into customers.",
    icon: "./icons/web-design.svg",
  },
  {
    title: "Facebook Ads",
    description:
      "Connect with your target audience on their preferred platforms.",
    icon: "./icons/facebook-ads.svg",
  },
  {
    title: "Google Ads",
    description: "Reach customers actively searching for your services.",
    icon: "./icons/google-ads.svg",
  },
  {
    title: "Content Writing",
    description: "Build trust and improve rankings with compelling content.",
    icon: "./icons/content-writting.svg",
  },
  {
    title: "Branding",
    description: "Differentiate your business and build customer loyalty.",
    icon: "./icons/branding.svg",
  },
  {
    title: "UI/UX Design",
    description: "Design user experiences that increase conversions.",
    icon: "./icons/ui_ux-design.svg",
  },
  {
    title: "Graphic Design",
    description: "Develop professional visuals to enhance credibility.",
    icon: "./icons/graphics-design.svg",
  },
];

servicesData.forEach((service) => {
  // create card
  const card = document.createElement("article");
  card.className =
    "rounded-xl border border-gray-200 p-6 hover:border-blue-500 hover:bg-[#F0F7FF] hover:shadow-lg transition duration-300";
  card.innerHTML = `
  <img
        class="w-14 h-14 mb-6"
        src="${service.icon}"
        alt="${service.title}"
      />

      <h3 class="text-2xl md:text-xl font-semibold text-c ">
        ${service.title}
      </h3>
      <p class="text-d text-sm text-[#65758B] mt-3">${service.description}</p>
  `;
  servicesCardContainer.appendChild(card);
});
