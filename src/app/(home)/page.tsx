// ** React Imports
import { Fragment } from "react";

// ** Components
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import Portfolio from "@/components/portfolio";
import Content from "@/components/content";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div className="container pt-16">
        <div className="flex gap-6">
          <div className="">
            <Sidebar />
          </div>

          <div className="ml-[78px] flex flex-1 gap-6">
            <div className="w-1/3">
              <Portfolio />
            </div>
            <div className="w-2/3">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
