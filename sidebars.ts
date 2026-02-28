import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  learnSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      collapsible: false,
      className: 'sidebar-section-header',
      items: [
        {
          type: 'doc',
          id: 'welcome',
          label: 'Welcome',
        },
        {
          type: 'category',
          label: 'Setup',
          link: { type: 'doc', id: 'setup/setup' },
          items: [
            {
              type: 'category',
              label: 'Chatbots',
              link: { type: 'doc', id: 'setup/chatbots/chatbots' },
              items: [],
            },
            {
              type: 'category',
              label: 'Agentic AI',
              link: { type: 'doc', id: 'setup/agentic-ai/agentic-ai' },
              items: [
                'setup/agentic-ai/vscode',
                'setup/agentic-ai/antigravity',
              ],
            },
            {
              type: 'category',
              label: 'RAG',
              link: { type: 'doc', id: 'setup/rag/rag' },
              items: [],
            },
            {
              type: 'category',
              label: 'RPA',
              link: { type: 'doc', id: 'setup/rpa/rpa' },
              items: [
                'setup/rpa/uipath',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Learn',
      collapsible: false,
      className: 'sidebar-section-header',
      items: [
        {
          type: 'category',
          label: 'Chatbots',
          link: { type: 'doc', id: 'chatbots/chatbots' },
          items: [
            // Section owner adds items here freely
            // Example: 'chatbots/prompt-engineering',
            // Example: 'chatbots/use-cases',
          ],
        },
        {
          type: 'category',
          label: 'Agentic AI',
          link: { type: 'doc', id: 'agentic-ai/agentic-ai' },
          items: [
            // Section owner adds items here freely
          ],
        },
        {
          type: 'category',
          label: 'RAG',
          link: { type: 'doc', id: 'rag/rag' },
          items: [
            // Section owner adds items here freely
          ],
        },
        {
          type: 'category',
          label: 'RPA',
          link: { type: 'doc', id: 'rpa/rpa' },
          items: [
            // Section owner adds items here freely
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsible: false,
      className: 'sidebar-section-header',
      items: [
        'quick-links/problem-sets',
        'quick-links/videos',
        'quick-links/resources',
      ],
    },
  ],
};

export default sidebars;
