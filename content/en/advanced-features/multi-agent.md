---
description: ''
sidebar: 'getting-started'
---

# Fully Autonomous Deep Agent: Plan & Solve

## 1. MCP-based Multi Agent Automatic Draft Creation

Multi Agent is a system that automatically analyzes and implements the optimal solution for complex tasks through MCP(Model Context Protocol) integrated multi-agent, enabling autonomous problem solving.

Specialized AI agents automatically form teams based on business requirements, perform projects in their specialized fields, and solve problems flexibly through delegation and inquiry between agents to achieve their goals independently. <br>
Furthermore, through MCP, hundreds of business tools such as internal document search, Office tools, databases, cloud services, etc. are connected through a single interface, allowing agents to access all company systems like actual employees, from CRM analysis to report writing, schedule management, and department collaboration, shortening the time it takes to complete tasks that previously took days and ensuring specialization through the use of various tools by agents.

### 1.1 Multi Agent Draft Creation

The method for using the Multi Agent to create a proposal draft for the sales management process is as follows.

Click the process registered in the process definition chart, and then click the 'Execute' button in the screen below.<br>
![](../../../uengine-image/process-gpt/multi-agent/1.png)

After that, click the 'Quick Draft Creation' at the top to create the customer information request writing task, and then click the 'Submit Complete'. <br>
![](../../../uengine-image/process-gpt/multi-agent/2.png)

After the submission is completed, you can see that the customer information request writing task has been completed in the progress status, and the proposal draft writing task is currently in progress as shown below.<br>
![](../../../uengine-image/process-gpt/multi-agent/3.png)

After that, click the 'Kanban Board' to click the proposal draft writing task among all tasks of the sales management process. <br>
![](../../../uengine-image/process-gpt/multi-agent/4.png)

After clicking the 'Agent Monitoring' in the proposal draft writing task, the specialized AI agents for the sales management process requirements each start the proposal draft writing they need. <br>
![](../../../uengine-image/process-gpt/multi-agent/5.png)

By clicking the 'Select' in one of the proposal drafts written by the agent for the sales activity report, the selected report is created in the Proposal Draft Entity as shown below. <br>
![](../../../uengine-image/process-gpt/multi-agent/7.png)

By clicking the report, you can check the detailed contents, and you can perform the work for the contents that need to be modified or added. <br>
![](../../../uengine-image/process-gpt/multi-agent/8.png)

By dragging a specific content, you can input the requirements for the dragged area and perform creation and modification as shown below. <br>
![](../../../uengine-image/process-gpt/multi-agent/9.png)

![](../../../uengine-image/process-gpt/multi-agent/10.png) <br>
<Report modification result based on requirements>

By selecting the 'Sales Activity_Slide' in the same way, clicking the 'Submit Complete' will complete the proposal draft writing task.
![](../../../uengine-image/process-gpt/multi-agent/11.png)

After that, by checking the progress again, you can see that the proposal draft writing task that was in progress has been completed based on the proposal created by the AI agent.
![](../../../uengine-image/process-gpt/multi-agent/12.png)

## 2. Intelligent Multi-Agent System

ProcessGPT's multi-agent is not a chatbot that merely answers user questions. It is a 'Digital Team' that understands your business rules and where multiple AIs collaborate organically to achieve your goals.

### 2.1 Effortless Custom Assistant Setup and Role Allocation

Users do not need to design complex workflows step by step. Just give the agent a 'Goal' and a 'Persona.'
The system independently understands the business rules and difficulty, breaks the task into multiple stages, and distributes roles across Sub-Agents. Under the direction of the Main Agent, Sub-Agents specialized in each domain collaborate to successfully execute complex projects.

### 2.2 Unbroken Memory: VFS (Virtual File System) Architecture

The biggest challenge when multiple agents collaborate is the 'disconnection of context.' To solve this, ProcessGPT applies a large-scale Virtual File System (VFS) architecture.
No matter how complex or long the process is, all agents share work history and outputs in real time through the VFS, so context is perfectly remembered from start to finish without any loss, and work continues seamlessly.

![](../../../uengine-image/process-gpt/multi-agent/13.png)
[Architecture in which the Main Agent directs Sub-Agents and the VFS shares the overall context]
<br>
<br>
<br>

### 2.3 Perfect Control: Safe Decision-Making via Critical Pause

