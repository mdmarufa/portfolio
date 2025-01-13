const gotToTop = () => {
  document.querySelector("main")?.scrollTo({top: 0, behavior: "smooth"})
  console.log("hi")
};

export default gotToTop;