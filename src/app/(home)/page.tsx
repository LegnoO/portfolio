// ** React Imports
import { Fragment } from "react";

// ** Components
import Header from "@/components/layouts/header";
import Sidebar from "@/components/layouts/sidebar";
import Portfolio from "@/components/portfolio";
import Content from "@/components/content";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div className="container pt-8 md:pt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[78px_1fr]">
          <div className="hidden sm:block">
            <Sidebar />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_2fr]">
            <Portfolio />
            <Content />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
