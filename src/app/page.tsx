import {
  Sparkles,
  Users,
  Globe2,
  Palette,
  BookOpenText,
  ShieldCheck,
  Calendar,
  Clock,
  Sun,
  Wallet,
  MessageCircleHeart,
} from "lucide-react";
import { MiniHeader } from "@/components/MiniHeader";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Pill } from "@/components/Pill";
import { Button } from "@/components/Button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { LeadForm } from "@/components/form/LeadForm";
import { InputField, SelectField, TextareaField } from "@/components/form/Field";
import { frenchImmersion } from "@/lib/site-data";

const benefits = [
  {
    icon: Globe2,
    title: "A Global Advantage",
    description:
      "Early exposure to a second language builds cognitive flexibility, sharper listening skills, and confidence that lasts well beyond the summer.",
  },
  {
    icon: Sparkles,
    title: "Learning Through Joy",
    description:
      "No worksheets, no drilling. Just music, stories, art, and games — the way young children actually absorb language best.",
  },
  {
    icon: Sun,
    title: "A Month Well Spent",
    description:
      "Turn the August break into a season of growth, not screen time — structured, social, and full of discovery.",
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Authentic Montessori, Not “Camp Activities”",
    description:
      "Every session is intentionally prepared, not improvised — the same purposeful approach behind our regular classrooms.",
  },
  {
    icon: Users,
    title: "Led by Real Montessori Guides",
    description:
      "Not seasonal camp counselors — trained Guides who understand how young children grow, learn, and play.",
  },
  {
    icon: BookOpenText,
    title: "Culture, Not Just Vocabulary",
    description:
      "French songs, stories, art, and games introduce language the way children absorb their first language: through immersion.",
  },
  {
    icon: Palette,
    title: "Small, Safe, and Familiar",
    description:
      "Small group sizes on a trusted early-years campus in Sangotedo — never a rented hall or an unfamiliar venue.",
  },
];

const sampleDay = [
  { time: "8:00 am", activity: "Arrival & French greeting circle" },
  { time: "9:00 am", activity: "Storytelling & language songs" },
  { time: "10:00 am", activity: "Art & hands-on culture activities" },
  { time: "11:00 am", activity: "Outdoor play — in French!" },
  { time: "12:00 pm", activity: "Music & movement" },
  { time: "1:00 pm", activity: "Pickup" },
];

const faqItems = [
  {
    question: "Does my child need to already speak or understand French?",
    answer:
      "Not at all. This programme is designed for complete beginners — children learn through immersion, songs, and play, not formal instruction.",
  },
  {
    question: "Is this only for children already enrolled at OaksPlace?",
    answer:
      "No. French Immersion is open to children in our age range whether or not they currently attend OaksPlace.",
  },
  {
    question: "What ages is this suitable for?",
    answer:
      "The programme is best suited for children ages 3–6. Not sure if your child is ready? Reach out and we'll help you decide.",
  },
  {
    question: "What are the programme fees?",
    answer:
      "The full four-week programme (3rd – 28th August) is ₦120,000. Let us know if you'd like to discuss payment options when you register.",
  },
  {
    question: "What if I can only commit to part of the month?",
    answer:
      "We understand not every family can commit to all four weeks. Let us know your availability when you register and we'll work with you.",
  },
  {
    question: "Is extended care available?",
    answer:
      "Yes — OaksPlace offers extended care before and after regular programme hours for families who need it.",
  },
  {
    question: "How do I secure my child's spot?",
    answer:
      "Spaces are limited by design — small groups are core to how Montessori works. Complete the form below and our team will confirm availability and next steps.",
  },
];