This eliminates the anxiety of fully delegating work to AI. When the agent itself determines there is risk, or when an important branch point requiring administrator approval is reached (payments, final dispatches, deletion of important data, etc.), the system **autonomously enters a wait state (Critical Pause)**.

The next operation resumes only after the administrator has finally reviewed and approved the content, guaranteeing 100% predictable and safe results.

![](../../../uengine-image/process-gpt/multi-agent/14.png)
[Screen showing the multi-agent system collecting and processing Google Sheets data in real time]
<br>
<br>
<br>

## 3. From Imperative AI to Delegational AI

Existing AI was like a car in which the driver had to operate the pedals and steering wheel at every moment. The user had to instruct the next action at every step, and had to be involved in every detail — the order of tool use, data sources, exception handling, and so on. As a result, delegating work to AI often turned out to be more cumbersome than doing it manually.

**ProcessGPT's Deep Agent is different.** Just like fully autonomous driving, **once you tell it the destination (the request), it handles everything from route planning to driving — all on its own.** What makes this possible is the **Plan & Solve paradigm**.

> **📌 What is Plan & Solve?**
> An autonomous execution model in which the Main Agent receives the user request, ① decomposes the task and establishes a plan (**Plan**), and then ② orchestrates the appropriate Sub-Agents and tools to fully execute it (**Solve**). The user simply receives the result.

---

## 4. Plan Stage — It Decomposes and Configures On Its Own

When a user request comes in, the first thing the **Main Agent** does is not to produce a response. **It first designs "how to solve this request."**

### 4.1 Dynamic Plan Generation

The Main Agent independently judges the complexity of the request and chooses one of two paths.

- **Simple request** → The Main Agent handles it directly to minimize response time.
- **Complex request** → The task is broken down into multiple sub-tasks, and a **Sub-Agent** specialized for each sub-task is dynamically configured.

The important point here is that Sub-Agents are not pre-registered fixed workflows but **one-off agents generated on demand to fit the request**. Even for the same user, the task is decomposed into a different combination each time depending on the request content.

### 4.2 Automatic Skill Mapping

Each Sub-Agent is automatically mapped to the **Skills** and **Tools** required to perform its role, without any separate designation. The user does not need to tell it "use this API" or "look at this data source" individually.

**Example:** "Tell me how to apply for vacation, and also show me the status of my vacation requests."

| Step | Auto-Mapped Tools |
|------|----------------|
| User identification | `get_current_user` |
| Process definition lookup | `process list lookup`, `process detail lookup` |
| Application form analysis | `form field lookup` |
| Personal progress lookup | `instance list lookup`, `task list lookup` |

→ **The user entered just one sentence, but the Main Agent calls 6 tools simultaneously.**

![](../../../uengine-image/process-gpt/multi-agent/15.png)
[Plan — The request is decomposed and the necessary tools are automatically selected. The right-side panel shows 6 tools being auto-invoked in real time.]
<br>
<br>
<br>

---

## 5. Solve Stage — It Executes to the End and Returns an Integrated Result

Once the plan is established, Sub-Agents execute tasks in parallel or sequentially, and the Main Agent bundles the results into a single final answer.

### 5.1 Autonomous Execution

- Without any additional questions to the user, it finds answers by calling registered data and systems.
- Failed tool calls are retried or alternative paths are explored.
- The Main Agent **integrates the results from multiple Sub-Agents into a single coherent response**.

### 5.2 Background Persistence

For long-running tasks, even if the user closes the chat window or moves on to other work, **the agent finishes the task to the end in the background**. Generated files and outputs are managed in a separate downloads list so they can be revisited at any time.

This is built on top of a LangGraph-based checkpointing structure, so even if the container is restarted or moved to another node, the task is not interrupted and continues.

![](../../../uengine-image/process-gpt/multi-agent/16.png)
[Solve — The 6 tools are combined to return a complete answer. Application procedure guide (process definition) + personal application status (instance) integrated into a single-screen response.]
<br>
<br>
<br>

---

## 6. Safety Net — Human-in-the-Loop

The speed of autonomy must not become the speed of risk. ProcessGPT's Deep Agent **always requires explicit user approval** for the following kinds of actions.

- Irreversible actions such as deleting or modifying DB data
- Write actions against external systems (sending emails, submitting approvals, payments, etc.)
- Sensitive actions pre-designated by the administrator

