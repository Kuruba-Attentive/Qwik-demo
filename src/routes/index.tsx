import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import Bookdemo from "~/components/bookdemo/bookdemo";
import Demo from "~/components/demo/demo";
import Growth from "~/components/growth/growth";
import Herosection from "~/components/herosection/herosection";
import Industry from "~/components/industry/industry";
import Mobile from "~/components/mobile/mobile";
import Takeoff from "~/components/takeoffs/takeoff";

export default component$(() => {
  return (
    <div>
      <Herosection />
      <Takeoff />
      <Demo />
      <Growth />
      <Mobile />
      <Industry />
      {/* <Bookdemo /> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Supercharge your business with sales automation | Attentive ",
  meta: [
    {
      name: "description",
      content:
        "Attentive brings you automated takeoffs solution for Landscape, Facilities & Paving Maintenance, along with Snow Management industries. Automate your sales process with our revolutionary tool—AutoBid. Save 95% of your time otherwise spent on manual measurements, allowing you to bid more and win more!",
    },
    {
      name: "keywords",
      content:
        "property measurement, landscape measurement, lawn measurement, lot take-off",
    },
    { name: "theme-color", content: "#043676" },
  ],
};
