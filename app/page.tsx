import { GrainCanvas } from "./components/GrainCanvas";

const snapshots = [
  {
    title: "Target Role",
    description: "AI Agent Product Engineer，偏端到端产品化、原型验证和工程落地。",
  },
  {
    title: "System Shape",
    description: "Tool-using agents, workflow orchestration, human-in-the-loop, observability.",
  },
  {
    title: "Core Stack",
    description: "OpenAI API, MCP, RAG, evals, browser automation, FastAPI / Next.js.",
  },
  {
    title: "Delivery Range",
    description: "From prototype to production: scope, build, test, monitor, iterate.",
  },
];

const capabilities = [
  {
    title: "Tool Calling",
    description: "让 agent 能安全连接浏览器、代码仓库、表格、邮件、数据库和内部 API。",
  },
  {
    title: "Workflow Orchestration",
    description: "把复杂任务拆成可追踪步骤，支持人工确认、失败恢复和多轮执行。",
  },
  {
    title: "RAG & Memory",
    description: "围绕业务知识设计检索、上下文压缩、长期记忆和证据引用。",
  },
  {
    title: "Evals & Guardrails",
    description: "用评估集、日志和约束把 agent 从 demo 推向可维护的产品体验。",
  },
];

const projects = [
  {
    eyebrow: "01 / Research Agent",
    title: "带引用的研究代理",
    description: "面向行业调研、竞品分析和技术选型的浏览器 agent，占位案例可替换为真实项目链接。",
    details: [
      ["Problem", "手动检索耗时，证据来源分散，结论难以复查。"],
      ["Behavior", "规划查询、浏览网页、提取证据、合并摘要并保留引用。"],
      ["Tools", "Browser, Search, OpenAI, Markdown report."],
      ["Evaluation", "检查引用覆盖率、事实一致性、重复来源和不可证实结论。"],
      ["Impact", "Template: reduce manual research time by X% after real benchmark."],
    ],
  },
  {
    eyebrow: "02 / Ops Workflow Agent",
    title: "运营工作流代理",
    description: "面向重复运营流程的 task agent，强调权限、确认和失败恢复，而不是只做聊天入口。",
    details: [
      ["Problem", "跨表格、邮件和内部系统同步信息，人工容易漏项。"],
      ["Behavior", "读取输入、归类任务、识别异常、生成操作建议。"],
      ["Tools", "MCP, Sheets, Email, internal API, structured logs."],
      ["Evaluation", "用任务完成率、误报率、人工确认次数衡量可靠性。"],
      ["Impact", "Template: save X hours/week for recurring workflow after pilot."],
    ],
  },
  {
    eyebrow: "03 / Code Review Agent",
    title: "代码审查代理",
    description: "面向工程团队的 PR review agent，重点是风险定位、可操作反馈和测试信号整合。",
    details: [
      ["Problem", "代码审查需要快速发现行为回归、遗漏测试和安全风险。"],
      ["Behavior", "读取 diff、定位风险、生成审查意见并引用文件位置。"],
      ["Tools", "GitHub API, static analysis, tests, LLM review rubric."],
      ["Evaluation", "用真实 PR 回放评估命中率、噪声率和可执行性。"],
      ["Impact", "Template: improve review coverage on high-risk changes by X%."],
    ],
  },
];

const methods = [
  {
    step: "01",
    title: "Define the job and failure modes",
    description: "先写清任务边界、成功标准、不可做事项和需要人工确认的动作。",
  },
  {
    step: "02",
    title: "Design tools as contracts",
    description: "为工具调用设计输入输出、权限范围、错误处理和审计日志。",
  },
  {
    step: "03",
    title: "Evaluate before scaling",
    description: "用回放数据、评估集和人工 review 校准 agent，而不是只看 demo 效果。",
  },
];

const principles = [
  "先定义任务和失败模式，再决定 agent 架构。",
  "可观测性、评估和日志不是上线后的补丁，而是设计的一部分。",
  "权限、安全、人工确认和回滚路径必须内建。",
];

const fits = [
  {
    title: "Agent Product Engineer",
    description: "负责从用户问题、agent workflow 到可用产品体验的端到端落地。",
  },
  {
    title: "LLM Application Engineer",
    description: "构建 RAG、工具调用、评估和结构化输出的业务应用。",
  },
  {
    title: "Workflow Automation Engineer",
    description: "把重复业务流程变成有权限控制、可回放、可监控的自动化系统。",
  },
];

const stack = [
  "OpenAI API",
  "Agents SDK",
  "MCP",
  "LangGraph",
  "RAG",
  "Vector DB",
  "Playwright",
  "FastAPI",
  "Next.js",
  "Docker",
];

