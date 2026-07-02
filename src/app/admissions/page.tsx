import type { Metadata } from "next";
import {
  Sparkles,
  Users,
  Heart,
  GraduationCap,
  Clock,
  MapPin,
  MessageCircleHeart,
  CalendarCheck,
  PhoneCall,
  DoorOpen,
} from "lucide-react";
import { MiniHeader } from "@/components/MiniHeader";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Pill } from "@/components/Pill";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { LeadForm } from "@/components/form/LeadForm";
import { InputField, TextareaField } from "@/components/form/Field";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Admissions | ${site.name}`,
  description:
    "Authentic Montessori education for children 6 months to 6 years in Sangotedo, Lagos. Book a tour or enquire about admissions today.",
};

const benefits = [
  {
    icon: Sparkles,
    title: "Every Child's Potential, Nurtured Intentionally",
    description:
      "Carefully prepared Montessori environments and thoughtfully sequenced learning experiences that nurture independence, curiosity, and confidence.",
  },
  {
    icon: GraduationCap,
    title: "Guides, Not Just Teachers",
    description:
      "Our Guides invest in ongoing Montessori training and professional development to give every child an exceptional experience.",
  },
  {
    icon: Heart,
    title: "Parents as Partners",
    description:
      "We believe in strong collaboration between home and school — a consistent, supportive foundation for every child's growth.",
  },
  {
    icon: Clock,
    title: "Built for Modern Families",
    description:
      "Flexible school hours and extended care before and after the school day, designed around real family life.",
  },
];

const programmes = [
  {
    name: "Nido & Infant Community",
    ages: "6 – 18 months",
    photo: "/photos/programme-nido.jpg",
    description:
      "A calm, responsive space where our youngest learners build trust, security, and the beginnings of independence.",
  },
  {
    name: "Toddler Community",
    ages: "18 months – 3 years",
    photo: "/photos/programme-toddler.jpg",
    description:
      "Purposeful movement, language development, and practical life activities that build coordination and confidence.",
  },
  {
    name: "Children's House",
    ages: "3 – 6 years",
    photo: "/photos/programme-childrens-house.jpg",
    description:
      "A full Montessori curriculum spanning practical life, sensorial, language, math, and cultural studies.",
  },
];

const steps = [
  {
    icon: MessageCircleHeart,
    title: "Share your details",
    description: "Complete the short form below — it takes less than a minute.",
  },
  {
    icon: CalendarCheck,
    title: "We confirm a time",
    description: "Our team reaches out personally to confirm a tour time that works for you.",
  },
  {
    icon: DoorOpen,
    title: "Visit us",
    description: "Meet the Guides, see our prepared environments, and ask us anything — no pressure.",
  },
];

const faqItems = [
  {
    question: "What ages do you accept?",
    answer:
      "We welcome children from 6 months to 6 years, across our Nido, Toddler, and Children's House programmes.",
  },
  {
    question: "Where are you located?",
    answer:
      "Plot 3, Good News Drive, Good News Estate, Therra Annex, Sangotedo — serving families across VGC, Abraham Adesanya, Ajah, Sangotedo, and Ibeju-Lekki.",
  },
  {
    question: "What are your school hours?",
    answer:
      "We offer flexible hours to suit modern family life, including extended care before and after the regular school day.",
  },
  {
    question: "How do I start the admissions process?",
    answer:
      "Complete the form below to book a tour or ask a question — our team will personally guide you through every step from there.",
  },
  {
    question: "Do you offer French Immersion or other enrichment programmes?",
    answer:
      "Yes — we run seasonal enrichment programmes, including our August French Immersion. Ask our team about upcoming sessions when you enquire.",
  },
  {
    question: "Do you offer elementary education?",
    answer:
      "Not yet. We currently serve children 6 months to 6 years, with plans to expand into the elementary years as our community grows.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <MiniHeader
        ctaLabel="Enquire About Admissions"
        ctaShortLabel="Enquire"
        crossLinkLabel="French Immersion Programme"
        crossLinkHref="/"
        navLinks={[
          { label: "Programmes", href: "#programmes" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "FAQ", href: "#faq" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-oaks grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
          <Reveal>
            <Pill icon={MapPin} className="mb-4">
              Now Enrolling · Sangotedo, Lagos
            </Pill>
            <h1 className="text-4xl font-medium leading-[1.05] text-dark-green md:text-5xl">
              An Authentic Montessori Education, Minutes From Home.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              OaksPlace Montessori welcomes families across VGC, Abraham Adesanya, Ajah,
              Sangotedo, and Ibeju-Lekki into a prepared environment built on independence,
              curiosity, and confidence — for children 6 months to 6 years.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#enquire" size="lg">
                Register
              </Button>
              <Button href="#enquire" variant="ghost" size="lg">
                Register for a Tour
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill icon={Users}>Ages 6 Months – 6 Years</Pill>
              <Pill icon={Clock}>Flexible Hours</Pill>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Photo
              src="/photos/hero.jpg"
              alt="Children at OaksPlace Montessori School"
              aspect="aspect-[4/3.2]"
              className="shadow-xl"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* WHY OAKSPLACE */}
      <Section tone="cream">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Why Families Choose OaksPlace
          </p>
          <h2 className="mt-3 text-3xl font-medium text-dark-green md:text-4xl">
            More Than Childcare — A Foundation for Life
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 0.06}
              className="rounded-3xl bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15">
                <benefit.icon className="h-6 w-6 text-orange" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-dark-green">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{benefit.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROGRAMMES */}
      <Section tone="creamDark" id="programmes">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Our Programmes
          </p>
          <h2 className="mt-3 text-3xl font-medium text-dark-green md:text-4xl">
            A Curriculum for Every Age
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programmes.map((programme, i) => (
            <Reveal
              key={programme.name}
              delay={i * 0.08}
              className="flex flex-col rounded-3xl bg-white p-2 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <Photo
                src={programme.photo}
                alt={programme.name}
                aspect="aspect-[4/3]"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="p-5">
                <h3 className="font-serif text-xl text-dark-green">{programme.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-orange">
                  {programme.ages}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{programme.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MEET THE GUIDES */}
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
              Meet a Few of Our Guides
            </p>
            <h2 className="mt-3 text-3xl font-medium text-dark-green md:text-4xl">
              The Heart of OaksPlace
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Our Guides are caring professionals who believe deeply in the potential of every
              child. Through ongoing Montessori training, they continually refine their practice
              to give your child the highest quality educational experience.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <Photo src="/photos/guide-nido-lead.jpg" alt="A Nido & Infant Community Guide" aspect="aspect-square" />
            <Photo
              src="/photos/guide-ch-lead.jpg"
              alt="A Children's House Guide"
              aspect="aspect-square"
              className="mt-8"
            />
          </Reveal>
        </div>
      </Section>

      {/* GLIMPSES */}
      <Section tone="creamDark">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            A Glimpse Inside OaksPlace
          </p>
          <h2 className="mt-3 text-3xl font-medium text-dark-green md:text-4xl">
            Purposeful Days, Joyful Learning
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Reveal>
            <Photo
              src="/photos/classroom-childrens-house.jpg"
              alt="Children's House classroom"
              aspect="aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <Photo src="/photos/outdoor-play.jpg" alt="Outdoor play at OaksPlace" aspect="aspect-[3/4]" />
          </Reveal>
          <Reveal delay={0.12}>
            <Photo
              src="/photos/practical-life.jpg"
              alt="Practical life materials"
              aspect="aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.18}>
            <Photo src="/photos/nido-infant.jpg" alt="Nido & Infant Community" aspect="aspect-[3/4]" />
          </Reveal>
        </div>
      </Section>

      {/* HOW A TOUR WORKS */}
      <Section tone="cream" id="how-it-works">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            What Happens Next
          </p>
          <h2 className="mt-3 text-3xl font-medium text-dark-green md:text-4xl">
            Booking a Tour Is Simple
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-dark-green text-cream">
                <step.icon className="h-6 w-6" />
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange">
                Step {i + 1}
              </p>
              <h3 className="mt-1 font-serif text-lg text-dark-green">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10 text-center text-sm font-medium text-dark-green/70">
          No pressure, no obligation — just an honest look at whether OaksPlace is right for your
          family.
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section tone="cream" narrow id="faq">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Common Questions
          </p>
          <h2 className="mt-3 text-3xl font-medium text-dark-green md:text-4xl">
            Everything You Need to Know
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Section>

      {/* FINAL CTA + FORM */}
      <Section tone="dark" id="enquire" narrow>
        <Reveal className="text-center">
          <PhoneCall className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-4 text-3xl font-medium md:text-4xl">
            Start Your Child&rsquo;s Montessori Journey
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Share a few details and we&rsquo;ll be in touch to confirm a tour time and answer any
            questions — no obligation.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl rounded-3xl bg-white p-8 shadow-xl md:p-10">
          <LeadForm
            endpoint="/api/admissions"
            thankYouHref="/thank-you/admissions"
            submitLabel="Submit"
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField label="Parent Name" name="parentName" required />
              <InputField label="Phone Number" name="phone" type="tel" required />
            </div>
            <InputField label="Email Address" name="email" type="email" required />
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField label="Child's Age" name="childAge" required />
              <InputField label="Preferred Tour Date" name="preferredDate" type="date" />
            </div>
            <TextareaField label="Anything else we should know?" name="message" rows={3} />
          </LeadForm>
        </Reveal>
      </Section>

      <StickyMobileCTA label="Register Now" href="#enquire" />
    </>
  );
}
