import { AdminJSProviderConfig } from '@adminjs/adonis'

import componentLoader from '../app/admin/component_loader.js'
import authProvider from '../app/admin/auth.js'
import { LucidResource } from '@adminjs/adonis'

import User from '../app/models/user.js'
import Post from '#models/post'
import Project from '#models/project'
import Education from '#models/education'
import Experience from '#models/experience'
import Skill from '#models/skill'
import Hashtag from '#models/hashtag'
import Job from '#models/job'
import Notification from '#models/notification'
import Company from '#models/company'
import University from '#models/university'
import Group from '#models/group'
import Invitation from '#models/invitation'
// import Profile from '../app/models/profile.js'

const adminjsConfig: AdminJSProviderConfig = {
  adapter: {
    enabled: true,
  },
  adminjs: {
    rootPath: '/admin',
    loginPath: '/admin/login',
    logoutPath: '/admin/logout',
    componentLoader,
    resources: [
      {
        resource: new LucidResource(User, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Post, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            userId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            description: { isVisible: { list: true, filter: true, show: true, edit: true } },
            image: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Project, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            userId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
            description: { isVisible: { list: true, filter: true, show: true, edit: true } },
            image: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Education, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            userId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            universityName: { isVisible: { list: true, filter: true, show: true, edit: true } },
            qualification: { isVisible: { list: true, filter: true, show: true, edit: true } },
            startDate: { isVisible: { list: true, filter: true, show: true, edit: true } },
            endDate: { isVisible: { list: true, filter: true, show: true, edit: true } },
            description: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Experience, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            userId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            title: { isVisible: { list: true, filter: true, show: true, edit: true } },
            companyName: { isVisible: { list: true, filter: true, show: true, edit: true } },
            type: { isVisible: { list: true, filter: true, show: true, edit: true } },
            startDate: { isVisible: { list: true, filter: true, show: true, edit: true } },
            endDate: { isVisible: { list: true, filter: true, show: true, edit: true } },
            description: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Skill, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            userId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Hashtag, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            userId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Job, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            userId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            title: { isVisible: { list: true, filter: true, show: true, edit: true } },
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
            type: { isVisible: { list: true, filter: true, show: true, edit: true } },
            description: { isVisible: { list: true, filter: true, show: true, edit: true } },
            image: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Notification, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            userId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            title: { isVisible: { list: true, filter: true, show: true, edit: true } },
            description: { isVisible: { list: true, filter: true, show: true, edit: true } },
            image: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Company, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(University, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
            image: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Group, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            userId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            name: { isVisible: { list: true, filter: true, show: true, edit: true } },
            batch: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },
      {
        resource: new LucidResource(Invitation, 'mysql'),
        options: {
          properties: {
            id: { isVisible: { list: true, filter: true, show: true, edit: false } },
            senderId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            receiverId: { isVisible: { list: true, filter: true, show: true, edit: true } },
            status: { isVisible: { list: true, filter: true, show: true, edit: true } },
            createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
            updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
          },
        },
      },

      // {
      //   resource: new LucidResource(Profile, 'mysql'),
      //   options: {},
      // }
    ],
    pages: {},
    locale: {
      availableLanguages: ['en'],
      language: 'en',
      translations: {
        en: {
          actions: {},
          messages: {},
          labels: {},
          buttons: {},
          properties: {},
          components: {},
          pages: {},
          ExampleResource: {
            actions: {},
            messages: {},
            labels: {},
            buttons: {},
            properties: {},
          },
        },
      },
    },
    branding: {
      companyName: 'AdminJS',
      theme: {},
    },
    settings: {
      defaultPerPage: 10,
    },
  },
  auth: {
    enabled: true,
    provider: authProvider,
    middlewares: [],
  },
  middlewares: [],
}

export default adminjsConfig