It is a structure where the speed of automation and human judgment are balanced. It is like having an emergency stop button in an autonomous vehicle.

### 6.1 Pre-Generation Review — Selecting Skills, Agents, and DMN Rules

Instead of generating the process immediately, the AI first presents candidate Skills, Agents, and DMN rules it deems necessary. The user selects and approves only the desired items, and can also make additional requests through a direct input field. Only approved items are reflected in the generation, preventing unwanted elements from being mixed into the result.

![](../../../uengine-image/process-gpt/multi-agent/17.png)
[Screen where the user directly selects the Skills and Agents to be generated during the HITL stage (vacation request process example)]
<br>
<br>
<br>

### 6.2 Generation Resolution Selection

Even with the same document, you can directly specify the level of detail of the result according to the work purpose. By choosing one of Concise, Standard, or Detailed, the strength of node normalization and deduplication is adjusted accordingly. Concise for reports, Detailed for training/manuals — one generation handles multiple purposes.

### 6.3 Post-Generation Automatic Verification and Correction

Immediately after generating the process as approved, the system inspects the result for defects on its own and automatically corrects missing parts. Even without the user manually reviewing each item, the result delivered at the completion point has already gone through one round of verification. Following Principle 3 (Separation of Automatic Compensation and Recovery Responsibilities), the system takes responsibility for its own integrity.

![](../../../uengine-image/process-gpt/multi-agent/18.png)
[Screen where the system automatically detects and corrects defects in the generated process]
<br>
<br>
<br>

---

## 7. Behavior Example — Vacation Request Scenario

### User Request
> "Tell me how to apply for vacation, and also show me the status of my vacation requests."

### Agent Behavior

**Plan Stage (instant):**
- The Main Agent decomposes the request into two sub-objectives
  - ① Vacation request procedure guide (definition area)
  - ② Look up the user's own vacation request status (instance area)
- Auto-identifies 6 tools needed for each objective
- Sequential calls start from `tool_start: work-assistant__get_form_fields`

**Solve Stage (within seconds):**
- Step-by-step application guide (based on process definition + form fields)
  1. Fill in the application form in the vacation request process
  2. Input items: vacation start date / vacation end date / reason
  3. Upon submission, proceed to the administrator approval/rejection step
  4. After approval, continue to the HR notification step
- Integrated display of the user's own application status (based on instance + tasks)

### User-Perspective Difference
- **Existing approach:** "Show me the process definition" → check → "Show me my application status" → check → mentally combine the two pieces of information
- **Plan & Solve:** **One sentence → one integrated answer**

---

## 8. Comparison with the Traditional Approach

| Aspect | Traditional Fragmented AI | Plan & Solve Deep Agent |
|------|--------------|----------------------|
| **User burden** | Step-by-step instruction required | Delegated with a single request |
| **Task decomposition** | User decomposes and instructs directly | Main Agent decomposes automatically |
| **Sub-Agents** | None or fixed | Dynamically generated per request |
| **Tool mapping** | User specifies explicitly | Role-based automatic mapping |
| **Execution persistence** | Stops when leaving the screen | Auto-completes in the background |
| **Result form** | Separate response per tool call | Integrated single answer |
| **Safety control** | None or blanket blocking | HITL approval only for critical actions |

---

## 9. Suitable Workloads

The Plan & Solve Deep Agent is most effective for **work that crosses multiple systems, data sources, and rules**.

- **Internal administration** — Vacation/business trip/purchase application procedure guides + personal status lookup
- **Data analysis** — Data collection from multiple DBs and files → processing → visualization
- **Document processing** — Parsing heterogeneous formats such as PDF/BPMN/Excel → integrated report generation
- **Process operations** — Instance monitoring + anomaly detection + automated owner notifications
- **Customer response** — Policy guidance + per-customer history lookup + response guide generation

Conversely, for **single information lookups** or **clear single-tool calls** where decomposition is unnecessary, the Main Agent handles them directly, so the system does not always run heavily.

---

## 10. Key Message

> **Beyond simple conversational bots, it understands business context and proactively orchestrates workflows.**
> **Now, experience true AI automation that is transparent and controllable.**

---

*ProcessGPT is an enterprise AI workspace based on the LangChain Deep Agents architecture, and the Plan & Solve behavior described in this document is provided by default in all standard license environments.*
