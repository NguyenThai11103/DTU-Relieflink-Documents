import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Giới thiệu  🚀',
    },
    {
      type: 'doc',
      id: 'GettingStarted',
      label: 'Tổng quan 📝',
    },
    {
      type: 'doc',
      id: 'Architecture',
      label: 'Kiến trúc phần mềm 🏗️',
    },
    {
      type: 'doc',
      id: 'Installation',
      label: 'Hướng dẫn cài đặt 🛠️',
    },
    
    {
      type: 'category',
      label: 'Plugin 🔌',
      items: [
        'Plugins/mapconfig-plugin',
        'Plugins/validation-plugin',
        'Plugins/websocket-plugin',
      ],
    },
    {
      type: 'doc',
      id: 'License',
      label: 'License 📜',
    },
  ],
};

export default sidebars;
