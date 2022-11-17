import { component$ } from "@builder.io/qwik";
import Emoji from '../../images/emoji-light.svg'

export default component$(() => {

  return (
    <div class="banner-bg home-banner banner-video">
      <div class="banner-text">
        <div class="banner-heading">
          <h1>
            The # 1 <span style="color: #73ca9b">Property Measurement</span>
          </h1>
          <h1 class="last-line">
            <span style="color: #73ca9b">Software</span> for Sales Teams
          </h1>
        </div>
        <p id="top-section-subheading">
          Crush your quota with fully automated aerial and blueprint takeoffs
        </p>
        <div class="my-4">
          <a
            href="https://app.attentive.ai/signup"
            class="attentive-btn"
            // onclick="linkedinClick();"
          >
            Try for free
          </a>
        </div>
        <div class="flex justify-center md:justify-start items-center sm-toast">
          <img src={Emoji} style="width: 14px" alt='toast' />

          <p class="text-light">NO CREDIT CARD NEEDED</p>
        </div>
      </div>
    </div>
  );
});
