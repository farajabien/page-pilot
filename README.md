# ChatPilot

A multi-tenant platform for creating and deploying custom AI chatbots with dedicated domains. Built on the Vercel AI Chatbot starter, extended with multi-tenant capabilities.

## Core Concept

- Users create workspaces
- Each workspace can have multiple chatbots
- Each chatbot gets its own custom domain
- Chatbots are trained on user-provided knowledge bases
- Deploy and manage multiple chatbots from one dashboard

## Technical Foundation

```
Base: Vercel AI Chatbot Starter
+ Multi-tenant architecture
+ Custom domain handling
+ Knowledge base management
```

## Key Components (Already Available)

- ✅ Next.js App Router
- ✅ OpenAI/Anthropic integration
- ✅ Authentication (NextAuth.js)
- ✅ Database (Vercel Postgres)
- ✅ File storage (Vercel Blob)
- ✅ UI components (shadcn/ui)

## Need to Build

1. **Multi-tenant System**

   - Workspace management
   - User-workspace relationships
   - Resource isolation

2. **Chatbot Management**

   - Creation interface
   - Settings/customization
   - Deployment controls

3. **Knowledge Base**

   - Document upload
   - Text extraction
   - Vector storage

4. **Custom Domains**
   - Domain verification
   - SSL certification
   - DNS management

## MVP Features

- Single workspace per user
- One chatbot per workspace
- Basic customization
- File upload for training
- Custom domain support
- Simple analytics
- Usage limits

## Initial Architecture

```
├── app/
│   ├── api/
│   │   ├── chat/
│   │   ├── domains/
│   │   └── workspaces/
│   ├── app/
│   │   ├── workspace/
│   │   └── settings/
├── components/
│   ├── dashboard/
│   ├── chatbot/
│   └── knowledge-base/
└── lib/
    ├── auth/
    ├── db/
    └── ai/
```

## Development Phases

### Phase 1 (MVP)

1. Set up multi-tenant DB schema
2. Build workspace management
3. Create chatbot CRUD
4. Implement basic knowledge base
5. Add custom domain support

### Phase 2

1. Team collaboration
2. Advanced customization
3. Template marketplace
4. API access

## Tech Stack

- Next.js 14
- Vercel AI SDK
- Vercel Postgres
- Vercel Blob
- NextAuth.js
- shadcn/ui
- Tailwind CSS
- OpenAI/Anthropic

## Immediate TODO

1. [ ] Modify DB schema for multi-tenancy
2. [ ] Create workspace management system
3. [ ] Build chatbot creator interface
4. [ ] Implement knowledge base uploader
5. [ ] Set up custom domain handling

## Business Model

```
FREE
- 1 chatbot
- 100 msgs/month
- Basic customization

PRO ($29/mo)
- 3 chatbots
- 1,000 msgs/month
- Custom domain
- Full customization

BUSINESS ($99/mo)
- 10 chatbots
- 10,000 msgs/month
- Priority support
- API access
```
