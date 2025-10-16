import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import type { GetServerSideProps } from "next";
import { PLASMIC } from "@/plasmic-init";

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
