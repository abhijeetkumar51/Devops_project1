# 🚀 DevOps Project — Node.js + Docker + CI/CD

![CI/CD Pipeline](https://github.com/abhijeetkumar51/Devops_project1/actions/workflows/main.yml/badge.svg)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=flat&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

A production-ready Node.js REST API containerized with Docker and deployed using a fully automated GitHub Actions CI/CD pipeline.

---

## 🏗️ Architecture

```
Developer → GitHub Push
                ↓
        GitHub Actions (CI/CD)
                ↓
        ┌───────────────┐
        │  Build & Test │
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │  Docker Build │
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │  Docker Hub   │
        │    (Push)     │
        └───────────────┘
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Node.js + Express | REST API Backend |
| Docker | Containerization |
| Docker Compose | Multi-container orchestration |
| GitHub Actions | CI/CD Automation |
| Docker Hub | Container Registry |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/health` | Health check (uptime, status) |
| GET | `/api/info` | App & environment info |

---

## ⚙️ Run Locally

### Without Docker
```bash
npm install
npm start
```

### With Docker
```bash
docker build -t devops-app .
docker run -p 3000:3000 devops-app
```

### With Docker Compose
```bash
docker-compose up --build
```

App will be available at: **http://localhost:3000**

---

## 🔄 CI/CD Pipeline

Every push to `main` branch automatically:
1. ✅ Checks out the code
2. ✅ Sets up Node.js 18
3. ✅ Installs dependencies
4. ✅ Builds the Docker image
5. ✅ Pushes image to Docker Hub

---

## 📁 Project Structure

```
Devops_project/
├── .github/
│   └── workflows/
│       └── main.yml       # GitHub Actions CI/CD
├── index.js               # Express app entry point
├── package.json           # Node dependencies
├── Dockerfile             # Docker image config
├── docker-compose.yml     # Docker Compose config
├── .gitignore             # Git ignore rules
└── README.md              # Project documentation
```

---

## 👨‍💻 Author

**Abhijeet Kumar**  
[GitHub](https://github.com/abhijeetkumar51)
