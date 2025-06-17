import {
  bio,
  skills,
  education,
  experience,
  footer,
  featuredProjects,
  dataSections,
  testimonials,
  accolades,
  travels,
  mediaAppearances,
  interiors,
  shortStories,
  music,
} from "./user-data/data.js";
import { html, render } from "https://unpkg.com/lit-html?module";
import { unsafeHTML } from "https://unpkg.com/lit-html/directives/unsafe-html.js?module";

import { URLs } from "./user-data/urls.js";

const { medium, gitConnected, gitRepo } = URLs;

console.log("✅ index.js is running");



async function fetchBlogsFromMedium(url) {
  try {
    const response = await fetch(url);
    const { items, feed } = await response.json();
    document.getElementById("profile-img").src = feed.image;
    populateBlogs(items, "blogs");
  } catch (error) {
    throw new Error(
      `Error in fetching the blogs from Medium profile: ${error}`
    );
  }
}

async function fetchReposFromGit(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    console.log("Fetched repos:", items);  // ✅ Add this line
    populateRepo(items, "repos");
  } catch (error) {
    console.error(`Error in fetching the blogs from repos: ${error}`);
  }
}


async function fetchGitConnectedData(url) {
  try {
    const response = await fetch(url);
    const { basics } = await response.json();
    mapBasicResponse(basics);
  } catch (error) {
    throw new Error(`Error in fetching the blogs from git connected: ${error}`);
  }
}

function mapBasicResponse(basics) {
  const {
    name,
    label,
    image,
    email,
    phone,
    url,
    summary,
    profiles,
    headline,
    blog,
    yearsOfExperience,
    username,
    locationAsString,
    region,
    karma,
    id,
    followers,
    following,
    picture,
    website,
  } = basics;

  window.parent.document.title = name;
}

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  const bioTemplate = html` ${items.map((bioItem) => html`<p>${unsafeHTML(bioItem)}</p>`)}`;
  render(bioTemplate, bioTag);
}


function populateFeaturedProjects(projects) {
  projects.forEach((project) => {
    const container = document.querySelector(`section[data-section='${project.id}'] .colorlib-narrow-content`);
    if (!container) return;

    const template = html`
      <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
      <div class="about-desc">
      <h1>${unsafeHTML(project.title)}</h1>
      </div>
        <!-- Banner in a product-bubble -->
          <div class="product-bubble banner-bubble animate-box" data-animate-effect="fadeInLeft">
            <img src="${project.banner}" alt="${project.title} Banner" style="width: 100%; border-radius: 5px;" />
          </div>
        </div>
        <div class="about-desc">
          ${project.description.map(p => html`<p>${unsafeHTML(p)}</p>`)}
          <div style="text-align: center; margin-top: 15px; margin-bottom: 15px">
            <a href="${project.github}" target="_blank" class="project-link1">View on GitHub</a> |
            <a href="${project.steam}" target="_blank" class="project-link2">Buy on Steam</a>
          </div>
        </div>
      </div>

      <!-- Video + Screenshots in a product-bubble -->
      <div class="product-bubble animate-box" data-animate-effect="fadeInLeft">
        <div class="row" style="margin-bottom: 20px;">
          <div class="col-xxs-12">
            <iframe width="100%" height="480" src="${project.video}" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="row" style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${project.screenshots.map(img => html`
            <a href="${img}" data-lightbox="${project.id}-gallery" style="flex: 1 1 calc(20% - 10px);">
              <img src="${img}" alt="Screenshot" style="width: 100%; border-radius: 5px;" />
            </a>
          `)}
        </div>
      </div>
    `;

    render(template, container);
  });
}


function populatePowerBI(sectionData) {
  const container = document.querySelector(`section[data-section='${sectionData.id}'] .colorlib-narrow-content`);
  if (!container) return;

  const template = html`
    <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
      <div class="about-desc">
        <h1>${unsafeHTML(sectionData.title)}</h1>
        ${sectionData.description.map(p => html`<p>${unsafeHTML(p)}</p>`)}
      </div>
    </div>
  <div class="product-bubble animate-box" data-animate-effect="fadeInLeft">
    <div class="swiper-container powerbi-swiper">
      <div class="swiper-wrapper">
        ${sectionData.screenshots.map((src, index) => html`
          <div class="swiper-slide">
            <a href="${src}" data-lightbox="powerbi-gallery" data-title="Slide ${index + 1}">
              <img src="${src}" style="width: 100%; border-radius: 5px;" />
            </a>
          </div>
        `)}
      </div>
    </div>
    </div>
  `;

  render(template, container);

  // Defer Swiper init to next tick
  setTimeout(() => {
    const slider = container.querySelector('.powerbi-swiper');
    if (slider) {
      new Swiper(slider, {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: slider.querySelector('.swiper-button-next'),
          prevEl: slider.querySelector('.swiper-button-prev'),
        },
      });
    }
  }, 0);
}

