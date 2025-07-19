export type Appointment = {
  name: string;
  description: string;
  stake: number;
  startsAt: Date;
  endsAt: Date;
};
export type MonthCalendar = {
  date: Date;
  monthCalendar: (DaySchedule | null)[][];
};
export type MonthlyData = {
  date: Date;
  monthAppointments: DaySchedule[];
};
export type DaySchedule = {
  day: Date;
  appointments: Appointment[];
};

export const mockJuneCalendar = {
  date: new Date(2025, 5, 1), // June 1, 2025
  monthAppointments: [
    { day: new Date(2025, 5, 1), appointments: [] },
    {
      day: new Date(2025, 5, 2),
      appointments: [
        {
          name: "Kickoff Meeting",
          description: "Project kickoff for new feature development",
          stake: 8,
          startsAt: new Date(2025, 5, 2, 10, 0),
          endsAt: new Date(2025, 5, 2, 11, 30),
        },
      ],
    },
    {
      day: new Date(2025, 5, 3),
      appointments: [
        {
          name: "Daily Standup",
          description: "Daily team synchronization meeting",
          stake: 3,
          startsAt: new Date(2025, 5, 3, 9, 15),
          endsAt: new Date(2025, 5, 3, 9, 45),
        },
        {
          name: "Database Design Review",
          description: "Review database schema and performance optimizations",
          stake: 7,
          startsAt: new Date(2025, 5, 3, 14, 30),
          endsAt: new Date(2025, 5, 3, 16, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 4),
      appointments: [
        {
          name: "Security Audit",
          description: "Security review and vulnerability assessment",
          stake: 9,
          startsAt: new Date(2025, 5, 4, 11, 0),
          endsAt: new Date(2025, 5, 4, 13, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 5),
      appointments: [
        {
          name: "UX Workshop",
          description: "User experience design workshop",
          stake: 6,
          startsAt: new Date(2025, 5, 5, 13, 30),
          endsAt: new Date(2025, 5, 5, 15, 30),
        },
      ],
    },
    {
      day: new Date(2025, 5, 6),
      appointments: [
        {
          name: "API Documentation Review",
          description: "Review and update API documentation",
          stake: 4,
          startsAt: new Date(2025, 5, 6, 10, 0),
          endsAt: new Date(2025, 5, 6, 11, 0),
        },
        {
          name: "Performance Testing",
          description: "Load testing and performance optimization",
          stake: 8,
          startsAt: new Date(2025, 5, 6, 15, 0),
          endsAt: new Date(2025, 5, 6, 17, 0),
        },
      ],
    },
    { day: new Date(2025, 5, 7), appointments: [] },
    { day: new Date(2025, 5, 8), appointments: [] },
    {
      day: new Date(2025, 5, 9),
      appointments: [
        {
          name: "Code Pair Programming",
          description: "Collaborative coding session on complex features",
          stake: 6,
          startsAt: new Date(2025, 5, 9, 9, 0),
          endsAt: new Date(2025, 5, 9, 12, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 10),
      appointments: [
        {
          name: "QA Testing Session",
          description: "Quality assurance testing and bug reporting",
          stake: 7,
          startsAt: new Date(2025, 5, 10, 14, 0),
          endsAt: new Date(2025, 5, 10, 16, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 11),
      appointments: [
        {
          name: "Vendor Meeting",
          description: "Discussion with third-party service provider",
          stake: 5,
          startsAt: new Date(2025, 5, 11, 11, 30),
          endsAt: new Date(2025, 5, 11, 12, 30),
        },
      ],
    },
    {
      day: new Date(2025, 5, 12),
      appointments: [
        {
          name: "Release Planning",
          description: "Plan upcoming release timeline and features",
          stake: 9,
          startsAt: new Date(2025, 5, 12, 10, 0),
          endsAt: new Date(2025, 5, 12, 12, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 13),
      appointments: [
        {
          name: "Tech Talk",
          description: "Internal presentation on new technologies",
          stake: 4,
          startsAt: new Date(2025, 5, 13, 16, 0),
          endsAt: new Date(2025, 5, 13, 17, 0),
        },
      ],
    },
    { day: new Date(2025, 5, 14), appointments: [] },
    { day: new Date(2025, 5, 15), appointments: [] },
    {
      day: new Date(2025, 5, 16),
      appointments: [
        {
          name: "Stakeholder Update",
          description: "Progress update to key stakeholders",
          stake: 8,
          startsAt: new Date(2025, 5, 16, 13, 0),
          endsAt: new Date(2025, 5, 16, 14, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 17),
      appointments: [
        {
          name: "DevOps Review",
          description: "Infrastructure and deployment pipeline review",
          stake: 6,
          startsAt: new Date(2025, 5, 17, 9, 30),
          endsAt: new Date(2025, 5, 17, 11, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 18),
      appointments: [
        {
          name: "Accessibility Audit",
          description: "Web accessibility compliance review",
          stake: 5,
          startsAt: new Date(2025, 5, 18, 14, 30),
          endsAt: new Date(2025, 5, 18, 16, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 19),
      appointments: [
        {
          name: "Team Building",
          description: "Team building activities and lunch",
          stake: 3,
          startsAt: new Date(2025, 5, 19, 12, 0),
          endsAt: new Date(2025, 5, 19, 15, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 20),
      appointments: [
        {
          name: "Customer Feedback Review",
          description: "Analyze customer feedback and feature requests",
          stake: 7,
          startsAt: new Date(2025, 5, 20, 10, 30),
          endsAt: new Date(2025, 5, 20, 12, 0),
        },
      ],
    },
    { day: new Date(2025, 5, 21), appointments: [] },
    { day: new Date(2025, 5, 22), appointments: [] },
    {
      day: new Date(2025, 5, 23),
      appointments: [
        {
          name: "Budget Review",
          description: "Review project budget and resource allocation",
          stake: 6,
          startsAt: new Date(2025, 5, 23, 15, 0),
          endsAt: new Date(2025, 5, 23, 16, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 24),
      appointments: [
        {
          name: "Mobile App Testing",
          description: "Mobile application testing and optimization",
          stake: 8,
          startsAt: new Date(2025, 5, 24, 11, 0),
          endsAt: new Date(2025, 5, 24, 13, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 25),
      appointments: [
        {
          name: "Knowledge Sharing",
          description: "Team knowledge sharing session",
          stake: 4,
          startsAt: new Date(2025, 5, 25, 14, 0),
          endsAt: new Date(2025, 5, 25, 15, 0),
        },
      ],
    },
    {
      day: new Date(2025, 5, 26),
      appointments: [
        {
          name: "Integration Testing",
          description: "Test system integrations and data flow",
          stake: 7,
          startsAt: new Date(2025, 5, 26, 9, 0),
          endsAt: new Date(2025, 5, 26, 11, 30),
        },
      ],
    },
    {
      day: new Date(2025, 5, 27),
      appointments: [
        {
          name: "Monthly Review",
          description: "Monthly progress review and planning",
          stake: 8,
          startsAt: new Date(2025, 5, 27, 16, 0),
          endsAt: new Date(2025, 5, 27, 17, 30),
        },
      ],
    },
    { day: new Date(2025, 5, 28), appointments: [] },
    { day: new Date(2025, 5, 29), appointments: [] },
    {
      day: new Date(2025, 5, 30),
      appointments: [
        {
          name: "Quarter End Review",
          description: "Q2 review and Q3 planning session",
          stake: 9,
          startsAt: new Date(2025, 5, 30, 13, 0),
          endsAt: new Date(2025, 5, 30, 15, 0),
        },
      ],
    },
  ],
};

export const mockJulyData: MonthlyData = {
  date: new Date(2025, 6, 1), // July 1, 2025
  monthAppointments: [
    {
      day: new Date(2025, 6, 1),
      appointments: [
        {
          name: "Team Meeting",
          description: "Weekly team sync to discuss progress and blockers",
          stake: 7,
          startsAt: new Date(2025, 6, 1, 9, 0),
          endsAt: new Date(2025, 6, 1, 10, 0),
        },
      ],
    },
    {
      day: new Date(2025, 6, 2),
      appointments: [
        {
          name: "Client Call",
          description: "Important client discussion about project requirements",
          stake: 9,
          startsAt: new Date(2025, 6, 2, 14, 0),
          endsAt: new Date(2025, 6, 2, 15, 30),
        },
      ],
    },
    {
      day: new Date(2025, 6, 3),
      appointments: [
        {
          name: "Code Review",
          description: "Code quality review and feedback session",
          stake: 5,
          startsAt: new Date(2025, 6, 3, 10, 30),
          endsAt: new Date(2025, 6, 3, 11, 30),
        },
        {
          name: "Sprint Planning",
          description: "Plan upcoming sprint tasks and priorities",
          stake: 8,
          startsAt: new Date(2025, 6, 3, 15, 0),
          endsAt: new Date(2025, 6, 3, 17, 0),
        },
      ],
    },
    { day: new Date(2025, 6, 4), appointments: [] },
    { day: new Date(2025, 6, 5), appointments: [] },
    { day: new Date(2025, 6, 6), appointments: [] },
    {
      day: new Date(2025, 6, 7),
      appointments: [
        {
          name: "1:1 with Manager",
          description: "One-on-one discussion with direct manager",
          stake: 6,
          startsAt: new Date(2025, 6, 7, 11, 0),
          endsAt: new Date(2025, 6, 7, 12, 0),
        },
      ],
    },
    {
      day: new Date(2025, 6, 8),
      appointments: [
        {
          name: "Design Review",
          description: "Design system review and updates",
          stake: 4,
          startsAt: new Date(2025, 6, 8, 9, 30),
          endsAt: new Date(2025, 6, 8, 10, 30),
        },
      ],
    },
    {
      day: new Date(2025, 6, 9),
      appointments: [
        {
          name: "Standup",
          description: "Daily standup meeting with the team",
          stake: 3,
          startsAt: new Date(2025, 6, 9, 9, 0),
          endsAt: new Date(2025, 6, 9, 9, 30),
        },
        {
          name: "Product Demo",
          description: "Product demonstration to stakeholders",
          stake: 8,
          startsAt: new Date(2025, 6, 9, 16, 0),
          endsAt: new Date(2025, 6, 9, 17, 0),
        },
      ],
    },
    {
      day: new Date(2025, 6, 10),
      appointments: [
        {
          name: "Training Session",
          description: "Technical training on new tools and processes",
          stake: 5,
          startsAt: new Date(2025, 6, 10, 13, 0),
          endsAt: new Date(2025, 6, 10, 15, 0),
        },
      ],
    },
    { day: new Date(2025, 6, 11), appointments: [] },
    { day: new Date(2025, 6, 12), appointments: [] },
    { day: new Date(2025, 6, 13), appointments: [] },
    {
      day: new Date(2025, 6, 14),
      appointments: [
        {
          name: "Bug Triage",
          description: "Bug review and prioritization session",
          stake: 6,
          startsAt: new Date(2025, 6, 14, 10, 0),
          endsAt: new Date(2025, 6, 14, 11, 30),
        },
      ],
    },
    {
      day: new Date(2025, 6, 15),
      appointments: [
        {
          name: "Architecture Discussion",
          description: "Technical architecture planning meeting",
          stake: 7,
          startsAt: new Date(2025, 6, 15, 14, 0),
          endsAt: new Date(2025, 6, 15, 16, 0),
        },
      ],
    },
    {
      day: new Date(2025, 6, 16),
      appointments: [
        {
          name: "User Interview",
          description: "User research and feedback collection",
          stake: 8,
          startsAt: new Date(2025, 6, 16, 11, 0),
          endsAt: new Date(2025, 6, 16, 12, 0),
        },
        {
          name: "Lunch Meeting",
          description: "Informal lunch meeting with colleagues",
          stake: 2,
          startsAt: new Date(2025, 6, 16, 12, 30),
          endsAt: new Date(2025, 6, 16, 13, 30),
        },
      ],
    },
    {
      day: new Date(2025, 6, 17),
      appointments: [
        {
          name: "Project Review",
          description: "Review current project status and next steps",
          stake: 9,
          startsAt: new Date(2025, 6, 17, 15, 0),
          endsAt: new Date(2025, 6, 17, 16, 30),
        },
      ],
    },
    { day: new Date(2025, 6, 18), appointments: [] },
    { day: new Date(2025, 6, 19), appointments: [] },
    { day: new Date(2025, 6, 20), appointments: [] },
    {
      day: new Date(2025, 6, 21),
      appointments: [
        {
          name: "Team Meeting",
          description: "Weekly team sync to discuss progress and blockers",
          stake: 6,
          startsAt: new Date(2025, 6, 21, 9, 0),
          endsAt: new Date(2025, 6, 21, 10, 0),
        },
      ],
    },
    {
      day: new Date(2025, 6, 22),
      appointments: [
        {
          name: "Retrospective",
          description: "Sprint retrospective and process improvements",
          stake: 5,
          startsAt: new Date(2025, 6, 22, 13, 0),
          endsAt: new Date(2025, 6, 22, 14, 30),
        },
      ],
    },
    { day: new Date(2025, 6, 23), appointments: [] },
    {
      day: new Date(2025, 6, 24),
      appointments: [
        {
          name: "Client Call",
          description: "Important client discussion about project requirements",
          stake: 8,
          startsAt: new Date(2025, 6, 24, 10, 0),
          endsAt: new Date(2025, 6, 24, 11, 0),
        },
      ],
    },
    { day: new Date(2025, 6, 25), appointments: [] },
    { day: new Date(2025, 6, 26), appointments: [] },
    { day: new Date(2025, 6, 27), appointments: [] },
    {
      day: new Date(2025, 6, 28),
      appointments: [
        {
          name: "Code Review",
          description: "Code quality review and feedback session",
          stake: 4,
          startsAt: new Date(2025, 6, 28, 11, 0),
          endsAt: new Date(2025, 6, 28, 12, 0),
        },
      ],
    },
    {
      day: new Date(2025, 6, 29),
      appointments: [
        {
          name: "Training Session",
          description: "Technical training on new tools and processes",
          stake: 6,
          startsAt: new Date(2025, 6, 29, 14, 0),
          endsAt: new Date(2025, 6, 29, 16, 0),
        },
      ],
    },
    {
      day: new Date(2025, 6, 30),
      appointments: [
        {
          name: "1:1 with Manager",
          description: "One-on-one discussion with direct manager",
          stake: 7,
          startsAt: new Date(2025, 6, 30, 15, 30),
          endsAt: new Date(2025, 6, 30, 16, 30),
        },
      ],
    },
    {
      day: new Date(2025, 6, 31),
      appointments: [
        {
          name: "Sprint Planning",
          description: "Plan upcoming sprint tasks and priorities",
          stake: 8,
          startsAt: new Date(2025, 6, 31, 9, 0),
          endsAt: new Date(2025, 6, 31, 11, 0),
        },
      ],
    },
  ],
};

export const mockAugustCalendar = {
  date: new Date(2025, 7, 1), // August 1, 2025
  monthAppointments: [
    {
      day: new Date(2025, 7, 1),
      appointments: [
        {
          name: "Monthly Kickoff",
          description: "August goals and priorities alignment",
          stake: 7,
          startsAt: new Date(2025, 7, 1, 10, 0),
          endsAt: new Date(2025, 7, 1, 11, 0),
        },
      ],
    },
    { day: new Date(2025, 7, 2), appointments: [] },
    { day: new Date(2025, 7, 3), appointments: [] },
    {
      day: new Date(2025, 7, 4),
      appointments: [
        {
          name: "Feature Demo",
          description: "Demonstrate new features to product team",
          stake: 8,
          startsAt: new Date(2025, 7, 4, 14, 30),
          endsAt: new Date(2025, 7, 4, 15, 30),
        },
      ],
    },
    {
      day: new Date(2025, 7, 5),
      appointments: [
        {
          name: "Technical Debt Review",
          description: "Assess and prioritize technical debt items",
          stake: 6,
          startsAt: new Date(2025, 7, 5, 11, 0),
          endsAt: new Date(2025, 7, 5, 13, 0),
        },
      ],
    },
    {
      day: new Date(2025, 7, 6),
      appointments: [
        {
          name: "System Architecture Meeting",
          description: "Discuss system scalability and architecture",
          stake: 9,
          startsAt: new Date(2025, 7, 6, 9, 30),
          endsAt: new Date(2025, 7, 6, 11, 30),
        },
        {
          name: "Mentoring Session",
          description: "Junior developer mentoring and guidance",
          stake: 5,
          startsAt: new Date(2025, 7, 6, 15, 0),
          endsAt: new Date(2025, 7, 6, 16, 0),
        },
      ],
    },
    {
      day: new Date(2025, 7, 7),
      appointments: [
        {
          name: "Cross-team Collaboration",
          description: "Coordination meeting with other development teams",
          stake: 6,
          startsAt: new Date(2025, 7, 7, 13, 30),
          endsAt: new Date(2025, 7, 7, 14, 30),
        },
      ],
    },
    {
      day: new Date(2025, 7, 8),
      appointments: [
        {
          name: "Performance Optimization",
          description: "Application performance analysis and optimization",
          stake: 8,
          startsAt: new Date(2025, 7, 8, 10, 0),
          endsAt: new Date(2025, 7, 8, 12, 0),
        },
      ],
    },
    { day: new Date(2025, 7, 9), appointments: [] },
    { day: new Date(2025, 7, 10), appointments: [] },
    {
      day: new Date(2025, 7, 11),
      appointments: [
        {
          name: "Innovation Workshop",
          description: "Brainstorming session for new features",
          stake: 4,
          startsAt: new Date(2025, 7, 11, 14, 0),
          endsAt: new Date(2025, 7, 11, 16, 30),
        },
      ],
    },
    {
      day: new Date(2025, 7, 12),
      appointments: [
        {
          name: "Code Quality Review",
          description: "Code standards and best practices review",
          stake: 5,
          startsAt: new Date(2025, 7, 12, 9, 0),
          endsAt: new Date(2025, 7, 12, 10, 30),
        },
        {
          name: "Product Roadmap Meeting",
          description: "Review product roadmap and upcoming features",
          stake: 8,
          startsAt: new Date(2025, 7, 12, 16, 0),
          endsAt: new Date(2025, 7, 12, 17, 30),
        },
      ],
    },
    {
      day: new Date(2025, 7, 13),
      appointments: [
        {
          name: "User Testing Session",
          description: "Observe user testing and gather feedback",
          stake: 7,
          startsAt: new Date(2025, 7, 13, 11, 30),
          endsAt: new Date(2025, 7, 13, 13, 0),
        },
      ],
    },
    {
      day: new Date(2025, 7, 14),
      appointments: [
        {
          name: "Deployment Planning",
          description: "Plan production deployment strategy",
          stake: 9,
          startsAt: new Date(2025, 7, 14, 15, 0),
          endsAt: new Date(2025, 7, 14, 16, 30),
        },
      ],
    },
    {
      day: new Date(2025, 7, 15),
      appointments: [
        {
          name: "Tech Conference Call",
          description: "Remote attendance at technology conference",
          stake: 3,
          startsAt: new Date(2025, 7, 15, 13, 0),
          endsAt: new Date(2025, 7, 15, 17, 0),
        },
      ],
    },
    { day: new Date(2025, 7, 16), appointments: [] },
    { day: new Date(2025, 7, 17), appointments: [] },
    {
      day: new Date(2025, 7, 18),
      appointments: [
        {
          name: "Risk Assessment",
          description: "Project risk analysis and mitigation planning",
          stake: 7,
          startsAt: new Date(2025, 7, 18, 10, 30),
          endsAt: new Date(2025, 7, 18, 12, 0),
        },
      ],
    },
    {
      day: new Date(2025, 7, 19),
      appointments: [
        {
          name: "API Design Review",
          description: "Review API design and integration patterns",
          stake: 6,
          startsAt: new Date(2025, 7, 19, 14, 0),
          endsAt: new Date(2025, 7, 19, 15, 30),
        },
      ],
    },
    {
      day: new Date(2025, 7, 20),
      appointments: [
        {
          name: "Incident Response Drill",
          description: "Practice incident response procedures",
          stake: 8,
          startsAt: new Date(2025, 7, 20, 9, 0),
          endsAt: new Date(2025, 7, 20, 11, 0),
        },
      ],
    },
    {
      day: new Date(2025, 7, 21),
      appointments: [
        {
          name: "Documentation Sprint",
          description: "Focused session on updating project documentation",
          stake: 4,
          startsAt: new Date(2025, 7, 21, 13, 30),
          endsAt: new Date(2025, 7, 21, 16, 0),
        },
      ],
    },
    {
      day: new Date(2025, 7, 22),
      appointments: [
        {
          name: "Customer Success Meeting",
          description: "Discuss customer success metrics and improvements",
          stake: 6,
          startsAt: new Date(2025, 7, 22, 11, 0),
          endsAt: new Date(2025, 7, 22, 12, 0),
        },
      ],
    },
    { day: new Date(2025, 7, 23), appointments: [] },
    { day: new Date(2025, 7, 24), appointments: [] },
    {
      day: new Date(2025, 7, 25),
      appointments: [
        {
          name: "Scaling Strategy Workshop",
          description: "Plan application scaling and infrastructure",
          stake: 9,
          startsAt: new Date(2025, 7, 25, 10, 0),
          endsAt: new Date(2025, 7, 25, 13, 0),
        },
      ],
    },
    {
      day: new Date(2025, 7, 26),
      appointments: [
        {
          name: "Team Retrospective",
          description: "Team reflection and process improvement",
          stake: 5,
          startsAt: new Date(2025, 7, 26, 14, 30),
          endsAt: new Date(2025, 7, 26, 16, 0),
        },
      ],
    },
    {
      day: new Date(2025, 7, 27),
      appointments: [
        {
          name: "Beta Testing Kickoff",
          description: "Launch beta testing program",
          stake: 8,
          startsAt: new Date(2025, 7, 27, 12, 0),
          endsAt: new Date(2025, 7, 27, 13, 30),
        },
      ],
    },
    {
      day: new Date(2025, 7, 28),
      appointments: [
        {
          name: "Final Code Review",
          description: "Final review before major release",
          stake: 9,
          startsAt: new Date(2025, 7, 28, 15, 0),
          endsAt: new Date(2025, 7, 28, 17, 0),
        },
      ],
    },
    {
      day: new Date(2025, 7, 29),
      appointments: [
        {
          name: "Release Preparation",
          description: "Final preparations for product release",
          stake: 10,
          startsAt: new Date(2025, 7, 29, 9, 0),
          endsAt: new Date(2025, 7, 29, 12, 0),
        },
      ],
    },
    { day: new Date(2025, 7, 30), appointments: [] },
    { day: new Date(2025, 7, 31), appointments: [] },
  ],
};
