import { component$ } from "@builder.io/qwik";
import enter from '../../images/enter-1.webp'
import approve from '../../images/approve-1.webp'
import confirm from '../../images/confirm-2.webp'
import next1 from '../../images/to1.svg'
import next2 from '../../images/to2.svg'

export default component$(() => {
  return (
    <div class="tool-demo" id="tool-demo-sec">
      <div>
        <h2 class="font-bold med-heading text-center mt-2">
          <span>
            Get auto-generated property measurements
            <p class="md:hidden mb-0"></p>
            in just
          </span>
          <span class="light-green"> 3 clicks</span>, real easy
        </h2>

        <div class="w-screen text-center my-2">
          <div
            class="flex items-center flex-col md:flex-row"
            style="justify-content: space-evenly"
          >
            <div class="flex flex-col justify-center align-items-center mt-5">
              <img
                src={enter}
                loading="lazy"
                class="three-click-step"
                alt="enter"
              />
            </div>
            <div class="hidden md:block">
              <img src={next1} loading="lazy" alt="tol" />
            </div>
            <div class="flex flex-col justify-center align-items-center mt-5">
              <img
                src={confirm}
                loading="lazy"
                class="three-click-step"
                alt="confirm"
              />
            </div>
            <div class="hidden md:block">
              <img src={next2} loading="lazy" alt="to2" />
            </div>

            <div class="flex flex-col justify-center align-items-center mt-5">
              <img
                src={approve}
                loading="lazy"
                class="three-click-step"
                alt="approve"
              />
            </div>
          </div>
        </div>

        <div class="my-4">
          <a href="https://app.attentive.ai/signup" class="attentive-btn">
            Try for free
          </a>
        </div>
      </div>
    </div>
  );
});
