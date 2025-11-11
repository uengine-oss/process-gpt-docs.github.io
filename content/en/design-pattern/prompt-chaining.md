---
description: ''
sidebar: 'getting-started'
---

# 1. Prompt Chaining

## Definition

A pattern that divides complex tasks into multiple steps, connects the results of LLM calls sequentially, and combines them with an agent system and MCP to automatically automate workflows. 

## Key Features


* **Sequential Dependence** The output of the previous step is passed as input to the next step. 
* **Task Decomposition** Decompose complex problems into manageable sub-tasks. 
* **Step-by-step Optimization** Improve the quality of results by using specialized prompts for each step. 
* **Clear Observability** Monitor intermediate results and make debugging easier. 

## Use Cases

* Complex text generation (paper, report)  
* Multi-step reasoning problem solving  
* Code generation pipeline  
* Search-analysis-summary workflow  

## Working Principle

![](../../../uengine-image/process-gpt/design-pattern/1.png)


## Simple Implementation Example (Working Principle)

1. **Initial Prompt (Summary)**:  
   "Please summarize the key findings of the following market research report: [text]."  
   (Since the model's sole focus is summarization, the accuracy of the initial stage is improved.)

2. **Second Prompt (Trend Identification)**:
   "Please identify the top 3 emerging trends based on the summary and extract concrete data points supporting each trend: [1st step output]."  
   (This prompt is now more limited and based directly on verified outputs.)

3. **Third Prompt (Email Writing)**:
   "Please write a concise email to the marketing team summarizing the following trends and the supporting data: [2nd step output]."



