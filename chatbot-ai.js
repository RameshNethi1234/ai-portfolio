// Resume Knowledge Base for AI Chatbot
const resumeKnowledgeBase = {
    personal: {
        name: "Ramesh Nethi",
        email: "rameshnethi1234@gmail.com",
        phone: "+91 628 140 5686",
        portfolio: "https://ramesh-nethi.netlify.app/",
        linkedin: "https://www.linkedin.com/in/ramesh-nethi-7481ba213/",
        github: "https://github.com/RameshNethi1234",
        title: "Software Development Engineer - 1"
    },

    experience: [
        {
            company: "MetricDust",
            role: "Software Development Engineer - 1",
            location: "Remote",
            duration: "May 2025 - Present",
            achievements: [
                "Designed and implemented fully serverless, cloud-native multi-tenant architecture for real estate enterprise",
                "Achieved 75% reduction in data retrieval latency by redesigning backend from NoSQL to SQL",
                "Reduced API latency by ~50% through architecture-driven database schemas and performance-tuned queries",
                "Integrated Azure AI Agents, decreasing manual intervention by 50% and API calls by 30%",
                "Provisioned infrastructure as code with Terraform for multi-environment deployments",
                "Developed end-to-end automated deployment pipelines in Azure DevOps"
            ],
            technologies: ["AWS Lambda", "PostgreSQL", "Azure AI", "Terraform", "API Gateway", "DynamoDB", "Azure DevOps"]
        },
        {
            company: "Argano",
            role: "Associate Technical Consultant",
            location: "Hyderabad, Telangana",
            duration: "June 2022 - Apr 2024",
            achievements: [
                "Designed cloud-native serverless Stripe payment system for Intview SaaS platform",
                "Developed Python Lambda functions for automated payment processing and invoice delivery",
                "Orchestrated workflows using AWS Step Functions for event-driven processing",
                "Built RESTful APIs with custom authorization and CORS support",
                "Implemented monitoring using AWS CloudWatch for production reliability"
            ],
            technologies: ["Python", "Stripe API", "AWS Lambda", "DynamoDB", "Step Functions", "CloudWatch"]
        }
    ],

    projects: [
        {
            name: "Shopprop",
            description: "End-to-end cloud-native, serverless architecture for multi-tenant real estate operations",
            achievements: [
                "75% reduction in data retrieval time",
                "50% decrease in API latency",
                "30% reduction in API call volume",
                "Automated ticket creation and classification with Azure AI"
            ],
            technologies: ["AWS Lambda", "PostgreSQL", "Azure AI", "DynamoDB Streams", "S3", "API Gateway"]
        },
        {
            name: "Stripe Payment Service",
            description: "Serverless payment processing and order management system for SaaS platform",
            achievements: [
                "Automated payment processing and invoice email delivery",
                "Event-driven workflows with AWS Step Functions",
                "Infrastructure as Code with Terraform",
                "PCI-compliant payment processing"
            ],
            technologies: ["Python", "Stripe API", "AWS Lambda", "DynamoDB", "Terraform", "API Gateway"]
        }
    ],

    skills: {
        languages: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
        cloud: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "RDS", "IAM", "Step Functions", "CloudWatch", "VPC"],
        devops: ["Terraform", "Docker", "Azure DevOps", "Git"],
        frameworks: ["NodeJS", "ExpressJS", "ReactJS", "FastAPI"],
        ai: ["Azure AI", "Ollama", "Gemini"],
        technical: ["RESTful APIs", "Microservices", "Test Driven Development (TDD)", "Web Services"],
        soft: ["Leadership", "Event Management", "Writing", "Public Speaking", "Emotional Intelligence", "Innovation"],
        tools: ["Visual Studio Code", "Postman", "Git"],
        os: ["Windows", "Linux"],
        data: ["JSON", "YAML", "XML"]
    },

    education: {
        degree: "B.Tech in Electronics and Communication Engineering",
        university: "Rajiv Gandhi University of Knowledge and Technologies",
        duration: "Aug 2018 - May 2022",
        gpa: "8.5/10.0",
        coursework: ["Operating Systems", "Data Structures", "Analysis of Algorithms", "Databases"]
    },

    awards: [
        {
            title: "Top Ulearn of the Year",
            date: "September 2022",
            organization: "Argano"
        },
        {
            title: "Best Team of Argano",
            category: "Client Experience",
            organization: "Argano"
        }
    ],

    leadership: [
        {
            role: "Event Organizer",
            organization: "Argano",
            achievement: "Organized events reaching over 7,000 developers"
        }
    ]
};

