// ----- OBSERVER ----- //

document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "-30% 0px -15% 0px",
  };

  let observer = new IntersectionObserver(beTouching, options);
  observer.observe(document.querySelector(".info"));

  let observer2 = new IntersectionObserver(beTouching2, options);
  observer2.observe(document.querySelector(".designers"));

  let observer3 = new IntersectionObserver(beTouching3, options);
  observer3.observe(document.querySelector(".design"));

  let observer4 = new IntersectionObserver(beTouching4, options);
  observer4.observe(document.querySelector(".about"));

  let observer5 = new IntersectionObserver(beTouching5, options);
  observer5.observe(document.querySelector(".team"));

  let observer6 = new IntersectionObserver(beTouching6, options);
  observer6.observe(document.querySelector(".contact"));
});

const infoHeading = document.querySelector(".info-heading");
const productItems = document.querySelectorAll(".info-text");
const productImages = document.querySelectorAll(".products-container img");
const designerBackground = document.querySelector(".girl-background");
const designerGirl = document.querySelector(".girl");
const bigCircle = document.querySelector(".big-circle");
const smallCircle = document.querySelector(".small-circle");
const downDesignerCards = document.querySelectorAll(".move-down");
const upDesignerCards = document.querySelectorAll(".move-up");
const designCard = document.querySelector(".digital-design");
const designBall = document.querySelector(".design-ball");
const designWave = document.querySelector(".design-waves");
const designCubic = document.querySelector(".design-cubic");
const designCircle = document.querySelector(".design-circle");
const designDonut = document.querySelector(".design-donut");
const aboutCard = document.querySelector(".about-card");
const aboutBall = document.querySelector(".about-ball");
const aboutWave = document.querySelector(".about-waves");
const aboutCubic = document.querySelector(".about-cubic");
const aboutDonut = document.querySelector(".about-donut");
const teamInfo = document.querySelector(".team-info");
const teamInfoHeading = document.querySelector(".team-info h3");
const secondTeamInfo = document.querySelector(".team-info-text");
const contactCircle = document.querySelector(".contact-circle");
const contactDonut1 = document.querySelector(".contact-donut1");
const contactDonut2 = document.querySelector(".contact-donut2");
const contactBall = document.querySelector(".contact-ball");
const contactWave = document.querySelector(".contact-wave");
const contactBackround = document.querySelector(".contact-background");

function beTouching(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      productItems.forEach((item) => {
        item.classList.add("show-info-text");
        item.classList.remove("hide-info-text");
        item.style.opacity = "1";
      });
      productImages.forEach((item) => {
        item.classList.add("show-info-image");
        item.classList.remove("hide-info-image");
        item.style.opacity = "1";
      });
      infoHeading.classList.add("show-heading");
      infoHeading.classList.remove("hide-heading");
      infoHeading.style.opacity = "1";
    } else {
      productItems.forEach((item) => {
        item.classList.remove("show-info-text");
        item.classList.add("hide-info-text");
        item.style.opacity = "0";
      });
      productImages.forEach((item) => {
        item.classList.remove("show-info-image");
        item.classList.add("hide-info-image");
        item.style.opacity = "0";
      });
      infoHeading.classList.remove("show-heading");
      infoHeading.classList.add("hide-heading");
      infoHeading.style.opacity = "0";
    }
  });
}

function beTouching2(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      designerGirl.classList.add("show-designer-girl");
      designerGirl.classList.remove("hide-designer-girl");
      designerGirl.style.opacity = "1";

      designerBackground.classList.add("show-designer-background");
      designerBackground.classList.remove("hide-designer-background");
      designerBackground.style.opacity = "1";

      smallCircle.classList.add("show-small-circle");
      smallCircle.classList.remove("hide-small-circle");
      smallCircle.style.opacity = "1";

      bigCircle.classList.add("show-big-circle");
      bigCircle.classList.remove("hide-big-circle");
      bigCircle.style.opacity = "1";

      downDesignerCards.forEach((item) => {
        item.classList.add("move-card-down");
        item.classList.remove("hide-card-down");
        item.style.opacity = "1";
      });

      upDesignerCards.forEach((item) => {
        item.classList.add("move-card-up");
        item.classList.remove("hide-card-up");
        item.style.opacity = "1";
      });
    } else {
      designerGirl.classList.remove("show-designer-girl");
      designerGirl.classList.add("hide-designer-girl");
      designerGirl.style.opacity = "0";

      designerBackground.classList.remove("show-designer-background");
      designerBackground.classList.add("hide-designer-background");
      designerBackground.style.opacity = "0";

      smallCircle.classList.remove("show-small-circle");
      smallCircle.classList.add("hide-small-circle");
      smallCircle.style.opacity = "0";

      bigCircle.classList.remove("show-big-circle");
      bigCircle.classList.add("hide-big-circle");
      bigCircle.style.opacity = "0";

      downDesignerCards.forEach((item) => {
        item.classList.remove("move-card-down");
        item.classList.add("hide-card-down");
        item.style.opacity = "0";
      });

      upDesignerCards.forEach((item) => {
        item.classList.remove("move-card-up");
        item.classList.add("hide-card-up");
        item.style.opacity = "0";
      });
    }
  });
}

