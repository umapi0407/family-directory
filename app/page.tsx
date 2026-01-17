export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Family Directory Website</h1>
        <p style={styles.subtitle}>A MERN Stack Application</p>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>About This Project</h2>
          <p style={styles.text}>
            This is a fully functional Family Directory Website built with the MERN stack (MongoDB, Express.js,
            React.js, Node.js). The project has two separate components:
          </p>
          <ul style={styles.list}>
            <li>Backend API (Node.js + Express) running on port 5000</li>
            <li>Frontend (React + Vite) running on port 3000</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>How to Run Locally</h2>

          <div style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>Prerequisites</h3>
            <ul style={styles.list}>
              <li>Node.js and npm installed</li>
              <li>MongoDB running locally or connection string available</li>
              <li>Cloudinary account (optional, for image uploads)</li>
            </ul>
          </div>

          <div style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>Step 1: Setup Backend</h3>
            <ol style={styles.list}>
              <li>
                Navigate to the server folder: <code>cd server</code>
              </li>
              <li>
                Install dependencies: <code>npm install</code>
              </li>
              <li>
                Create <code>.env</code> file with your MongoDB URI and JWT secret
              </li>
              <li>
                Start the server: <code>npm run dev</code>
              </li>
              <li>Backend will run on http://localhost:5000</li>
            </ol>
          </div>

          <div style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>Step 2: Setup Frontend</h3>
            <ol style={styles.list}>
              <li>
                In a new terminal, navigate to client folder: <code>cd client</code>
              </li>
              <li>
                Install dependencies: <code>npm install</code>
              </li>
              <li>
                Create <code>.env.local</code> file with Cloudinary details (optional)
              </li>
              <li>
                Start the development server: <code>npm run dev</code>
              </li>
              <li>Frontend will run on http://localhost:3000</li>
            </ol>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Features</h2>

          <div style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>Public Website</h3>
            <ul style={styles.list}>
              <li>View all family members in a responsive grid</li>
              <li>Filter members by surname with interactive buttons</li>
              <li>No page reload required for filtering</li>
              <li>View member details (name, surname, DOB, photo)</li>
            </ul>
          </div>

          <div style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>Admin Panel</h3>
            <ul style={styles.list}>
              <li>Secure login with JWT authentication</li>
              <li>Add new family members</li>
              <li>Edit existing member information</li>
              <li>Delete members with confirmation</li>
              <li>Upload photos via Cloudinary or image URLs</li>
            </ul>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Initial Admin Setup</h2>
          <p style={styles.text}>
            Before logging in to the admin panel, you need to register an admin account. You can do this by making a
            POST request to the backend:
          </p>
          <div style={styles.codeBlock}>
            <p>POST /api/auth/register</p>
            <p>{`{"username": "admin", "password": "yourpassword"}`}</p>
          </div>
          <p style={styles.text}>Or use a tool like Postman/Insomnia to register your first admin account.</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Project Structure</h2>
          <div style={styles.codeBlock}>
            <pre>{`family-directory/
├── server/
│   ├── models/          (MongoDB schemas)
│   ├── routes/          (API routes)
│   ├── controllers/      (Business logic)
│   ├── middleware/       (Auth, error handling)
│   ├── config/          (Database config)
│   ├── app.js           (Express app)
│   └── server.js        (Server entry point)
│
├── client/
│   ├── src/
│   │   ├── components/   (React components)
│   │   ├── pages/        (Page components)
│   │   ├── services/     (API client)
│   │   └── App.jsx       (Main component)
│   ├── vite.config.js
│   └── index.html
│
└── README.md            (Full documentation)`}</pre>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Security Features</h2>
          <ul style={styles.list}>
            <li>Passwords hashed with bcryptjs</li>
            <li>JWT-based authentication for admin routes</li>
            <li>Admin-only access to create/update/delete endpoints</li>
            <li>Public GET endpoints for viewing members</li>
            <li>CORS enabled for cross-origin requests</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>API Documentation</h2>

          <div style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>Public Routes</h3>
            <ul style={styles.list}>
              <li>GET /api/members - Get all family members</li>
              <li>GET /api/members/search?surname=XYZ - Filter by surname</li>
            </ul>
          </div>

          <div style={styles.subsection}>
            <h3 style={styles.subsectionTitle}>Admin Routes (JWT Required)</h3>
            <ul style={styles.list}>
              <li>POST /api/auth/register - Register admin account</li>
              <li>POST /api/auth/login - Login and get JWT token</li>
              <li>POST /api/members - Create new member</li>
              <li>PUT /api/members/:id - Update member</li>
              <li>DELETE /api/members/:id - Delete member</li>
            </ul>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Download & Installation</h2>
          <p style={styles.text}>
            Click the download button in the top right to get the complete project. Then follow the setup steps above to
            run it locally.
          </p>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>Built with Node.js, Express, MongoDB, React, and JavaScript</p>
        </div>
      </div>
    </main>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "2rem",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "3rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "0.5rem",
    textAlign: "center" as const,
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#7f8c8d",
    textAlign: "center" as const,
    marginBottom: "2rem",
  },
  section: {
    marginBottom: "2rem",
    paddingBottom: "2rem",
    borderBottom: "1px solid #ecf0f1",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#2c3e50",
    marginBottom: "1rem",
    marginTop: "1.5rem",
  },
  subsectionTitle: {
    fontSize: "1.1rem",
    color: "#34495e",
    marginBottom: "0.75rem",
    marginTop: "1rem",
  },
  subsection: {
    marginBottom: "1.5rem",
    paddingLeft: "1rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "1rem",
  },
  list: {
    fontSize: "1rem",
    lineHeight: "1.8",
    color: "#555",
    marginLeft: "1.5rem",
    marginBottom: "1rem",
  },
  codeBlock: {
    backgroundColor: "#f8f8f8",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "1rem",
    marginBottom: "1rem",
    fontFamily: "monospace",
    fontSize: "0.9rem",
    overflow: "auto",
  },
  footer: {
    textAlign: "center" as const,
    marginTop: "2rem",
    paddingTop: "2rem",
    borderTop: "1px solid #ecf0f1",
  },
  footerText: {
    color: "#7f8c8d",
    fontSize: "0.9rem",
  },
}
