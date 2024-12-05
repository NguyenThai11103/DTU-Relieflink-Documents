import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Giới thiệu 🚀',
    },
    {
      type: 'doc',
      id: 'GettingStarted',
      label: 'Tổng quan 📝',
    },
    {
      type: 'doc',
      id: 'Architecture',
      label: 'Kiến trúc hệ thống 🧱',
    },
    {
      type: 'doc',
      id: 'Installation',
      label: 'Hướng dẫn cài đặt ⚙️',
    },
    {
      type: 'doc',
      id: 'License',
      label: 'License 📒',
    },
    {
      type: 'category',
      label: 'Các plugin của hệ thống 🪛',
      items: [
        'Plugins/mapconfig-plugin',
        'Plugins/validation-plugin',
        'Plugins/websocket-plugin',
      ],
    },
    ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
