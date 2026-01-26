---
description: ''
sidebar: 'getting-started'
---

# Claude Skills-based Reasoning Agent

ProcessGPT goes beyond simple question-answering AI by integrating with **Claude Skills** to provide **Autonomous Agent** functionality that analyzes situations, uses tools independently, and completes tasks.

## What is a Self-Evolving Agent?

### 1. ProcessGPT x Claude Skills: A Dynamic Partner That Gets More Refined with Use
"Beyond simple execution, it learns and optimizes the organization's business logic on its own."
While traditional AI agents were **'Static Tools'** that only repeated pre-defined scripts, ProcessGPT is a '**Self-Evolving Partner**' that grows through feedback. Without additional developer involvement or complex data tuning (Zero-Effort Training), the agent evolves into a form that perfectly fits the organization's characteristics through daily repetitive tasks.

## 1. 3-Step Reasoning Engine

The agent processes user requests through a 3-step reasoning process: Situation Analysis (Thought) → Tool Execution (Action) → Result Verification (Observation). Users can transparently review this entire process in 'Action Mode' to understand the agent's reasoning.

- **Planning**: The agent calls find_helpful_skills to autonomously explore necessary skills for goal achievement.
- **Skill Execution**: Directly executes skills for complex tasks such as data analysis and document conversion to derive results.

![](../../../uengine-image/process-gpt/claude-skills/1.png)
- Agent querying skill lists and establishing execution plans to perform tasks
<br>
<br>
<br>

![](../../../uengine-image/process-gpt/claude-skills/2.png)
- Screen showing data visualization chart generation using skills (Seaborn, etc.) and returning final answers
<br>
<br>
<br>


## 2. Key Usage Scenarios
### 2. Use Case 1: Feedback-based Business Rule Refactoring (Rule Refactoring)
When users provide feedback in natural language about task processing results, AI does not simply leave it as a memo. It analyzes the feedback and immediately modifies (Re-programming) the system's **Business Rules**.

#### 2.1. Problem Situation and Feedback Provision
The agent rejected a book rental application according to existing rules (rental prohibited if overdue history exists). The administrator instructs a new policy in natural language through the chat window: **"Allow rental if overdue history is less than 5 times"**.

![](../../../uengine-image/process-gpt/claude-skills/key-Usage-scenarios-1.png)
- Administrator instructing policy change in natural language regarding the agent's rejection
<br>
<br>
<br>

#### 2.2. Automatic Rule Conversion and Application
AI immediately analyzes this feedback and modifies the internal Decision Table. Without complex coding, the **'Rental Availability'** judgment logic is updated in real-time.

![](../../../uengine-image/process-gpt/claude-skills/key-Usage-scenarios-2.png)
- History showing the DMN (Decision Model and Notation) rule changed to **'Allow under 5 overdues'** reflecting user feedback
<br>
<br>
<br>

#### 2.3. Reprocessing with Changed Rules (Success)
After the rules are changed, the agent completes the approval process for rental applications under the same conditions. In this way, the agent acts like a colleague who responds flexibly to situations, not a fixed program.

![](../../../uengine-image/process-gpt/claude-skills/key-Usage-scenarios-3.png)
- Result screen showing the book rental application being properly approved according to the changed rules
<br>
<br>
<br>

### 3. Use Case 2: Skill Generation through Real-time Coding (Custom Skill Generation)
When a new feature that doesn't exist in the organization is needed, AI responds by creating **'Custom Skills'** through real-time coding.

#### 3.1. New Feature Request
The user requests **"Generate the completed book rental application results as an Excel file"**. The existing system does not have an Excel generation feature.

![](../../../uengine-image/process-gpt/claude-skills/key-Usage-scenarios-4.png)
- User requesting a previously non-existent **'Excel file generation'** feature in natural language
<br>
<br>
<br>

#### 3.2. Skill Generation and Code Writing
AI writes the necessary code itself to perform the request. It generates execution code like generate_excel.py and registers it in its **Skillset**.

![](../../../uengine-image/process-gpt/claude-skills/key-Usage-scenarios-5.png)
- AI defining a new skill called book-return-confirmation and automatically generating Python code
<br>
<br>
<br>

#### 3.3. Skill Registration Complete
Now this agent has permanently acquired the **'Excel generation'** ability. When similar requests come in later, it processes the task using that skill without additional learning.

![](../../../uengine-image/process-gpt/claude-skills/key-Usage-scenarios-6.png)
- The created skill is officially registered in the agent's tool list and is ready for reuse at any time
<br>
<br>
<br>




## 3. Integrated Tab and Process Instance View

Complex workflows are provided through **'Integrated Tabs'** and **'Table UI'** that can be grasped at a glance, rather than fragmented chat windows.

- **BPMN Visualization**: Track the current agent's work stage (Task) in real-time through the left process map.
- **Execution Log Table**: Manage processing time, assignees, and input/output data for each stage in list format to improve work efficiency.

![](../../../uengine-image/process-gpt/claude-skills/3.png)
- Integrated dashboard monitoring process map and execution logs on one screen
<br>
<br>
<br>


## 4. Safe Optimization: Ephemeral Versions

Supports **'Ephemeral'** functionality that allows safe modification and testing of specific agent behavior without stopping the entire operational system.

- **Feedback Loop**: When execution results differ from intent, entering feedback in natural language allows the AI to immediately modify conditions by reflecting the feedback.
- **Version Management**: Modified content is saved as temporary versions without affecting the live environment, allowing deployment as official versions after sufficient verification.

![](../../../uengine-image/process-gpt/claude-skills/4.png)
- Agent self-correcting judgment criteria **(Given/When/Then)** by reflecting user feedback
<br>
<br>
<br>

![](../../../uengine-image/process-gpt/claude-skills/5.png)
- Version history saving modified content as temporary versions and managing history to assist safe deployment