// AI Response Generator
class ResumeAI {
    constructor(knowledgeBase) {
        this.kb = knowledgeBase;
    }

    isResumeRelated(question) {
        const resumeKeywords = [
            'ramesh', 'experience', 'skill', 'project', 'education', 'work', 'job',
            'aws', 'python', 'javascript', 'cloud', 'developer', 'engineer',
            'metricdust', 'argano', 'shopprop', 'stripe', 'terraform', 'azure',
            'qualification', 'degree', 'university', 'award', 'achievement',
            'contact', 'email', 'phone', 'linkedin', 'github', 'portfolio',
            'backend', 'frontend', 'database', 'api', 'serverless', 'lambda'
        ];

        const lowerQuestion = question.toLowerCase();
        return resumeKeywords.some(keyword => lowerQuestion.includes(keyword));
    }

    generateResponse(question) {
        const lowerQuestion = question.toLowerCase();

        // Check if question is resume-related
        if (!this.isResumeRelated(question)) {
            return "🤔 Hmm, that question doesn't seem to be related to Ramesh's professional profile. I'm here to answer questions about his experience, skills, projects, and education. Feel free to ask me anything about his work!";
        }

        // Skills-related questions
        if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech stack')) {
            return this.getSkillsResponse();
        }

        // Experience-related questions
        if (lowerQuestion.includes('experience') || lowerQuestion.includes('work') || lowerQuestion.includes('job')) {
            return this.getExperienceResponse();
        }

        // Project-related questions
        if (lowerQuestion.includes('project')) {
            return this.getProjectsResponse();
        }

        // Education-related questions
        if (lowerQuestion.includes('education') || lowerQuestion.includes('degree') || lowerQuestion.includes('university')) {
            return this.getEducationResponse();
        }