function populateTestimonials(items) {
  const container = document.querySelector("section[data-section='testimonials'] .colorlib-narrow-content");
  if (!container || !items?.length) return;

  const template = html`
    ${items.map((t) => html`
      <div class="product-bubble animate-box" data-animate-effect="fadeInLeft">
        <div class="row" style="display: flex; flex-wrap: wrap; gap: 40px; margin-bottom: 40px; align-items: center; flex-direction: ${t.flip ? 'row-reverse' : 'row'};">
          <div style="flex: 1; min-width: 300px; text-align: center;">
            <img src="${t.image}" alt="${t.name}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 50%; margin-bottom: 10px;" />
            <h4 style="margin-bottom: 5px;">${t.name}</h4>
            <p style="margin-bottom: 5px; font-style: italic;">${t.company}</p>
            <a href="${t.linkedin}" target="_blank" class="project-link">LinkedIn Profile</a>
          </div>
          <div style="flex: 2; min-width: 300px;">
            <p style="font-size: 1.1em; line-height: 1.6;">“${t.testimonial}”</p>
          </div>
        </div>
      </div>
    `)}
  `;
  render(template, container);
}

function populateAccolades(items) {
  const container = document.querySelector(`section[data-section='accolades'] .colorlib-narrow-content`);
  if (!container || !items?.length) return;

  const template = html`
    ${items.map((item, i) => html`
      <div class="product-bubble animate-box" data-animate-effect="fadeInLeft">
        <div class="row" style="display: flex; align-items: center; gap: 40px; flex-wrap: wrap;">
          ${i % 2 === 1 ? null : html`
            <div style="flex: 1; min-width: 300px;">
              <div class="swiper-container slider-accolade-${i}">
                <div class="swiper-wrapper">
                  ${item.images.map(src => html`
                    <div class="swiper-slide">
                      <a href="${src}" data-lightbox="accolade-${i}">
                        <img src="${src}" style="width: 100%; border-radius: 8px;" />
                      </a>
                    </div>
                  `)}
                </div>
              </div>
            </div>
          `}
          <div style="flex: 1; min-width: 300px;">
            <h3><strong>${item.title}</strong></h3>
            <p><strong>${item.subtitle}</strong> • ${item.date}</p>
            ${item.description.map(line => html`<p>${line}</p>`)}
          </div>
          ${i % 2 === 1 ? html`
            <div style="flex: 1; min-width: 300px;">
              <div class="swiper-container slider-accolade-${i}">
                <div class="swiper-wrapper">
                  ${item.images.map(src => html`
                    <div class="swiper-slide">
                      <a href="${src}" data-lightbox="accolade-${i}">
                        <img src="${src}" style="width: 100%; border-radius: 8px;" />
                      </a>
                    </div>
                  `)}
                </div>
              </div>
            </div>
          ` : null}
        </div>
      </div>
    `)}
  `;
  render(template, container);

  // Initialize Swipers
  items.forEach((_, i) => {
    const container = document.querySelector(`.slider-accolade-${i}`);
    if (container) {
      new Swiper(container, {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  });
}

function populateSkills(skillSections, id) {
  const skillsTag = document.getElementById(id);
  if (!skillsTag || !skillSections?.length) return;

  const skillsTemplate = html`
    <div style="display: flex; flex-wrap: wrap; gap: 20px;">
      ${[0, 1].map(
        (colIndex) => html`
          <div style="flex: 1 1 45%;">
            ${skillSections
              .filter((_, i) => i % 2 === colIndex)
              .map(
                (section) => html`
                  <h4>${section.category}</h4>
                  <ul class="skills-list">
                    ${section.items.map(
                      (item) => html`<li>${unsafeHTML(item)}</li>`
                    )}
                  </ul>
                `
              )}
          </div>
        `
      )}
    </div>
  `;
  render(skillsTemplate, skillsTag);
}

function populateBlogs(items, id) {
  const projectdesign = document.getElementById(id);
  const createCategoryBadges = (categories) => html`
    <div class="categories-div">
      ${categories.map(
        (category) => html` <div class="profile-badge brown-badge">${category}</div> `
      )}
    </div>
  `;

  const blogTemplate = html`
    ${items.slice(0, 3).map(
      (item) => html`
        <div class="blog-card">
          <div class="blog-content">
            <a href="${item.link}" target="_blank" class="blog-link">
              <p class="blog-heading">${item.title}</p>
              <p class="publish-date">${getBlogDate(item.pubDate)}</p>
              <p class="blog-description">
                ${(/<p>(.*?)<\/p>/g.exec(item.content) || [])[1] || ""}
              </p>
              ${createCategoryBadges(item.categories)}
            </a>
          </div>
          <div class="blog-image">
            <img
              src="${(/<img[^>]+src="([^"]+)"/i.exec(item.content) || [])[1] ||
              "/assets/placeholder.jpg"}"
              alt="${item.title}"
              loading="lazy"
            />
          </div>
        </div>
      `
    )}
  `;

  render(blogTemplate, projectdesign);
}

function populateRepo(items, id) {
  const projectdesign = document.getElementById(id);
  if (!projectdesign || !items?.length) return;

  const statsTemplate = (item) => html`
    <div class="stats-row">
      <div class="language-div">
        <span class="language-dot"></span>
        ${item.language}
      </div>
      <div class="stats-div">
        <img
          src="https://img.icons8.com/ios-filled/16/666666/star--v1.png"
          alt="Stars"
        />
        ${item.stars}
      </div>
      <div class="stats-div">
        <img
          src="https://img.icons8.com/ios-filled/16/666666/code-fork.png"
          alt="Forks"
        />
        ${item.forks}
      </div>
    </div>
  `;

  const repoTemplate = html`
    <div class="repo-wrapper">
      ${items.slice(0, 4).map(
        (item) => html`
          <div class="repo-card">
            <a
              href="https://github.com/${item.author}/${item.name}"
              target="_blank"
              class="repo-link"
            >
              <p class="repo-heading">${item.name}</p>
              <p class="repo-description">${item.description}</p>
              ${statsTemplate(item)}
            </a>
          </div>
        `
      )}
    </div>
  `;

  render(repoTemplate, projectdesign);
}

function populateExp_Edu(items, id) {
  const mainContainer = document.getElementById(id);
  if (!mainContainer || !items?.length) return;

  const detailsTemplate = (details) => html`
    ${details.map(
      (detail) => html` <p class="timeline-text">&blacksquare; ${detail}</p> `
    )}
  `;

  const tagsTemplate = (tags) => html`
    <div class="tags-container">
      ${tags.map((tag) => html`<div class="profile-badge brown-badge">${tag}</div>`)}
    </div>
  `;

  const timelineTemplate = html`
    ${items.map(
      (item) => html`
        <article class="timeline-entry animate-box">
          <div class="timeline-entry-inner">
            <div class="timeline-icon color-2">
              <i class="fa fa-${item.icon}"></i>
            </div>
            <div class="timeline-label">
              <div class="exp-heading">
                <p class="blog-heading">${item.title}</p>
                <span class="publish-date">${item.duration}</span>
              </div>
              <span class="timeline-sublabel">${item.subtitle}</span>
              ${detailsTemplate(item.details)} ${tagsTemplate(item.tags)}
            </div>
          </div>
        </article>
      `
    )}
    <article class="timeline-entry begin animate-box">
      <div class="timeline-entry-inner">
        <div class="timeline-icon color-2"></div>
      </div>
    </article>
  `;

  render(timelineTemplate, mainContainer);
}
function populateTravel(travels) {
  const container = document.querySelector(`section[data-section='travel'] .colorlib-narrow-content`);
  if (!container || !travels?.length) return;

  const template = html`
    ${travels.map((item, i) => html`
      <div class="product-bubble">
        <div class="row" style="display: flex; align-items: center; gap: 40px; flex-wrap: wrap;">
          ${item.images?.length && i % 2 === 0 ? html`
            <div style="flex: 1; min-width: 300px;">
              <div class="swiper-container slider-travel-${i}">
                <div class="swiper-wrapper">
                  ${item.images.map(src => html`
                    <div class="swiper-slide">
                      <a href="${src}" data-lightbox="travel-${i}">
                        <img src="${src}" style="width: 100%; border-radius: 8px;" />
                      </a>
                    </div>
                  `)}
                </div>
              </div>
            </div>
          ` : null}
          <div style="flex: 1; min-width: 300px;">
            <h3><strong>${item.title}</strong></h3>
            <p><strong>${item.subtitle}</strong> ${item.date ? `• ${item.date}` : ''}</p>
            ${item.description.map(line => html`<p>${line}</p>`)}
            ${item.tags?.length ? html`
              <p>
                ${item.tags.map(tag => html`<span class="tag-chip">${tag}</span>`)}
              </p>
            ` : null}
          </div>
          ${item.images?.length && i % 2 === 1 ? html`
            <div style="flex: 1; min-width: 300px;">
              <div class="swiper-container slider-travel-${i}">
                <div class="swiper-wrapper">
                  ${item.images.map(src => html`
                    <div class="swiper-slide">
                      <a href="${src}" data-lightbox="travel-${i}">
                        <img src="${src}" style="width: 100%; border-radius: 8px;" />
                      </a>
                    </div>
                  `)}
                </div>
              </div>
            </div>
          ` : null}
        </div>
      </div>
    `)}
  `;
  render(template, container);

  travels.forEach((_, i) => {
    const swiperEl = document.querySelector(`.slider-travel-${i}`);
    if (swiperEl) {
      new Swiper(swiperEl, {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  });
}

function populateMediaAppearances(items) {
  const container = document.getElementById("mediaAppearances");
  if (!container || !items?.length) return;

  const template = html`
    ${items.map(item => html`
    
      <div class="profile-card" style="flex: 1 1 45%;">
        <div class="profile-header">
          <img class="profile-avatar-logos" src="${item.thumbnail}" alt="${item.title}" />
          <div class="profile-info">
            <h3 class="profile-name">${item.title}</h3>
            <p class="profile-username">${item.platform}</p>
          </div>
        </div>
        <div class="blog-description">
          ${item.description.map(line => html`<p>${line}</p>`)}
                    ${item.fullEpisodeLink ? html`
            <p style="margin-top: 10px;">
              <a href="${item.fullEpisodeLink}" target="_blank" class="project-link">
                 View Full Episode
              </a>
            </p>
          ` : null}

            ${item.mediaType === "video" ? html`
              ${item.embed ? html`
                <iframe 
                  width="100%" 
                  height="315" 
                  src="${item.embed}" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  style="border-radius: 8px;">
                </iframe>
              ` : html`
                <video controls style="width: 100%; border-radius: 8px;">
                  <source src="${item.mediaSrc}" type="video/mp4" />
                  Your browser does not support the video element.
                </video>
              `}
            ` : html`
              <audio controls style="width: 100%; margin-top: 10px;">
                <source src="${item.mediaSrc}" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            `}


        </div>
      </div>
    `)}
  `;
  render(template, container);
}


function populateInteriors(data) {
  const container = document.querySelector(`section[data-section='interiors'] .colorlib-narrow-content`);
  if (!container) return;

  const template = html`
    <!-- Title (outside the product-bubble) -->
    <div class="row row-bottom-padded-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
      <div class="about-desc">
        <h1>${unsafeHTML(data.title)}</h1>
      </div>
    </div>

    <!-- Content bubble -->
    <div class="product-bubble">
      <div class="row animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
        <div class="about-desc">
          ${data.description.map(p => html`<p>${p}</p>`)}
        </div>
      </div>

      <div style="margin-top: 30px;">
        <div class="swiper-container slider-interiors">
          <div class="swiper-wrapper">
            ${data.images.map(img => html`
              <div class="swiper-slide">
                <a href="${img}" data-lightbox="interiors">
                  <img src="${img}" alt="Interior Design Example" class="carousel-image" />
                </a>
              </div>
            `)}
          </div>
        </div>
      </div>
    </div>
  `;

  render(template, container);



  new Swiper('.slider-interiors', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 5,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function populateShortStories(stories) {
  const container = document.querySelector(`section[data-section='stories'] .colorlib-narrow-content`);
  if (!container || !stories?.length) return;

const template = html`
  <!-- Title with no delay -->
  <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
    <div class="about-desc">
      <h1>Short Stories</h1>
      <p>Here are links to my published short stories. I'm working on digital downloads, so check back for updates.</p>
    </div>
  </div>

  <!-- Story Cards -->
  <div class="row" style="display: flex; gap: 30px; flex-wrap: wrap;">
    ${stories.map((story, i) => html`
      <div class="profile-card animate-box delay-${i + 1}" data-animate-effect="fadeInLeft" style="flex: 1 1 30%;">
        <a href="${story.link}" target="_blank">
          <img src="${story.thumbnail}" alt="${story.title}" style="width: 100%; border-radius: 12px; margin-bottom: 15px;" />
        </a>
        <h3 style="margin-bottom: 10px;">${story.title}</h3>
        ${story.description.map(line => html`<p>${line}</p>`)}
        <a href="${story.link}" target="_blank" class="project-link">Read Story</a>
      </div>
    `)}
  </div>
`;


  render(template, container);
}

function populateMusic(data) {
  const container = document.querySelector(`section[data-section='pirate-shanty'] .colorlib-narrow-content`);
  if (!container) return;

  const template = html`
    <div class="product-bubble animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
      <div class="row" style="display: flex; gap: 30px; flex-wrap: wrap; align-items: center;">
        
        <div style="flex: 1 1 300px;">
          <audio controls style="width: 100%; margin-bottom: 20px;">
            <source src="${data.mp3}" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <iframe style="border-radius:12px; width: 100%; height: 352px;" 
            src="${data.spotifyEmbed}" 
            frameborder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>

        <div style="flex: 1 1 300px;">
          <h4>${data.title}</h4>
          ${data.description.map(p => html`<p>${p}</p>`)}
          <p style="margin-top: 10px;">
            <a href="${data.producerLink}" target="_blank" class="project-link">Mixed and Mastered by Velvet Honey</a>
          </p>
          <p style="margin-top: 10px;">
            <a href="${data.hatLink}" target="_blank" class="project-link">Buy the Pirate Hat</a>
          </p>
        </div>

      </div>
    </div>
  `;

  render(template, container);
}





function populateLinks(items, id) {
  const footer = document.getElementById(id);
  if (!footer || !items?.length) return;

  const linkTemplate = (data) => html`
    <li>
      <a
        href="${data.link || "#"}"
        target="${data.link ? "_blank" : ""}"
        @click="${data.func || null}"
      >
        ${data.text}
      </a>
    </li>
  `;

  const columnTemplate = (item) => html`
    <span class="col">
      <p class="col-title">${item.label}</p>
      <nav class="col-list">
        <ul>
          ${item.data.map((data) => linkTemplate(data))}
        </ul>
      </nav>
    </span>
  `;

  const copyrightTemplate = (item) => html`
    <div class="copyright-text no-print">
      ${item.data.map((copyright) => html`<p>${copyright}</p>`)}
    </div>
  `;

  const footerTemplate = html`
    ${items.map(
      (item) => html`
        ${item.label === "copyright-text"
          ? copyrightTemplate(item)
          : columnTemplate(item)}
      `
    )}
  `;

  render(footerTemplate, footer);
}

function getElement(tagName, className) {
  let item = document.createElement(tagName);
  item.className = className;
  return item;
}

function getBlogDate(publishDate) {
  const elapsed = Date.now() - Date.parse(publishDate);

  // Time conversions in milliseconds
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  if (elapsed < msPerMinute) {
    const seconds = Math.floor(elapsed / msPerSecond);
    return `${seconds} seconds ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.floor(elapsed / msPerMinute);
    return `${minutes} minutes ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.floor(elapsed / msPerHour);
    return `${hours} hours ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.floor(elapsed / msPerDay);
    return days == 1 ? `${days} day ago` : `${days} days ago`;
  } else if (elapsed < msPerYear) {
    const months = Math.floor(elapsed / msPerMonth);
    return months == 1 ? `${months} month ago` : `${months} months ago`;
  } else {
    const years = Math.floor(elapsed / msPerYear);
    return years == 1 ? `${years} year ago` : `${years} years ago`;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');

  // Load saved mode from localStorage
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save mode preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});


const lottie = document.getElementById("aboutLottie");

if (lottie) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lottie.play();
      } else {
        lottie.stop();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(lottie);
}




populateBio(bio, "bio");

populateSkills(skills, "skills");
populateFeaturedProjects(featuredProjects)
fetchReposFromGit(gitRepo);
populatePowerBI(dataSections.powerbi);
populateTestimonials(testimonials);
populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");
populateTravel(travels);
populateMediaAppearances(mediaAppearances);
populateAccolades(accolades);
populateInteriors(interiors);
populateShortStories(shortStories);
populateMusic(music);
// fetchBlogsFromMedium(medium);
// fetchGitConnectedData(gitConnected);




populateLinks(footer, "footer");
