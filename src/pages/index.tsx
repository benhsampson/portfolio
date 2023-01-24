import Link from "next/link";
import React from "react";
import { PortfolioItem } from "../components/PortfolioItem";

export default function HomePage() {
  return (
    <>
      <nav className="flex items-center justify-between self-start">
        <div className="flex flex-col">
          <Link href="/" className="text-2xl text-white">
            Ben Sampson
          </Link>
        </div>
      </nav>
      <div className="pt-56 sm:pt-60 md:pt-64 lg:pt-72 xl:pt-72">
        <h1 className="flex justify-between text-3xl md:text-4xl">
          <span className="text-white">
            The best way to predict the future is to{" "}
            <span className="rounded-sm bg-blue-500/20 px-4 py-1.5 font-mono">
              create
              <span className="text-white/10">::</span>
              it;
            </span>
          </span>
          <span className="text-white/50">{`— Abraham Lincoln`}</span>
        </h1>
      </div>
      <section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <PortfolioItem
            dark={false}
            span={1}
            title="Ori"
            description="Run to win. Ori is a competitive game played outdoors."
            href="https://orirun.com"
            imageSrc="/ori2.png"
          />
          <PortfolioItem
            dark
            span={2}
            title="Wikishirts"
            description="Turn any Wikipedia article into a cool shirt that you can wear."
            href="https://wikishirts.io"
            imageSrc="/wikishirts.avif"
          />
          <PortfolioItem
            dark
            span={2}
            title="Rewardist"
            description="Cafe loyalty cards out of your wallet and into your phone."
            href="https://rewardist.io"
            imageSrc="/rewardist.png"
          />
          <PortfolioItem
            dark={false}
            span={1}
            title="Desko"
            description="Office space management for the hybrid work era."
            href="https://desko.io"
            imageSrc="/desko.png"
          />
          <PortfolioItem
            dark
            span={1}
            title="CheeseGames"
            description="Unity3D game sharing and testing."
            href="https://cheesegames.net"
            imageSrc="/cheesegames.png"
          />
          <PortfolioItem
            dark
            span={2}
            title="indi.games"
            description="A pay-what-you-want marketplace for indie game developers."
            href="https://indi.games"
            imageSrc="/indi.png"
          />
        </div>
      </section>
    </>
  );
}