        // Contact-related questions
        if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('phone') || lowerQuestion.includes('reach')) {
            return this.getContactResponse();
        }

        // AWS-specific questions
        if (lowerQuestion.includes('aws') || lowerQuestion.includes('amazon')) {
            return this.getAWSResponse();
        }

        // Achievement-related questions
        if (lowerQuestion.includes('achievement') || lowerQuestion.includes('award') || lowerQuestion.includes('recognition')) {
            return this.getAwardsResponse();
        }

        // Current role questions
        if (lowerQuestion.includes('current') || lowerQuestion.includes('now') || lowerQuestion.includes('metricdust')) {
            return this.getCurrentRoleResponse();
        }

        // Default response with general info
        return this.getGeneralResponse();
    }

    getSkillsResponse() {
        const skills = this.kb.skills;
        return `💻 **Ramesh's Technical Skills:**\n\n**Languages:** ${skills.languages.join(', ')}\n\n**Cloud & DevOps:** AWS Lambda, API Gateway, DynamoDB, S3, RDS, Terraform, Docker, Azure DevOps\n\n**Frameworks:** ${skills.frameworks.join(', ')}\n\n**AI Technologies:** ${skills.ai.join(', ')}\n\n**Core Competencies:** RESTful APIs, Microservices, TDD, Serverless Architecture\n\nHe specializes in cloud-native serverless architectures and full-stack development!`;
    }

    getExperienceResponse() {
        const exp = this.kb.experience;
        return `💼 **Professional Experience:**\n\n**${exp[0].company}** (${exp[0].duration})\n${exp[0].role}\n• 75% reduction in data retrieval latency\n• 50% reduction in API latency\n• Integrated Azure AI for automation\n\n**${exp[1].company}** (${exp[1].duration})\n${exp[1].role}\n• Built serverless Stripe payment system\n• Developed Python Lambda functions\n• Implemented AWS Step Functions workflows\n\nRamesh has strong expertise in cloud-native architecture and serverless solutions!`;
    }

    getProjectsResponse() {
        const projects = this.kb.projects;
        return `🚀 **Featured Projects:**\n\n**${projects[0].name}**\n${projects[0].description}\n✓ 75% faster data retrieval\n✓ 50% lower API latency\n✓ Azure AI automation\n\n**${projects[1].name}**\n${projects[1].description}\n✓ Automated payment processing\n✓ Event-driven workflows\n✓ Infrastructure as Code\n\nBoth projects showcase his expertise in serverless architecture and cloud technologies!`;
    }

    getEducationResponse() {
        const edu = this.kb.education;
        return `🎓 **Education:**\n\n${edu.degree}\n${edu.university}\n${edu.duration}\n\n**GPA:** ${edu.gpa}\n\n**Relevant Coursework:** ${edu.coursework.join(', ')}\n\nStrong foundation in computer science fundamentals!`;
    }

    getContactResponse() {
        const contact = this.kb.personal;
        return `📧 **Contact Ramesh:**\n\n**Email:** ${contact.email}\n**Phone:** ${contact.phone}\n**LinkedIn:** [Connect with Ramesh](${contact.linkedin})\n**GitHub:** [View Projects](${contact.github})\n**Portfolio:** [Visit Portfolio](${contact.portfolio})\n\nFeel free to reach out for opportunities or collaborations!`;
    }

    getAWSResponse() {
        return `☁️ **AWS Expertise:**\n\nRamesh has extensive experience with AWS services:\n\n• **Compute:** Lambda (serverless functions)\n• **API:** API Gateway (RESTful APIs)\n• **Database:** DynamoDB, RDS (PostgreSQL)\n• **Storage:** S3\n• **Orchestration:** Step Functions\n• **Monitoring:** CloudWatch\n• **Security:** IAM, VPC\n\nHe's built production-grade serverless architectures handling real-world traffic and has provisioned infrastructure as code using Terraform!`;
    }

    getAwardsResponse() {
        const awards = this.kb.awards;
        return `🏆 **Awards & Recognition:**\n\n• **${awards[0].title}** - ${awards[0].date}\n• **${awards[1].title}** - ${awards[1].category}\n• **Event Organizer** - Reached 7,000+ developers\n\nRamesh has been recognized for both technical excellence and leadership!`;
    }

    getCurrentRoleResponse() {
        const current = this.kb.experience[0];
        return `💼 **Current Role:**\n\n**${current.role}** at **${current.company}**\n${current.duration}\n\n**Key Achievements:**\n• Designed serverless multi-tenant architecture\n• 75% reduction in data retrieval latency\n• 50% reduction in API latency\n• Integrated Azure AI Agents\n• Infrastructure as Code with Terraform\n\n**Tech Stack:** ${current.technologies.slice(0, 6).join(', ')}\n\nHe's currently building scalable cloud solutions for real estate enterprise!`;
    }

    getGeneralResponse() {
        return `👋 **About Ramesh Nethi:**\n\nRamesh is a Software Development Engineer specializing in cloud-native serverless architectures. He has:\n\n• 2+ years of professional experience\n• Expertise in AWS, Python, JavaScript\n• Track record of 50-75% performance improvements\n• Experience with Azure AI integration\n• Strong background in serverless architecture\n\nWhat would you like to know more about? His skills, experience, projects, or education?`;
    }
}

// Initialize AI
const resumeAI = new ResumeAI(resumeKnowledgeBase);

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { resumeAI, resumeKnowledgeBase };
}