export default function Home() {
  return (
    <>
      <GrainCanvas />
      <div className="field" aria-hidden="true" />

      <div className="page">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Agent Systems home">
            <span className="brand-mark" aria-hidden="true" />
            Agent Systems Engineer
          </a>
          <div className="nav-links">
            <a href="#systems">Systems</a>
            <a href="#work">Builds</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <main id="top">
          <section className="hero" aria-label="AI agent engineer introduction">
            <div className="hero-inner">
              <div>
                <p className="eyebrow">AI Agent Engineering / Tool-Using Systems</p>
                <h1>
                  Agents <span className="title-accent">That Do</span> Real Work
                </h1>
              </div>
              <div className="hero-copy">
                <p>
                  I design AI agents that reason, call tools, follow workflows,
                  recover from failures, and ship into real products.
                </p>
                <p>
                  我构建的不只是聊天机器人，而是能连接业务系统、执行任务、被评估、被监控、可安全上线的
                  AI agent。
                </p>
                <div className="actions">
                  <a className="button primary" href="#work">
                    查看项目
                  </a>
                  <a className="button" href="#resume">
                    查看简历
                  </a>
                  <a className="button" href="#contact">
                    联系合作
                  </a>
                </div>
                <div className="signal-panel" aria-label="Engineering focus">
                  <div className="signal-row">
                    <span>Loop</span>
                    <span>Plan - Tool Call - Observe - Recover - Report</span>
                  </div>
                  <div className="signal-row">
                    <span>Focus</span>
                    <span>Agents, MCP, RAG, Evals, Guardrails, Workflow Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="snapshot">
            <div className="section-head">
              <h2>Career Snapshot</h2>
              <span>为招聘方快速回答：我是谁、能交付什么、为什么适合 AI agent 产品工程岗位。</span>
            </div>
            <div className="snapshot-grid">
              {snapshots.map((snapshot) => (
                <div className="snapshot" key={snapshot.title}>
                  <strong>{snapshot.title}</strong>
                  <span>{snapshot.description}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="systems">
            <div className="section-head">
              <h2>Agent Systems</h2>
              <span>
                把模型能力落成可执行系统：任务边界、工具权限、状态流、评估和上线可靠性一起设计。
              </span>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <div className="capability" key={capability.title}>
                  <strong>{capability.title}</strong>
                  <span>{capability.description}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="work">
            <div className="section-head">
              <h2>Selected Builds</h2>
              <span>
                高质量占位 case study：不伪造真实数据，但把招聘方需要看的问题、行为、工具、评估和结果结构先搭好。
              </span>
            </div>
            <div className="work-grid">
              {projects.map((project) => (
                <article className="work-card" key={project.eyebrow}>
                  <div className="work-content">
                    <span className="work-number">{project.eyebrow}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="case-list">
                      {project.details.map(([label, detail]) => (
                        <li key={label}>
                          <b>{label}</b>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="method">
            <div className="section-head">
              <h2>How I Build Agents</h2>
              <span>展示的不只是会调 API，而是能把 agent 设计成可测试、可观测、可上线的产品系统。</span>
            </div>
            <div className="method-grid">
              {methods.map((method) => (
                <div className="method" key={method.step}>
                  <b>{method.step}</b>
                  <strong>{method.title}</strong>
                  <span>{method.description}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section principles" id="about">
            <h2>Build agents like systems, not magic tricks.</h2>
            <div className="about-panel" id="resume">
              <p>
                我关注 agent 的真实工程问题：任务边界是否清晰，工具权限是否可控，失败是否能恢复，输出是否可验证，以及系统是否能被持续迭代。
              </p>
              <div className="principle-list" aria-label="Engineering principles">
                {principles.map((principle, index) => (
                  <div className="principle" key={principle}>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <span>{principle}</span>
                  </div>
                ))}
              </div>
              <div className="fit-grid" aria-label="Hiring fit">
                {fits.map((fit) => (
                  <div className="fit" key={fit.title}>
                    <b>Fit</b>
                    <strong>{fit.title}</strong>
                    <span>{fit.description}</span>
                  </div>
                ))}
              </div>
              <div className="stack" aria-label="Technology stack">
                {stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="actions">
                <a className="button primary" href="#resume">
                  View Resume
                </a>
                <a className="button" href="#contact">
                  Contact
                </a>
              </div>
              <p className="resume-note">
                Resume CTA is wired to this section for now. Add <code>resume.pdf</code> later or replace the
                button with your LinkedIn / Notion resume link.
              </p>
              <div className="contact-links" id="contact" aria-label="Contact links">
                <a href="mailto:hello@example.com">
                  <span>Email</span>
                  <span>待替换：hello@example.com</span>
                </a>
                <a href="#" aria-label="Visit GitHub placeholder">
                  <span>GitHub</span>
                  <span>待替换：@your-github</span>
                </a>
                <a href="#" aria-label="Visit LinkedIn placeholder">
                  <span>LinkedIn</span>
                  <span>待替换：/in/your-profile</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <span>AI Agent Systems Engineer © 2026</span>
          <span>Designed as a grain-based agent interface.</span>
        </footer>
      </div>
    </>
  );
}
