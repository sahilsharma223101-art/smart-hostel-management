# Ramkrishna Hostel

Smart Hostel Management System built as a browser-only web application using React, Tailwind CSS, Firebase Authentication, Firestore, Firebase Hosting, and Cloud Functions.

## Highlights

- Responsive web application for desktop and mobile browsers
- Role-based portals for `student`, `admin`, and `superadmin`
- Empty database startup with no dummy users, rooms, notices, or seeded records
- Empty-state UX for every major module
- Firebase Authentication with protected routes and session persistence
- Firestore CRUD for rooms, complaints, leave, fees, notices, visitors, attendance, notifications, and system logs
- Cloud Functions for bootstrap setup, role verification, room allocation, fee validation, notification triggers, and audit logging
- Firebase Hosting ready
- Dark mode support
- College logo integrated for Ramkrishna Hostel branding

## Project Structure

```text
src/
  components/
  context/
  hooks/
  pages/
  services/
  utils/
functions/
  src/
docs/
```

## Core Modules

### Student Panel

- Self registration
- Login and protected dashboard
- Room details
- Complaint submission and tracking
- Leave application and status tracking
- Fee ledger
- Notice board
- Visitor history with active QR pass
- Profile management

### Admin Panel

- Dashboard analytics
- Student account creation
- Room creation and allocation
- Complaint resolution
- Leave approval and rejection
- Daily attendance tracking
- Fee management
- Notice posting
- Visitor register and exit management

### Super Admin Panel

- Bootstrap first super admin on empty database
- Create users across roles
- Assign roles
- System monitoring and audit log review

## Setup

### 1. Install dependencies

```bash
npm install
cd functions
npm install
cd ..
```

### 2. Configure Firebase front-end environment

Create `.env` in the project root using `.env.example`.

### 3. Configure optional email delivery for Cloud Functions

Create `functions/.env` using `functions/.env.example` if you want SMTP email notifications.

### 4. Login to Firebase

```bash
firebase login
firebase use <your-project-id>
```

### 5. Run the web app

```bash
npm run dev
```

### 6. Run Firebase emulators if needed

```bash
firebase emulators:start
```

## First-Time Live Initialization

1. Deploy or run the web app with an empty Firestore database.
2. Open `/register?mode=bootstrap` or use the “Initialize Super Admin” CTA on the login page.
3. Create the first account.
4. The bootstrap Cloud Function creates the first `superadmin` user dynamically.
5. After that, admins and students can be created from the system itself.

## Firestore Collections

Required collections are documented in [docs/firestore-schema.md](./docs/firestore-schema.md).

## Security

- Firestore security rules live in `firestore.rules`
- Students can only access their own records
- Admins manage operational collections
- Super Admins get full control, including system logs and role assignment

## Deployment

Detailed deployment steps are documented in [docs/deployment-guide.md](./docs/deployment-guide.md).

## Important Notes

- The project intentionally starts with zero pre-filled data
- UI handles empty states throughout the application
- Email notifications are optional and activate when SMTP values are configured
- Cloud Functions region defaults to `asia-south1`
