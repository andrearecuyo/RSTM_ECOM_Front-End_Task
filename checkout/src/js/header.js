document.addEventListener("DOMContentLoaded", () => {
  const rateEl = document.querySelector(".rate");
  if (rateEl) {
    const starsWrapper = document.createElement("span");
    starsWrapper.classList.add("stars");

    const starSVG = `
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.22968 4.0108L6.25269 3.57803L4.92077 0.880144C4.84281 0.722895 4.58342 0.722895 4.50681 0.880144L3.17444 3.57803L0.197894 4.0108C0.110981 4.0238 0.037956 4.08473 0.0115237 4.1685C-0.0158046 4.25228 0.00614766 4.34367 0.0702124 4.4046L2.22377 6.5044L1.71574 9.4702C1.70006 9.55711 1.7359 9.64447 1.80713 9.69554C1.87836 9.74751 1.97289 9.75423 2.05084 9.71346L4.71334 8.31345L7.37628 9.71346C7.40943 9.73138 7.44617 9.73989 7.4838 9.73989C7.53129 9.73989 7.57878 9.72511 7.61955 9.69554C7.68988 9.64447 7.72528 9.55711 7.71004 9.4702L7.20201 6.5044L9.35646 4.4046C9.42053 4.34367 9.44203 4.25183 9.41605 4.1685C9.38872 4.08473 9.31704 4.0238 9.22968 4.0108Z" fill="#F5CF3F"/>
      </svg>
    `;
    for (let i = 0; i < 5; i++) {
      starsWrapper.insertAdjacentHTML("beforeend", starSVG);
    }
    rateEl.prepend(starsWrapper);
  }
});
