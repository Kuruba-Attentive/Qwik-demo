import { component$ } from "@builder.io/qwik";
import BDS from '../../images/unhappy-BDs.webp';
import Inaccurate from '../../images/inaccurate-estimates.webp'
import Missed from '../../images/missed-revenue.webp'
export default component$(() => {
  return (
    <div class="legacy-prob">
      <div>
        <h2 class="legacy-heading">Is your team struggling with takeoffs?</h2>
      </div>
      <div></div>
      <div class="legacy-flexbox">
        <div class="flex flex-col justify-center items-center" style="text-align: center">
          <div>
            <img
              loading="lazy"
              class="legacy-flexbox-image"
              src={BDS}
              alt="unhappay bds"
            />
          </div>
          <div>
            <p class="legacy-flexbox-heading">UNHAPPY BDs</p>
          </div>
          <div>
            <p class="legacy-flexbox-text">
              Low productivity as hours spent measuring sites instead of being
              in front of the customers
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center" style="text-align: center">
          <div>
            <img
              loading="lazy"
              class="legacy-flexbox-image"
              src={Inaccurate}
              alt="inaccurate estimates"
            />
          </div>
          <div>
            <p class="legacy-flexbox-heading text-uppercase">
              Inaccurate Estimates
            </p>
          </div>
          <div>
            <p class="legacy-flexbox-text">
              Lost opportunities due to overbidding and lost margins due to
              underbidding
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center" style="text-align: center">
          <div>
            <img
              loading="lazy"
              class="legacy-flexbox-image"
              src={Missed}
              alt="missed revenues"
            />
          </div>
          <div>
            <p class="legacy-flexbox-heading text-uppercase">
              Missed Revenue Goals
            </p>
          </div>
          <div>
            <p class="legacy-flexbox-text">
              Slow bidding process limits the sales pipeline and leads to missed
              quotas
            </p>
          </div>
        </div>
      </div>
      <div class=" w-screen flex justify-center items-center">
        <a href="https://app.attentive.ai/signup" class="attentive-btn">
          Try for free
        </a>
      </div>
    </div>
  );
});
