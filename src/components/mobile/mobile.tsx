import { component$ } from "@builder.io/qwik";
import showup from '../../images/mobile-show-up.webp'
import mobileimage from '../../images/mobile-original.webp'
import note from '../../images/mobile-note.webp'
import help from '../../images/mobile-help-ops.webp'


export default component$(() => {
  return (
    <section id="Attentive-onsite" class="p-2 w-100">
      <div class="text-center">
        <p class="h1 p-sm-2 m-0 mobile-head">Attentive OnSite</p>
        <p class="m-0 p-0">Mobile & Tablet App for your on-site assistance</p>
        <div class="md:flex lg:mx-5 md:px-3 lg:px-5 px-2 justify-center items-center">
          <div class="p-sm-4 d-flex justify-center items-center">
            <div class="px-lg-3 detail-container">
              <div class="flex items-center main-content">
                <div class="icon">
                  <img
                    src={showup}
                    alt="prepared"
                    class="img-fluid"
                  />
                </div>
                <div class="content">
                  Show up prepared on site with accurate sitemaps
                </div>
              </div>
              <div class="flex items-center main-content">
                <div class="icon">
                  <img
                    src={note}
                    alt="note"
                    class="img-fluid"
                  />
                </div>
                <div class="content">
                  Note customer requirements by geotagging site data
                </div>
              </div>
              <div class="flex items-center main-content">
                <div class="icon">
                  <img
                    src={help}
                    alt="help ops"
                    class="img-fluid"
                  />
                </div>
                <div class="content">
                  Help your Ops team plan better with real-time site data
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center md:justify-start">
            <div class="mobile-app-img">
              <img
                src={mobileimage}
                loading="lazy"
                alt='attentive onsite'
              />
            </div>
          </div>
        </div>
      </div>
      <div class="text-center my-4">
        <a href="#Book-Demo" class="attentive-btn">
          Book Demo
        </a>
      </div>
    </section>
  );
});