function beTouching3(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      designCard.classList.add("show-design-card");
      designCard.classList.remove("hide-design-card");
      designCard.style.opacity = "1";

      designBall.classList.add("show-design-ball");
      designBall.classList.remove("hide-design-ball");
      designBall.style.opacity = "1";

      designWave.classList.add("show-design-wave");
      designWave.classList.remove("hide-design-wave");
      designWave.style.opacity = "1";

      designCubic.classList.add("show-design-cubic");
      designCubic.classList.remove("hide-design-cubic");
      designCubic.style.opacity = "1";

      designCircle.classList.add("show-design-circle");
      designCircle.classList.remove("hide-design-circle");
      designCircle.style.opacity = "1";

      designDonut.classList.add("show-design-donut");
      designDonut.classList.remove("hide-design-donut");
      designDonut.style.opacity = "1";
    } else {
      designCard.classList.remove("show-design-card");
      designCard.classList.add("hide-design-card");
      designCard.style.opacity = "0";

      designBall.classList.remove("show-design-ball");
      designBall.classList.add("hide-design-ball");
      designBall.style.opacity = "0";

      designWave.classList.remove("show-design-wave");
      designWave.classList.add("hide-design-wave");
      designWave.style.opacity = "0";

      designCubic.classList.remove("show-design-cubic");
      designCubic.classList.add("hide-design-cubic");
      designCubic.style.opacity = "0";

      designCircle.classList.remove("show-design-circle");
      designCircle.classList.add("hide-design-circle");
      designCircle.style.opacity = "0";

      designDonut.classList.remove("show-design-donut");
      designDonut.classList.add("hide-design-donut");
      designDonut.style.opacity = "0";
    }
  });
}

function beTouching4(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      aboutCard.classList.add("show-about-card");
      aboutCard.classList.remove("hide-about-card");
      aboutCard.style.opacity = "1";

      aboutBall.classList.add("show-about-ball");
      aboutBall.classList.remove("hide-about-ball");
      aboutBall.style.opacity = "1";

      aboutWave.classList.add("show-about-waves");
      aboutWave.classList.remove("hide-about-waves");
      aboutWave.style.opacity = "1";

      aboutCubic.classList.add("show-about-cubic");
      aboutCubic.classList.remove("hide-about-cubic");
      aboutCubic.style.opacity = "1";

      aboutDonut.classList.add("show-about-donut");
      aboutDonut.classList.remove("hide-about-donut");
      aboutDonut.style.opacity = "1";
    } else {
      aboutCard.classList.remove("show-about-card");
      aboutCard.classList.add("hide-about-card");
      aboutCard.style.opacity = "0";

      aboutBall.classList.remove("show-about-ball");
      aboutBall.classList.add("hide-about-ball");
      aboutBall.style.opacity = "0";

      aboutWave.classList.remove("show-about-waves");
      aboutWave.classList.add("hide-about-waves");
      aboutWave.style.opacity = "0";

      aboutCubic.classList.remove("show-about-cubic");
      aboutCubic.classList.add("hide-about-cubic");
      aboutCubic.style.opacity = "0";

      aboutDonut.classList.remove("show-about-donut");
      aboutDonut.classList.add("hide-about-donut");
      aboutDonut.style.opacity = "0";
    }
  });
}

function beTouching5(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      teamInfo.classList.add("show-team-info");
      teamInfo.classList.remove("hide-team-info");
      teamInfo.style.opacity = "1";

      teamInfoHeading.classList.add("show-team-info-heading");
      teamInfoHeading.classList.remove("hide-team-info-heading");
      teamInfoHeading.style.opacity = "1";

      secondTeamInfo.classList.add("show-second-team-info");
      secondTeamInfo.classList.remove("hide-second-team-info");
      secondTeamInfo.style.opacity = "1";
    } else {
      teamInfo.classList.remove("show-team-info");
      teamInfo.classList.add("hide-team-info");
      teamInfo.style.opacity = "0";

      teamInfoHeading.classList.remove("show-team-info-heading");
      teamInfoHeading.classList.add("hide-team-info-heading");
      teamInfoHeading.style.opacity = "0";

      secondTeamInfo.classList.remove("show-second-team-info");
      secondTeamInfo.classList.add("hide-second-team-info");
      secondTeamInfo.style.opacity = "0";
    }
  });
}

function beTouching6(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      contactCircle.classList.add("show-contact-circle");
      contactCircle.classList.remove("hide-contact-circle");
      contactCircle.style.opacity = "1";

      contactDonut1.classList.add("show-contact-donut1");
      contactDonut1.classList.remove("hide-contact-donut1");
      contactDonut1.style.opacity = "1";

      contactDonut2.classList.add("show-contact-donut2");
      contactDonut2.classList.remove("hide-contact-donut2");
      contactDonut2.style.opacity = "1";

      contactBall.classList.add("show-contact-ball");
      contactBall.classList.remove("hide-contact-ball");
      contactBall.style.opacity = "1";

      contactBackround.classList.add("show-contact-background");
      contactBackround.classList.remove("hide-contact-background");
      contactBackround.style.opacity = "1";

      contactWave.classList.add("show-contact-wave");
      contactWave.classList.remove("hide-contact-wave");
      contactWave.style.opacity = "1";
    } else {
      contactCircle.classList.remove("show-contact-circle");
      contactCircle.classList.add("hide-contact-circle");
      contactCircle.style.opacity = "0";

      contactDonut1.classList.remove("show-contact-donut1");
      contactDonut1.classList.add("hide-contact-donut1");
      contactDonut1.style.opacity = "0";

      contactDonut2.classList.remove("show-contact-donut2");
      contactDonut2.classList.add("hide-contact-donut2");
      contactDonut2.style.opacity = "0";

      contactBall.classList.remove("show-contact-ball");
      contactBall.classList.add("hide-contact-ball");
      contactBall.style.opacity = "0";

      contactBackround.classList.remove("show-contact-background");
      contactBackround.classList.add("hide-contact-background");
      contactBackround.style.opacity = "0";

      contactWave.classList.remove("show-contact-wave");
      contactWave.classList.add("hide-contact-wave");
      contactWave.style.opacity = "0";
    }
  });
}
