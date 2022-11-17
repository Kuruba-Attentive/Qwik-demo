import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <div class="schedule-interview" id="Book-Demo">
      <div class="text-center">
        <h1 class="pt-2">
          Learn how Attentive can{" "}
          <span style="color: var(--light-green)">help your business</span>
        </h1>
        <p>Use the calendar below to schedule a demo</p>

        <div className="w-screen flex justify-center flex-col">
        <div
          class="meetings-iframe-container "
          title='book demo'
          data-src="https://meetings.hubspot.com/schandolia?embed=true"
        ></div>
        </div>
        <script
          type="text/javascript"
          src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
          defer
        ></script>
      </div>
    </div>
  );
});
