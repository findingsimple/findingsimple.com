import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'My Personal User Manual.',
  description: 'A quick overview of my working style, communication preferences, and other details to help us get the most out of working together.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My Personal User Manual."
      intro="A quick overview of my working style, communication preferences, and other details to help us get the most out of working together."
    >
      <div className="space-y-20">
        <ToolsSection title="How I Work Best">
          <Tool title="My peak productivity hours">
            9:30 a.m to 3:00 p.m - outside of those there is usually something encroaching on my time whether it be kids, appointments or just brain fog and it’s time for some fresh air.
          </Tool>
          <Tool title="I focus best when">
            I have a clear goal. Then once I have my goal - minimal distractions, and caffeine.
          </Tool>
          <Tool title="I prefer working">
            A mix of bursts of collaboration with time to gain context, digest and percolate on my thoughts. <br/>
          </Tool>
          <Tool title="Ideal work environment">
            Calm, focused, async-friendly. I love to work from coffee shops or my own office space. 
          </Tool>
          <Tool title="How I like to process information">
            Written is best - I love context - the more the merrier. I often refer back to notes or docs.
          </Tool>
          <Tool title="Things that help me get into flow">
            Good coffee, a solid to-do list, and some chill background music (or the gurgle of my aquariums).
          </Tool>
          <Tool title="Things that disrupt my flow">
            Meetings that could have easily been an email.<br/>
            Vague requests or no context.<br/>
            My door and DMs are always open for team members (just remember the context)
          </Tool>
        </ToolsSection>
        <ToolsSection title="Communication Style">
          <Tool title="Preferred communication channels">
            Slack for quick things.<br/>
            Docs for structured info.<br/>
            Email for external stuff.<br/>
            Catch up in person (over a coffee?).<br/>
            I’m good at leaving Slack channels with low signal to noise. If something is important enough that I need to know about it, it will make its way to me.
          </Tool>
          <Tool title="Response time expectations">
            I usually respond within a few hours during work hours, unless I’m in deep focus mode on a specific task that needs to get done.
          </Tool>
          <Tool title="Follow-up preferences">
            Nudges are fine. I appreciate gentle reminders.
          </Tool>
          <Tool title="Preferred tone">
            Friendly and casual, but clear. I like a bit of personality in my messages.
          </Tool>
          <Tool title="My approach to meetings">
            If it doesn’t have an agenda, it probably could’ve been async. I’m more than happy to do async chats.
          </Tool>
          <Tool title="Sorry in advance…">
            If my accent or Australian-ism’s get confusing. I try hard to not use slang and articulate clearly but can get to casual sometimes - please just ask me to repeat or clarify.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Working With Me">
          <Tool title="Core values I bring to a team">
            Empathy, curiosity, and resilience.<br/>
            I’m loyal and hardworking.
          </Tool>
          <Tool title="What I appreciate in teammates">
            People who take ownership, share ideas early, and care about the “why” as much as the “how.”
          </Tool>
          <Tool title="How I handle conflict">
            Calmly and directly. I’ll suggest a chat to clarify and realign.
          </Tool>
          <Tool title="How I give feedback">
            Timely, specific, and focused on outcomes, not personalities.
          </Tool>
          <Tool title="How I like to receive feedback">
            Timely, honest and actionable. If it helps me grow, I’m all ears.
          </Tool>
          <Tool title="Common misconceptions about me">
            I’m an introvert at heart.<br/>
            I like time to digest information and formulate responses. So I come across as chill or quiet. I just process before I speak.
          </Tool>
          <Tool title="How to build trust with me">
            Communicate clearly, do what you say you will, and be kind.<br/>
            Share with me and I’ll share with you - lets get to know each other.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Pet Peeves">
          <Tool title="Work behaviors that frustrate me">
            Meetings with no purpose.<br/>
            Wasting time.<br/>
            Not communicating early and often
          </Tool>
          <Tool title="Collaboration red flags">
            Avoiding accountability or being passive-aggressive.
          </Tool>
          <Tool title="My boundaries around time and availability">
            I don’t check Slack after hours - time is our most important asset.<br/>
            If its truly urgent - use the bat signal.
          </Tool>
          <Tool title="Meeting etiquette I value">
            Be on time, come prepared, and leave with clear actions.<br/>
            I like notes - they help with alignment and we all forget things.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Growth and Motivation">
          <Tool title="What motivates me">
            Helping people. Solving problems.
          </Tool>
          <Tool title="Projects I love working on">
            Anything that combines tech, design, and storytelling. Bonus points if it involves coral or 3D printing.
          </Tool>
          <Tool title="What I’m currently learning or improving">
            AI-assisted workflows and leadership. <br/>
            For fun and profit... 3D modelling and improving our family magic the gathering decks.
          </Tool>
          <Tool title="How I define success right now">
            Feeling a balance between work and home life (note, balance doesn&apos;t always mean equal).<br/>
            Happy, healthy kids.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Fun Facts">
          <Tool title="A fun fact about me">
            I grow corals in my lounge room. Yes, really.
          </Tool>
          <Tool title="Favorite work soundtrack or setup">
            Lo-fi beats, the gurgle of my aquariums or coffee shop ambience.
          </Tool>
          <Tool title="If I could automate one thing in my life">
            More of my aquarium maintenance.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
