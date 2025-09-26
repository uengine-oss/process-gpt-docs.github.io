---
description: ''
sidebar: 'getting-started'
---
# Process-GPT Introduction

Process-GPT is a multi-agent based process execution engine that aims to automate enterprise End-to-End processes with minimal human intervention.

## Process-GPT Core Values

*   **Autonomous Business Process Automation**: Process GPT is designed so that once business processes are defined, **AI agents automatically execute them**, producing results without requiring humans to manually perform or direct every step. This minimizes human intervention and implements ambient agent philosophy, ensuring that agents operate with maximally automated processes so that humans do not become productivity constraints.
*   **Flexible and Powerful Multi-Agent Collaboration**: Process GPT is configured so that **multiple AI agents collaborate within a single workflow**, professionally handling complex tasks and sharing intermediate results to reliably automate high-complexity work that would be difficult for a single agent. Each agent utilizes specialized domain knowledge and tools, and can call upon other specialized agents to delegate tasks when necessary.
*   **Natural Language-Based Continuous Process Learning and Optimization**: It enables business users without specialized knowledge to **define business processes in natural language**, automating the creation of initial process models. Additionally, it analyzes user feedback or system logs on agent-performed results to continuously improve processes, and establishes an **automatic optimization cycle** that strengthens learning data for work that went down incorrect paths to improve them next time.

## Design Principles
Users should be able to declare and modify processes, rules, system integration mechanisms, etc. in natural language, and the system should automatically improve with minimal feedback provided during use.  
All such changes should be logged for traceability and recovery, while users should be able to directly control automation results and regulations at any time through a generalized UI.  
 
### Principle 1. Natural Language-Centric Definition and Unlearning-Based Operation
- All **process definitions, rules, system integrations, and business screens** must be writable in **natural language** without requiring programming knowledge or complex logical/mathematical thinking.  
- Users should be able to design automation with only **business goal or strategic-level descriptions** without going through separate training processes.  
- The system should progressively refine and manage itself with only **minimal feedback (approval, modification, rejection)** provided during actual usage.  

### Principle 2. Human in the Loop and Exemplars-Based Learning
- Automated agents must always provide a **human interface** that allows **human takeover** at any time.  
- Each task should clearly provide the **necessary context (related data, previous step outputs, similar cases)** to make it easy for humans to process.  
- Agents learn from **actual execution examples** performed directly by humans to correct and improve their execution knowledge. In other words, **human exemplars** become the agent's training data.  

### Principle 3. Automatic Compensation and Separation of Recovery Responsibility
- When errors or failures occur during agent-executed automation processes, **automatic recovery should be performed through compensating transactions (rollback)**.  
- Operators should not need to individually track and modify the detailed actions of agents; **the system itself should take responsibility for handling failure recovery**.  
- Through this approach, users are freed from system imperfections, and overall business continuity is guaranteed.
