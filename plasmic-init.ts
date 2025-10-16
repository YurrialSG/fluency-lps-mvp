import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import SectionHero from "./components/hero";
import SectionFooter from "./components/footer";
import SectionLogos from "./components/logos";
import SectionMethodology from "./components/methodology";
import SectionMentors from "./components/mentors";
import SectionReports from "./components/reports";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "ivjuB2xjKtrgXaBiAzbCo6",
      token:
        "eL8ULacpMHwcocR56YEc9tWl9iutxnWZS4iN7qSccLhBHLCj2ek6Kug5VcUfqyksZTUIbynizC0DHbZJTQ",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(SectionHero, {
  name: "SectionHero",
  displayName: "SectionHero",
  props: {
    title: {
      type: "string",
      defaultValue: "Hero Section",
    },
    subtitle: {
      type: "string",
      defaultValue:
        "A Awari é a melhor maneira de aprender tecnologia no Brasil. Faça parte e tenha acesso a cursos e mentorias individuais com os melhores profissionais do mercado.",
    },
  },
  importPath: "./components/hero",
});

PLASMIC.registerComponent(SectionFooter, {
  name: "Footer",
  displayName: "Footer",
  props: {},
  importPath: "./components/footer",
});

PLASMIC.registerComponent(SectionLogos, {
  name: "Logos",
  displayName: "Logos",
  props: {},
  importPath: "./components/logos",
});

PLASMIC.registerComponent(SectionMethodology, {
  name: "Methodology",
  displayName: "Methodology",
  props: {},
  importPath: "./components/methodology",
});

PLASMIC.registerComponent(SectionMentors, {
  name: "Mentors",
  displayName: "Mentors",
  props: {},
  importPath: "./components/mentors",
});

PLASMIC.registerComponent(SectionReports, {
  name: "Reports",
  displayName: "Reports",
  props: {},
  importPath: "./components/reports",
});
