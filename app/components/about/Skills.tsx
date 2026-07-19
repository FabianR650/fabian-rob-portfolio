import skills from '@/app/components/data/skills'
import Card from '@/app/components/ui/Card'
import SectionTitle from '@/app/components/ui/SectionTitle'
import SlideFadeIn from '@/app/components/animations/SlideFadeIn'

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-20
        dark:bg-slate-900
        text-slate-900 dark:text-white
      "
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Title */}
        <SlideFadeIn delay={0.1} y={25}>
          <SectionTitle
            title="Technical Skills"
            subtitle="Technologies I use to build scalable applications."
          />
        </SlideFadeIn>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* FRONTEND */}
          <SlideFadeIn delay={0.2} y={30}>
            <Card>
              <h3 className="font-bold text-slate-900 dark:text-white">FRONTEND</h3>

              {skills.frontend.map((skill, i) => (
                <SlideFadeIn key={skill} delay={0.25 + i * 0.05} y={15}>
                  <p className="text-slate-700 dark:text-slate-600">{skill}</p>
                </SlideFadeIn>
              ))}
            </Card>
          </SlideFadeIn>

          {/* BACKEND */}
          <SlideFadeIn delay={0.3} y={30}>
            <Card>
              <h3 className="font-bold text-slate-900 dark:text-white">BACKEND</h3>

              {skills.backend.map((skill, i) => (
                <SlideFadeIn key={skill} delay={0.35 + i * 0.05} y={15}>
                  <p className="text-slate-700 dark:text-slate-600">{skill}</p>
                </SlideFadeIn>
              ))}
            </Card>
          </SlideFadeIn>

          {/* TOOLS */}
          <SlideFadeIn delay={0.4} y={30}>
            <Card>
              <h3 className="font-bold text-slate-900 dark:text-white">TOOLS</h3>

              {skills.tools.map((skill, i) => (
                <SlideFadeIn key={skill} delay={0.45 + i * 0.05} y={15}>
                  <p className="text-slate-700 dark:text-slate-600">{skill}</p>
                </SlideFadeIn>
              ))}
            </Card>
          </SlideFadeIn>

        </div>
      </div>
    </section>
  )
}
