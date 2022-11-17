import { component$ } from "@builder.io/qwik";
import Logo from "../../images/Attentive_02-sm.webp";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";
import linkedin from "../../images/linkedin.svg";

export default component$ (() => {
    return (
      <div class="py-8">
        <div class="">
          <div class="flex justify-center gap-6 xl:gap-8 flex-wrap">
            <div id="footer-logo" class="col-lg-3 col-md-12 mt-3 mb-3">
              <a href="/">
                <img
                  src={Logo}
                  style="margin-bottom: 20px"
                  alt="Attentive Logo"
                />
              </a>
            </div>
  
            <div className="flex justify-center gap-6 xl:gap-8 ">
              <div
                id="industries-footer-link"
                class="col-list col-lg-3 col-md-4 col-sm-12 mt-3"
              >
                <ul class="opacity-8">
                  <li class="mb-3">
                    <p>
                      <a href="#">Industries</a>
                    </p>
                  </li>
  
                  <li class="mb-3">
                    <a
                      class="text-nowrap"
                      target="_blank"
                      href="/landscape-maintenance/"
                    >
                      Landscape Maintenance
                    </a>
                  </li>
                  <li class="mb-3">
                    <a
                      class="text-nowrap"
                      target="_blank"
                      href="/facilities-maintenance/"
                    >
                      Facilities Maintenance
                    </a>
                  </li>
                  <li class="mb-3">
                    <a
                      class="text-nowrap"
                      target="_blank"
                      href="/paving-maintenance/"
                    >
                      Paving Maintenance
                    </a>
                  </li>
                  <li class="mb-3">
                    <a
                      class="text-nowrap"
                      target="_blank"
                      href="/snow-management/"
                    >
                      Snow Management
                    </a>
                  </li>
  
                  <li class="mb-3">
                    <a target="_blank" href="/landscape-construction/">
                      Landscape Construction
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="products-footer-col"
                class="col-list col-lg-3 col-md-4 col-sm-12 mt-3"
              >
                <ul class="opacity-8">
                  <li class="mb-3">
                    <p>
                      <a href="#">Products</a>
                    </p>
                  </li>
                  <li class="mb-3">
                    <a class="text-nowrap" target="_blank" href="/autobid">
                      AutoBid
                    </a>
                  </li>
                  <li class="mb-3">
                    <a class="text-nowrap" target="_blank" href="/automeasure">
                      AutoMeasure
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="footer-company"
                class="col-list col-lg-2 col-md-4 col-sm-12 mt-3"
              >
                <ul class="opacity-8">
                  <li class="mb-3">
                    <p>
                      <a href="#">Company</a>
                    </p>
                  </li>
                  <li class="mb-3 goi-link">
                    <a href="/goilawn-comparison/">Comparison with GoiLawn</a>
                  </li>
                  <li class="mb-3">
                    <a href="https://attentive.ai/blog" target="_blank">
                      Blog
                    </a>
                  </li>
                  <li class="mb-3 text-nowrap career relative">
                    <a href="/careers/">
                      Careers{" "}
                      <span class="ml-2 p-2 rounded light-green-bg text-light">
                        We are hiring
                      </span>
                    </a>
                  </li>
                  <li class="mb-3">
                    <a href="/contact/">Contact us</a>
                  </li>
                  <li class="mb-3">
                    <a href="/sitemap/">Site Map</a>
                  </li>
                  <li class="mb-3">
                    <a href="https://grow.attentive.ai/" target="_blank">
                      Archive
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-list social-col col-lg-2 col-md-4 col-sm-12 mt-3">
              <ul>
                <li>
                  <p class="text-nowrap">Follow Us</p>
                </li>
              </ul>
              <div class="flex items-center">
                <a
                  href="https://www.facebook.com/attentiveai/"
                  target="_blank"
                  rel="nofollow"
                >
                  <span class="social-icon flex items-center justify-center">
                    <img
                      src={facebook}
                      style="width: 30%"
                      alt="attentive - facebook"
                    />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/company/attentive.ai/"
                  target="_blank"
                  rel="nofollow"
                >
                  <span class="social-icon ml-1 flex items-center justify-center">
                    <img src={linkedin} alt="attentive - linkedin" />
                  </span>
                </a>
                <a
                  href="https://instagram.com/attentive.ai"
                  target="_blank"
                  rel="nofollow"
                >
                  <span class="social-icon ml-1 flex items-center justify-center">
                    <img src={instagram} alt="attentive - instagram" />
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCvF-DBspNkp0PicrrJ2Dx_g/featured"
                  target="_blank"
                  rel="nofollow"
                >
                  <span class="social-icon ml-1 flex items-center justify-center">
                    <img
                      src={youtube}
                      alt="attentive - youtube"
                      style="width: 100%"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div class="footer-left flex justify-center">
            <p class="mb-0 copyright m-auto">
              &copy; 2022, Attentive Inc. All Rights Reserved
            </p>
          </div>
  
          <div class="clearfix"></div>
        </div>
      </div>
    );
  })