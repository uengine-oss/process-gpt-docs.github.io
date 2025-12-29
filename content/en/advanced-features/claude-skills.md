---
description: ''
sidebar: 'getting-started'
---

# Claude Skills-based Reasoning Agent

ProcessGPT goes beyond simple question-answering AI by integrating with Claude Skills to provide autonomous agent functionality that analyzes situations, uses tools independently, and completes tasks.

## 1. 3-Step Reasoning Engine

The agent processes user requests through a 3-step reasoning process: Situation Analysis (Thought) → Tool Execution (Action) → Result Verification (Observation). Users can transparently review this entire process in 'Action Mode' to understand the agent's reasoning.

**Planning**: The agent calls find_helpful_skills to autonomously explore necessary skills for goal achievement.

**Skill Execution**: Directly executes skills for complex tasks such as data analysis and document conversion to derive results.

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


## 2. Integrated Tab and Process Instance View

Complex workflows are provided through **'Integrated Tabs'** and **'Table UI'** that can be grasped at a glance, rather than fragmented chat windows.

**BPMN Visualization**: Track the current agent's work stage (Task) in real-time through the left process map.

**Execution Log Table**: Manage processing time, assignees, and input/output data for each stage in list format to improve work efficiency.

![](../../../uengine-image/process-gpt/claude-skills/3.png)
- Integrated dashboard monitoring process map and execution logs on one screen
<br>
<br>
<br>


## 3. Safe Optimization: Ephemeral Versions

Supports 'Ephemeral' functionality that allows safe modification and testing of specific agent behavior without stopping the entire operational system.

**Feedback Loop**: When execution results differ from intent, entering feedback in natural language allows the AI to immediately modify conditions by reflecting the feedback.

**Version Management**: Modified content is saved as temporary versions without affecting the live environment, allowing deployment as official versions after sufficient verification.

![](../../../uengine-image/process-gpt/claude-skills/4.png)
- Agent self-correcting judgment criteria (Given/When/Then) by reflecting user feedback
<br>
<br>
<br>

![](../../../uengine-image/process-gpt/claude-skills/5.png)
- Version history saving modified content as temporary versions and managing history to assist safe deployment