export default function FrenchImmersionPage() {
  return (
    <>
      <MiniHeader
        ctaLabel="Register for French Immersion"
        ctaShortLabel="Register"
        crossLinkLabel="General Admissions"
        crossLinkHref="/admissions"
        navLinks={[
          { label: "Why French", href: "#why-french" },
          { label: "Sample Day", href: "#sample-day" },
          { label: "FAQ", href: "#faq" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-oaks grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
          <Reveal>
            <Pill icon={Calendar} className="mb-4">
              {frenchImmersion.dateRangeLabel}
            </Pill>
            <h1 className="text-4xl font-medium leading-[1.05] text-dark-green md:text-5xl">
              Give Your Child a Real Head Start — In French, In Play, In Confidence.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              A month of joyful, hands-on French immersion inside an authentic Montessori
              environment at OaksPlace Montessori, Sangotedo. Music, storytelling, art, and
              culture — never worksheets, never drilling.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#register" size="lg">
                Register for French Immersion
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill icon={Wallet}>{frenchImmersion.priceLabel}</Pill>
              <Pill icon={Users}>Ages 3 – 6</Pill>
              <Pill icon={ShieldCheck}>Small Groups</Pill>
              <Pill icon={Sparkles}>Sangotedo, Lagos</Pill>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Photo
              src="/photos/real-classroom.jpg"
              alt="An OaksPlace Montessori classroom in Sangotedo"
              aspect="aspect-[4/3.2]"
              className="shadow-xl"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* COUNTDOWN / URGENCY STRIP */}
      <section className="bg-dark-green py-10 text-cream">
        <div className="container-oaks flex flex-col items-center gap-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Programme Begins In
          </p>
          <CountdownTimer target={frenchImmersion.startDate} />
          <p className="max-w-xl text-sm text-cream/70">
            Spaces are limited — small groups are core to how Montessori works, not a marketing
            gimmick.
          </p>
        </div>
      </section>

      {/* WHY FRENCH, WHY NOW */}
      <Section tone="cream" id="why-french">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Why French Immersion
          </p>
          <h2 className="mt-3 text-3xl font-medium text-dark-green md:text-4xl">
            More Than a Summer Activity
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 0.08}
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

      {/* WHAT MAKES THIS DIFFERENT */}
      <Section tone="creamDark">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
              What Makes This Different
            </p>
            <h2 className="mt-3 text-3xl font-medium text-dark-green md:text-4xl">
              A Real Montessori Bilingual Programme — Not French As Subject Teaching
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Plenty of holiday programmes teach a few French words. This one is built on the
              same prepared, intentional approach behind every OaksPlace classroom.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-5 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-5 shadow-sm">
                <item.icon className="h-5 w-5 text-green" />
                <p className="mt-3 font-serif text-base text-dark-green">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* SAMPLE DAY */}
      <Section tone="cream" id="sample-day">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <Photo
              src="/photos/real-french-books.jpg"
              alt="French-language books on the reading shelf at OaksPlace Montessori"
              aspect="aspect-[4/3]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
              A Sample Day
            </p>
            <h2 className="mt-3 text-3xl font-medium text-dark-green md:text-4xl">
              Here&rsquo;s a Taste of What a Day Could Look Like
            </h2>
            <ul className="mt-6 space-y-4">
              {sampleDay.map((slot) => (
                <li key={slot.time} className="flex items-start gap-4">
                  <span className="mt-0.5 flex w-20 shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-orange">
                    <Clock className="h-3.5 w-3.5" />
                    {slot.time}
                  </span>
                  <span className="text-sm leading-relaxed text-dark-green/90">
                    {slot.activity}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* GLIMPSES */}
      <Section tone="creamDark">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Glimpses of OaksPlace
          </p>
          <h2 className="mt-3 text-3xl font-medium text-dark-green md:text-4xl">
            Music, Art, and Stories — Every Single Day
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Reveal>
            <Photo src="/photos/gallery-music.jpg" alt="Music circle at OaksPlace" aspect="aspect-[3/4]" />
          </Reveal>
          <Reveal delay={0.06}>
            <Photo src="/photos/gallery-art.jpg" alt="Art activities at OaksPlace" aspect="aspect-[3/4]" />
          </Reveal>
          <Reveal delay={0.12}>
            <Photo
              src="/photos/gallery-storytime.jpg"
              alt="Storytime at OaksPlace"
              aspect="aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.18}>
            <Photo
              src="/photos/blog-french-immersion.jpg"
              alt="French Immersion moments at OaksPlace"
              aspect="aspect-[3/4]"
            />
          </Reveal>
        </div>
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
      <Section tone="dark" id="register" narrow>
        <Reveal className="text-center">
          <MessageCircleHeart className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-4 text-3xl font-medium md:text-4xl">
            Reserve Your Child&rsquo;s Spot in French Immersion
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Tell us a little about your child and we&rsquo;ll be in touch to confirm availability
            and answer any questions — no obligation.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl rounded-3xl bg-white p-8 shadow-xl md:p-10">
          <LeadForm
            endpoint="/api/french-immersion"
            thankYouHref="/thank-you/french-immersion"
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
              <SelectField
                label="Preferred Start"
                name="preferredStart"
                options={[
                  { value: "full-month", label: "Full Month (3rd – 28th Aug)" },
                  { value: "week-1", label: "Week 1 only" },
                  { value: "week-2", label: "Week 2 only" },
                  { value: "week-3", label: "Week 3 only" },
                  { value: "week-4", label: "Week 4 only" },
                  { value: "not-sure", label: "Not sure yet" },
                ]}
              />
            </div>
            <TextareaField label="Anything else we should know?" name="message" rows={3} />
          </LeadForm>
        </Reveal>
      </Section>

      <StickyMobileCTA label="Register for French Immersion" />
    </>
  );
}
