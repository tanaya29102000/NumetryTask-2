document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

function loadPage(page) {
  const content = document.getElementById("content");
  let htmlContent = "";

  switch (page) {
    case "home":
      htmlContent = "<h1>Home Page</h1><p>Welcome to My Home page! This is my Home page.</p>";
      break;
    case "about":
      htmlContent =
        "<h1>About Page</h1><p>Welcome to MyWebsite! We are passionate about delivering the best online experience for our users. Our mission is to provide high-quality content and service that cater to the diverse needs of our audience.</p><p>Our team is made up of talented professionals from various fields, all working together to create a platform that is both informative and engaging. Whether you're here to read our blog, learn more about our services, or get in touch with us, we are committed to ensuring you have a great experience.</p><p>Thank you for visiting MyWebsite. We look forward to connecting with you and hope you find everything you're looking for. If you have any questions or feedback, please do not hesitate to reach out to us through our contact page.</p>";
      break;
    case "contact":
      htmlContent = "<h1>Contact Page</h1><p>Contact us for more information.</p>";
      break;
    case "blog":
      htmlContent = "<h1>Blog Page</h1><p>Check out our latest blog posts here.</p>";
      break;
    default:
      htmlContent = "<h1>Home Page</h1><p>Welcome to the Home page!</p>";
  }

  content.innerHTML = htmlContent;
}
