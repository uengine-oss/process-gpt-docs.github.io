---
description: ''
sidebar: 'getting-started'
---

# Multi Agent

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

## 3. From Black Box to Glass Box: A Transparent Environment Where Every AI Action Is Visible (Glass-box Orchestration)

The biggest concern when delegating work to an AI is the frustration of "not being able to see the process." ProcessGPT automates complex collaboration scenarios while exposing every reasoning step and execution detail of its agents in real time, turning what used to be a "black box" workspace into a "glass box."

### 3.1 Real-time Visibility into Every Step

The right-side panel exposes, in real time, how the agent has decomposed the task (To-Do) as well as which tools and materials it is currently using.

- **Step-by-step tracking:** No matter how long the task is, you can see step-by-step progress instantly — eliminating the "I have no idea what the AI is doing right now" frustration.
- **Reasoning transparency:** Beyond just producing a final result, the agent transparently shows why it chose a given tool and which sources it is referencing.

<br>

[Multi-agent task decomposition and real-time progress UI]
<br><br><br>

### 3.2 Uninterrupted Work That Completes Even When You Step Away (Persistence)

Even if you close the chat room or move on to other work, the agent's task does not stop.

- **Background execution:** Complex analyses or long reports are safely finalized by the AI in the background.
- **Completion alerts and listing:** Generated files and outputs are organized into a clean list so you can come back anytime to download them.

<br>

### 3.3 Human Approval for Critical Tasks (Human-in-the-Loop)

The speed of automation and human judgment are combined in balance to guarantee a safe operating environment.

<br><br><br>
