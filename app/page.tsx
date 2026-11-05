import Hero from "@/components/Hero";
import Ideas from "@/components/Ideas";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import Order from "@/components/Order";
import Projects from "@/components/Projects";
import Recipe from "@/components/Recipe";
import ScrollDecor from "@/components/ScrollDecor";
import Timeline from "@/components/Timeline";
import Why from "@/components/Why";

export default function Home() {
  return (
    <div className="page">
      <ScrollDecor />
      <Hero />
      <Marquee />
      <Recipe />
      <Why />
      <Timeline />
      <Menu />
      <Projects />
      <Ideas />
      <Order />
    </div>
  );
}
