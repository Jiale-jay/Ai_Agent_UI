import { GrainCanvas } from "./components/GrainCanvas";

const snapshots = [
  {
    title: "Target Role",
    description: "AI Agent Product / Systems Engineer，关注从需求澄清、原型验证到工程落地的端到端交付。",
  },
  {
    title: "System Shape",
    description: "Tool-using agents, workflow orchestration, human-in-the-loop review, observability.",
  },
  {
    title: "Core Stack",
    description: "OpenAI API, Agents SDK, MCP, RAG, evals, browser automation, FastAPI / Next.js.",
  },
  {
    title: "Delivery Range",
    description: "从 demo 到可上线产品：定义边界、构建工具、测试行为、监控质量、持续迭代。",
  },
];

const capabilities = [
  {
    title: "Tool Calling",
    description: "为浏览器、代码仓库、表格、邮件、数据库和内部 API 设计清晰的工具契约、权限边界和错误返回。",
  },
  {
    title: "Workflow Orchestration",
    description: "把复杂任务拆成可追踪步骤，支持人工确认、失败恢复、状态续跑和多轮执行。",
  },
  {
    title: "RAG & Memory",
    description: "围绕业务知识设计检索、上下文压缩、长期记忆和证据引用，让输出可追溯而不是只看起来合理。",
  },
  {
    title: "Evals & Guardrails",
    description: "用评估集、结构化日志、约束策略和人工 review，把 agent 从演示推进到可维护的产品体验。",
  },
];

const projects = [
  {
    eyebrow: "01 / Research Agent",
    title: "Citation-first Research Agent",
    description: "面向行业调研、竞品分析和技术选型的浏览器 agent 模板，强调证据链、引用质量和结论复查。",
    details: [
      ["Problem", "手动检索耗时，来源分散，结论难复查，招聘方也很难判断 agent 是否真的可靠。"],
      ["Solution", "规划查询、浏览页面、提取证据、合并摘要，并在最终报告中保留来源与待验证假设。"],
      ["Stack", "Browser automation, Search, OpenAI API, structured notes, Markdown report."],
      ["Evaluation", "检查引用覆盖率、事实一致性、重复来源、不可证实结论和遗漏的反例。"],
      ["Next step", "替换为真实调研主题、报告链接和人工 benchmark 后，再填写节省时间或准确率指标。"],
    ],
  },
  {
    eyebrow: "02 / Ops Workflow Agent",
    title: "Human-reviewed Ops Workflow Agent",
    description: "面向重复运营流程的 task agent 模板，重点展示权限控制、人工确认和失败恢复，而不是只做聊天入口。",
    details: [
      ["Problem", "表格、邮件和内部系统之间需要反复同步信息，人工处理容易漏项、重复操作或缺少审计记录。"],
      ["Solution", "读取输入、归类任务、识别异常、生成建议动作，并在高风险操作前请求人工确认。"],
      ["Stack", "MCP tools, Sheets, Email, internal API, queue state, structured logs."],
      ["Evaluation", "跟踪任务完成率、误报率、人工确认次数、失败恢复路径和审计日志完整性。"],
      ["Next step", "接入真实业务流程后，用 pilot 数据补充每周节省时间、错误减少比例和人工介入成本。"],
    ],
  },
  {
    eyebrow: "03 / Code Review Agent",
    title: "Risk-focused Code Review Agent",
    description: "面向工程团队的 PR review agent 模板，重点展示风险定位、可执行反馈和测试信号整合。",
    details: [
      ["Problem", "代码审查需要快速发现行为回归、遗漏测试、权限问题和高风险边界，但普通摘要很容易制造噪声。"],
      ["Solution", "读取 diff、定位风险、引用文件位置、输出 review comment，并把测试结果纳入判断。"],
      ["Stack", "GitHub API, static analysis, test logs, LLM review rubric, inline comments."],
      ["Evaluation", "用历史 PR 回放评估命中率、噪声率、可执行性和是否遗漏关键风险。"],
      ["Next step", "接入真实仓库和 review 数据后，补充高风险改动覆盖率、误报率和开发者采纳率。"],
    ],
  },
];

const methods = [
  {
    step: "01",
    title: "Define the job and failure modes",
    description: "先写清任务边界、成功标准、禁止动作、升级路径，以及哪些步骤必须由人确认。",
  },
  {
    step: "02",
    title: "Design tools as contracts",
    description: "为工具调用设计输入输出、权限范围、错误处理、重试策略和审计日志。",
  },
  {
    step: "03",
    title: "Evaluate before scaling",
    description: "用回放数据、评估集和人工 review 校准 agent，而不是只看一次 demo 是否顺利。",
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
    description: "构建包含 RAG、工具调用、评估和结构化输出的业务应用。",
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
                  我构建的不是聊天机器人外壳，而是能连接业务系统、执行任务、
                  被评估、被监控，并且可以安全上线的 agent 产品体验。
                </p>
                <div className="actions">
                  <a className="button primary" href="#work">
                    查看项目模板
                  </a>
                  <a className="button" href="#resume">
                    查看能力匹配
                  </a>
                  <a className="button" href="#contact">
                    联系方式
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
                可信 case study 模板：不伪造真实数据，先把招聘方需要看的问题、方案、工具、评估和下一步讲清楚。
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
                我关注 agent 的真实工程问题：任务边界是否清晰，工具权限是否可控，
                失败是否能恢复，输出是否可验证，以及系统是否能被持续迭代。
                这份作品集先用模板展示我的产品化思路，真实项目链接、量化指标和简历文件可继续替换进来。
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
                  View Resume Fit
                </a>
                <a className="button" href="#contact">
                  Contact
                </a>
              </div>
              <p className="resume-note">
                占位说明：后续可把这里替换为 <code>resume.pdf</code>、LinkedIn、Notion 简历或真实项目链接。
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
          <span>Portfolio content uses placeholders until real projects and links are added.</span>
        </footer>
      </div>
    </>
  );
}
