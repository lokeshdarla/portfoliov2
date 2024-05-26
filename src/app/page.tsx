import BlogSection from "@/components/BlogSection"
import { BentoGridDemo } from "@/components/BentoGrid"
import { FloatingNavDemo } from "@/components/Navbar"
import ContactSection from "@/components/Contact"
import { AuroraBackgroundDemo } from "@/components/AuraBackGround"
import { AuroraBackground } from "@/components/ui/aurora-background"
import AboutSection from "@/components/About"
import { LampDemo } from "@/components/LampDemo"


function Page() {
  return (
    <>
      <FloatingNavDemo />
      <AuroraBackgroundDemo />
      <br />
      <AboutSection />
      <br />
      <BlogSection />
      <br />
      <BentoGridDemo />
      <br />
      <ContactSection />
    </>
  )
}

export default Page
