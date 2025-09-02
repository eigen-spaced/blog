---
pubDatetime: 2025-09-02T10:37:54.102Z
title: The Great AI Shortcut that wasn't
description: Functional systems, fragile understanding
slug: the-great-ai-shortcut-that-wasnt
tags:
  - technology
---

![SpacetimeSorcerer's struggle](@/assets/blog-images/the-great-ai-shortcut-that-wasnt-img.jpg)

# The promise and the reality
SpacetimeSorcerer spent 3 months building their SaaS project with AI. Then they gave up. Not because they lacked motivation, but because AI promised them something it couldn't deliver: the ability to build software without understanding software.

I had recently decided to use `bolt.new` to build a simple custom text annotation application for an ML project I was working on but also just to see how much I could push the limits with AI. The result was impressive, particularly given that a few months ago, I had attempted to build the same thing using just ChatGPT (no agentic AI). The approach was frustrating. I'd ask for for code, ChatGPT would deliver, but as the application grew more complex, integrating my code with AI-generated code became a mess. I eventually gave up.

So I decided to give it another go and offloaded the entire thing to bolt. To my amazement (and disbelief), it delivered in 15 min what had taken me weeks. At the time, the only thing that crossed my mind was that we are so unbelievably cooked.

But the limitations became clear when I started refactoring. As I started testing the app, I discovered bugs that the AI simply couldn't resolve no matter how many times I asked it to rewrite the code. But this was only the beginning. The problems were a lot more nuanced.

# The competency illusion and the breakdown of trust networks
Every organisation runs on trust networks. We trust systems because we understand why they fail, we trust people because we understand their competencies. AI systems built by non-technical people break both chains of trust. Two out of the many debugging experiences revealed this gap clearly.

At first glance, everything seemed to be working perfectly. The AI had nailed it. But as I went about testing the application by annotating my text, I found out there were certain text blocks that had inconsistent annotations. It didn't make sense to me because it seemed really random. And each time I flagged the issue, Bolt would rewrite the annotation logic, making it more complex with every attempt, yet the problem never went away.

After several failed attempts, I stepped back to see what I could have been missing. The text had come from a scraped website and I remember the raw scraped text being messy with newlines and extra spacing rather than a continuous block of text as was being displayed on the app. Could it have been that simple? I asked bolt to normalise the text formatting before display, and that was it; one simple fix solved what multiple complex rewrites couldn't.

This revealed a fundamental gap: AI follows instructions, but debugging requires stepping back and reframing the problem entirely. This is the competency illusion in action. AI made me feel like I was building software at an expert-level - clean UI, working features, integrated moving parts. But when debugging was required, I realised I was just a sophisticated AI tool user, not an actual developer of the system.

This illusion breaks down trust networks. since the AI had written the code all by itself, the entire application was necessarily a black box to me. This experience crystallised something I'm learning in my move to GRC: systems you can't audit are systems you can't trust. Yet, we're encouraging people to build exactly these kinds of black-box systems.

# The Commodification of Craft
We're turning programming - and much of the work we've outsourced to AI, from apprenticed craft into commodity transaction.  This follows a well documented pattern that is explored in works such as Richard Sennett's _The Craftsman_ and Matthew Crawford's _Shop Class as Soulcraft_: how skilled work get transformed under capitalism.

Apprenticed craft involves learning from failure, recognising patterns, and building an intuition over time. Our intuitions are what makes us truly competent and skilled. When we bypass this process, we never build those connections, and are left with surface level knowledge. This is the heart of the deskilling thesis - these tools are atrophying our expertise rather than augmenting it.

The second bug I ran into was even stranger. I couldn't annotate any other other parts of the text block except for the first word. So once again, I asked bolt for help. But the AI, like before, only made the code more convoluted. I finally decided to add some debug logs for myself and find out.
And surprisingly, the issue wasn't in the annotation logic at all. It was a mismatch between how the code was trying to save data and what the database would accept. The first word had a special position that the database rejected, but everything else was fine.

This kind of systematic problem-solving can't be commoditised into a prompt. It emerges from years of wrestling with broken code, building pattern recognition through failure, and developing the intuition to know when to step back and reframe. We're encouraging people to skip this apprenticeship entirely - but the skills it develops become essential the moment things go wrong

# Cascading Complexity and Technical Debt as Spiritual Debt 
Another thing that was subtly brought to my attention as I've started to integrate vibe coding into my workflow, is that I'm starting to lose connection with my work. Knowing a system well allows you to keep efficiency and building principles in mind, all of which help complexity.

AI, on the other hand, is merely helping you build out what you asked it to. It doesn't care about complexity or efficiency. There is something sacred about understanding your tools deeply, and AI shortcuts create not just technical debt, but a kind of spiritual disconnection from the craft.

What really stand out to me in SpacetimeSorcerer's anecdote is his shift from "enjoying it in the beginning" to "pain and rage". It wasn't just a technical failure, but rather the crushing realisation that they couldn't truly build something they knew or could control.
This disconnection creates more than just messy code. It creates systems that are ungovernable and leaves builders stranded when things inevitably break.

# Closing: The Epistemological crisis
Were rapidly moving towards a world of technically functional but fundamentally brittle software built at a massive scale. We've entered Searle's Chinese Room collectively - people building systems they can't truly understand.

The numbers are sobering: a study of code generated by five different popular AI models found that at least 48% of the generated code snippets contained vulnerabilities while nearly 22% of code generated by open source models contained package names that don't even exist [1](https://www.darkreading.com/application-security/will-ai-code-generators-overcome-their-insecurities-2025). Another study from Microsoft reveals that AI models, including Anthropic's Claude 3.7 Sonnet and OpenAI's o3-mini, fail to debug many issues in a software development benchmark that wouldn't trip up experienced developers [2](https://techcrunch.com/2025/04/10/ai-models-still-struggle-to-debug-software-microsoft-study-shows/)

This reveals the fundamental gamble we're making: that we can build systems we don't understand as long as they produce what we want. Like Searle's Chinese Room, we're the users on the outside. We can input requirements and get working code back, but we have no idea why it works the way it does.

The heart of this entire issue lies in the disconnect between AI marketing and reality. Companies like OpenAI, Google, and Microsoft are selling "democratised development", despite their own studies showing AI fails at basic debugging tasks. These companies are at best selling the dream of "anyone can code" while knowing full well that debugging expertise is irreplaceable. They profit from the initial adoption, but aren't around for the maintenance nightmare. I look forward to writing more about that in the future.

In both, mine and SpacetimeSorcerer's case, the AI delivered working features: UI rendered correctly, button clicks initiated API calls, logins worked. But the bet fails the moment something breaks or when debugging is required. Then we become trapped outside our own creation, unable to navigate core problems.

When understanding becomes essential (debugging, security, scaling), we discover we can't retroactively acquire it. AI made us feel competent until the moment we actually needed to be.
