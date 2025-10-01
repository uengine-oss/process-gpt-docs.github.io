---
description: ''
sidebar: 'getting-started'
---

# Local Installation Guide

## Overview
This is a simple guide for running Process-GPT on a local Kubernetes/Kind cluster.

## Required Conditions
- Docker 
- kubectl
- kind


## Project Preparation
Clone the Process-GPT project from [GitHub](https://github.com/uengine-oss/process-gpt):
```sh
git clone https://github.com/uengine-oss/process-gpt.git
cd process-gpt
```


## Installation and Execution

**1. Install Required Tools**

```sh
# Install and run Docker Desktop
docker --version

# Install kubectl
# https://kubernetes.io/docs/tasks/tools/install-kubectl/

# Install kind (Mac)
brew install kind

# Install kind (Windows)
curl.exe -Lo kind.exe https://kind.sigs.k8s.io/dl/v0.20.0/kind-windows-amd64
```

<br>

**2. Create Cluster**

```sh
# Mac
kind create cluster --name process-gpt

# Windows
.\kind.exe create cluster --name process-gpt
```

<br>

**3. Update Configuration Files (Required)**

Edit `secrets.yaml` with actual values:

```sh
OPENAI_API_KEY: "sk-your-actual-openai-key"
SUPABASE_KEY: "your-actual-supabase-anon-key"
SERVICE_ROLE_KEY: "your-actual-supabase-service-role-key"
JWT_SECRET: "your-actual-jwt-secret"
DB_NAME: "your-db-name"
DB_USER: "your-db-user"
DB_PASSWORD: "your-db-password"
DB_HOST: "your-db-host"
DB_PORT: "your-db-port"
SMTP_PASSWORD: "your-smtp-password"
LANGSMITH_API_KEY: "your-langsmith-api-key"
LANGSMITH_PROJECT: "your-langsmith-project"
MEM_ZERO_API_KEY: "your-mem-zero-api-key"
PERPLEXITY_API_KEY: "your-perplexity-api-key"
# Google Cloud settings: contents of credentials.json for the google-credentials secret
```

Edit `configmap.yaml` with actual values:

```sh
SUPABASE_URL: "https://your-project.supabase.co"
SMTP_PORT: "587"
SMTP_SERVER: "smtp.gmail.com"
SMTP_USERNAME: "your-smtp-username"
```

<br>

**4. Deployment Order**

```sh
# Step 1: Deploy core configuration files (required)
kubectl apply -f secrets.yaml
kubectl apply -f configmap.yaml
kubectl apply -f secrets-test.yaml
kubectl apply -f configmap-test.yaml
kubectl apply -f rbac.yaml
kubectl apply -f pvc.yaml

# Step 2: Deploy all deployments and services
kubectl apply -f deployments/
kubectl apply -f services/
```

<br>

**5. Check Status**

```sh
kubectl get pods
kubectl get services
kubectl get secrets
kubectl get configmaps
```

<br>

**6. Access the Application**

```sh
kubectl port-forward service/frontend-service 3000:5173
```

Open the browser and navigate to http://localhost:3000.


## File Description

**Core Configuration Files:**

- `secrets.yaml`: Sensitive values (API keys, DB credentials, JWT secrets) - Update with actual values.
- `configmap.yaml`: Public configuration values (e.g. Supabase URL) - Update with actual values.
- `rbac.yaml`: Service account permissions for MCP proxy (Role-based access control).
-` pvc.yaml`: Permanent volume claim for LangChain caching.

**Deployment Files:**

- `deployments/`: Deployment configuration for all applications.
- `services/`: Networking configuration for all services.

