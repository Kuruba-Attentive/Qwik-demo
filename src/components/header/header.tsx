import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";
import Logo from "../../images/Attentive_green-lg.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header className="h-14 flex items-center shadow-md">
      <div class="ml-8 flex items-center h-full">
        <a href="https://attentive.ai" target="_blank">
          <img src={Logo} alt="Attentive Logo" className="h-10"/>
        </a>
        <div className="text-xl mt-2">Attentive</div>
      </div>
      <ul>
        <li>
          <a
            href="#"
            target="_blank"
          >
            Industries
          </a>
        </li>
        <li>
          <a
            href="h#"
            target="_blank"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
          >
            Resources
          </a>
        </li>
      </ul>
    </header>
  );
});
