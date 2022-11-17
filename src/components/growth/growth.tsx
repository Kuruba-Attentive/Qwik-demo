import { component$ } from "@builder.io/qwik";
import svg4 from '../../images/icons-04.svg'
import svg5 from '../../images/icons-05.svg'
import svg6 from '../../images/icons-06.svg'

export default component$(() => {
  return (
    <div class="benefits-list">
      <div>
        <h2 class="benefits-heading">
          More than software:
          <span class="benefits-heading-style" style="color: #4cbb7f">
            A partner in growth
          </span>
        </h2>
      </div>
      <div class="benefits-flexbox">
        <div style="text-align: center" className="flex flex-col items-center justify-center">
          <div>
            <img
              loading="lazy"
              class="benefits-flexbox-image"
              src={svg4}
              alt="save time"
            />
          </div>
          <div>
            <p class="benefits-flexbox-heading">SAVE TIME</p>
          </div>
          <div>
            <p class="benefits-flexbox-text">
              Save 95% time with auto-generated takeoffs, focus on building
              customer relationships
            </p>
          </div>
        </div>
        <div style="text-align: center" className="flex flex-col items-center justify-center">
          <div>
            <img
              loading="lazy"
              class="benefits-flexbox-image"
              src={svg6}
              alt="bid more"
            />
          </div>
          <div>
            <p class="benefits-flexbox-heading">BID MORE</p>
          </div>
          <div>
            <p class="benefits-flexbox-text">
              Send out all the proposals you want to - without all the hassle
            </p>
          </div>
        </div>
        <div style="text-align: center" className="flex flex-col items-center justify-center">
          <div>
            <img
              loading="lazy"
              class="benefits-flexbox-image"
              src={svg5}
              alt="win more"
            />
          </div>
          <div>
            <p class="benefits-flexbox-heading">WIN MORE</p>
          </div>
          <div>
            <p class="benefits-flexbox-text">
              Crush your quota with winning proposals built on 98% accurate
              takeoffs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
