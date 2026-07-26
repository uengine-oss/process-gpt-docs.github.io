---
description: ''
sidebar: 'getting-started'
---

# Using AI Agents to Write a Sales Proposal

## ProcessGPT Tutorial Lv.2 Followed by Sales Proposal Writing Process

This tutorial introduces how to use AI agents to write a sales proposal through the following sales proposal writing process.

Sales Proposal Writing Process:<br>
**Customer Request Input → Proposal Draft Writing by AI Agent → Proposal Review**

<video controls width="100%" preload="metadata" style="max-width: 960px; border-radius: 8px; margin: 1.5rem 0;">
  <source src="/videos/tutorial/tutorial-lv2-ai-agent-proposal-narrated.mp4" type="video/mp4">
  Your browser does not support the video tag. <a href="/videos/tutorial/tutorial-lv2-ai-agent-proposal-narrated.mp4">Download the video</a>
</video>

> 💡 In this tutorial the proposal draft is generated unattended by the default
> orchestration, **deep agents (deepagents)**. The agent's knowledge is provided
> in a dual form — **learning (mem0)** plus a **DMN decision table**.

### (Optional) MCP Registration

Click the right-side top settings > MCP Server tab to navigate to the screen where MCP(Model Context Protocol) necessary during process execution can be registered. The pre-seeded MCP servers are **read-only seeds**, and this tutorial's draft generation works purely from the agent's learned/profile knowledge without external tools, so **MCP registration is optional** — register one only if you need tools such as external search.

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-1.png)
<br>

Click **New MCP Server** to register Perplexity MCP by copying and pasting the following content.

```
{
    "mcpServers": {
        "perplexity": {
            "env": {
                "PERPLEXITY_MODEL": "sonar",
                "PERPLEXITY_API_KEY": "<YOUR_PERPLEXITY_API_KEY>" 
            },
            "args": [
                "perplexity-mcp"
            ],
            "command": "uvx",
            "enabled": true,
            "transport": "stdio"
        }
    }
}
```
<br>

### Agent Registration

1. Click the '+' icon (Add and Manage Organization Chart) next to the agent.

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-2.png)
<br>

In the created organization chart, click 'Add Team' to add a new Sales Team to the organization.

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-3.png)
<br>

After that, click the 'Add New Agent' tab in the sales team > enter '**Proposal Writing Agent**' > click 'Create Agent With AI' button.

Through this process, you can create a new agent related to the tasks used by the sales team.

By generating arbitrary information about the agent through AI, checking and modifying it, and clicking save, you can see that the organization chart is updated as shown below by adding the proposal master agent to the sales team.

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-4.png)
<br>

### Agent Education

The method for creating a proposal with information learned through learning the internal business knowledge related to the created agent is as follows.

1. Click the registered proposal master agent, and then learn the internal knowledge necessary for writing a proposal in the learning mode chat window to the created proposal master agent.

After that, add the following content to the 'Message Input' area, and then enter Enter to send it to the agent to proceed with learning.
```
The following is the information necessary for writing a proposal, so please check it.

| KR 대한민국 (내수) | US 북미 (미국/캐나다) | EU 유럽 (독일/프랑스 등) |
|------------|-------------------|-------------------|
| 최소 주문 수량: 10개 | 50개 | 50개 |
| 기본 단가: 420,000원/개 | USD 320/개 (FOB) | USD 320/개 (FOB) |
| 배송료: 15,000원 (30개 이상 무료) | 약 180,000원 (50개 기준) | 약 210,000원 (50개 기준) |
| 납기일: 5일 이내 출고 | 7일~10일 | 7일~12일 |
| 인증: 없음 (내수용) | FCC 인증 필수 | CE 인증 필수 |
| 주의사항: 견적 요청 시 수량 확인 | 인증 요구 만족, NDA 요청 가능성 | 기술자료 요청 만족, 법적 선호 |
```
<br>

After learning is completed, the learned information is created as shown below (you can review/delete the learned knowledge in the **Knowledge Management** tab of the agent chat), and a proposal draft can be created based on the learned information when writing a proposal.

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-6.png)
<br>

2. **Dual-encoding rule-based knowledge — register a DMN decision table**

The region-based pricing/lead-time/certification table above is not narrative knowledge but **rule-based knowledge that maps a condition (region) to results (min. quantity, unit price, shipping, lead time, certification)**. Because learning (mem0) is semantic search, recall of such decision rules can be unstable, so it is recommended to also register the same table as a **DMN decision table**.

Use **'Business Rule +'** on the left of the agent chat to add a decision table with region as input and the pricing policy fields as outputs. The registered table appears under **'Business Rules'** in the agent chat and can be opened/edited in the decision-table editor at `/dmn/<rule id>`. Dual-encoding as **learning (mem0) + DMN decision table** gives you both narrative training and structured management/lookup of rule-based knowledge.

<br>

### Process Creation and Form Editing

Create the sales proposal writing process as shown below.

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-7.png)
<br>

To proceed with the settings for the proposal draft writing task, double-click to create a panel and then proceed with the settings in the **Agent** tab.

In the Agent tab, set **Agent research method = Deep Agent (deepagents)** and **Completion level = Draft**, then check **'Use a preconfigured agent'** and select the proposal writing agent created earlier. (With the completion level set to 'Draft', the agent fills in a draft and waits for a person to review and submit.)

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-8.png)
<br>

After the settings are completed, create a form to hold the proposal draft created by the agent in the form editing tab.

Copy and paste the following content into the right 'Message Input' area, and then enter Enter to create a form for the proposal draft.

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-12.png)

```
Create a form in Report format to receive the result of writing a proposal draft
```

After the final form is created, save the process, and then execute the proposal writing process in the process definition diagram.


### Proposal Writing by Agent

When executing the proposal writing process, add the proposal master as shown below in the role assignment to specify that the proposal master will perform the task when writing the proposal draft.

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-11.png)
<br>

After entering the request information, check the Kanban board to see that 'Agent Working' for proposal draft creation is displayed.

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-10.png)
<br>

After clicking the work item, check the 'Delegate to Agent' tab to see the process of writing the proposal draft by the agent.

![](../../../uengine-image/process-gpt/en/tutorial/lv-2/lv2-9.png)

After writing is completed, the proposal draft created by the agent is displayed in the 'Result Input' area to check.

After submitting, check the proposal in the sales team, and then click 'Submit Complete' to complete the process.