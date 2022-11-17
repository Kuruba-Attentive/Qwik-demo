import { component$ } from "@builder.io/qwik";
import landscape from "../../images/Com-Landscaping-md.webp";
import snow from "../../images/Snow-Ice-Mgmt-md.webp";
import facts from "../../images/Facilities-Management-md.webp";
import park from "../../images/empty-parking-lot-md.webp";
import land from "../../images/landscape-const-md.webp";

export default component$(() => {
  return (
    <div class="industry">
      <div>
        <h2 class="industry-heading">
          All outdoor services, covered under one roof
        </h2>
      </div>
      <div class="industry-grid">
        <div class="industry-grid-card">
          <div>
            <img
              class="industry-grid-card-image"
              src={landscape}
              alt="landscape"
              loading="lazy"
            />
          </div>
          <p class="industry-grid-card-heading mt-2">Landscape Maintenance</p>
          <div>
            <p class="industry-grid-card-text">
              Get aerial and blueprint takeoffs for landscape maintenance jobs
            </p>
          </div>
          <div class="industry-grid-card-bottom">
            <a href='#' class="industry-grid-card-link" target="_blank">
              Learn more
            </a>
            <img
              class="industry-grid-card-arrow"
              src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/Forward-512.png"
              alt="image1"
              loading="lazy"
            />
          </div>
        </div>
        <div class="industry-grid-card">
          <div>
            <img
              class="industry-grid-card-image"
              src={snow}
              alt="snow"
              loading="lazy"
            />
          </div>
          <p class="industry-grid-card-heading mt-2">Snow Management</p>
          <div>
            <p class="industry-grid-card-text">
              Aerial takeoffs for snow removal areas for one-offs and multi-site
              RFPs
            </p>
          </div>
          <div class="industry-grid-card-bottom">
            <a href='#' class="industry-grid-card-link" target="_blank">
              Learn more
            </a>
            <img
              class="industry-grid-card-arrow"
              src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/Forward-512.png"
              alt="image2"
              loading="lazy"
            />
          </div>
        </div>
        <div class="industry-grid-card">
          <div>
            <img
              class="industry-grid-card-image"
              src={facts}
              alt="facilities"
              loading="lazy"
            />
          </div>
          <p class="industry-grid-card-heading mt-2">Facilities Maintenance</p>
          <div>
            <p class="industry-grid-card-text">
              Automated property measurements for multi-site bids
            </p>
          </div>
          <div class="industry-grid-card-bottom">
            <a href='#' class="industry-grid-card-link" target="_blank">
              Learn more
            </a>
            <img
              class="industry-grid-card-arrow"
              src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/Forward-512.png"
              alt="image3"
              loading="lazy"
            />
          </div>
        </div>
        <div class="industry-grid-card">
          <div>
            <img
              class="industry-grid-card-image"
              src={park}
              alt="parking lot"
              loading="lazy"
            />
          </div>
          <p class="industry-grid-card-heading mt-2">Paving Maintenance</p>
          <div>
            <p class="industry-grid-card-text">
              Get takeoffs done on latest imagery for parking lot maintenance
              jobs
            </p>
          </div>
          <div class="industry-grid-card-bottom">
            <a href='#' class="industry-grid-card-link" target="_blank">
              Learn more
            </a>
            <img
              class="industry-grid-card-arrow"
              src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/Forward-512.png"
              alt="image4"
              loading="lazy"
            />
          </div>
        </div>
        <div class="industry-grid-card last-card">
          <div>
            <img
              class="industry-grid-card-image"
              src={land}
              alt="Landscape construction"
              loading="lazy"
            />
          </div>
          <p class="industry-grid-card-heading mt-2">Landscape Construction</p>
          <div>
            <p class="industry-grid-card-text">
              Automated blueprint takeoffs for all construction jobs including
              landscape, hardscape, and irrigation
            </p>
          </div>
          <div class="industry-grid-card-bottom">
            <a href='#' class="industry-grid-card-link" target="_blank">
              Learn more
            </a>
            <img
              class="industry-grid-card-arrow"
              src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/Forward-512.png"
              alt="image5"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="my-4">
        <a href="https://app.attentive.ai/signup" class="attentive-btn">
          {" "}
          Try for free{" "}
        </a>
      </div>
    </div>
  );
});
