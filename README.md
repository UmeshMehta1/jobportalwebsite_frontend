# UI Components Documentation

This folder contains **Pure UI Components** — presentation-only. Pair these with container/page logic so students can focus on either UI or behavior separately.

## Page UI pattern (for teaching)
- Keep **pages/containers** for data fetching, state, and routing.
- Use these **UI components** for rendering only (props in, callbacks out).
- For a “page UI only” version, create a `SomePageUI` component that:
  - Receives data/flags via props (`loading`, `error`, `items`, etc.).
  - Exposes callbacks (`onSubmit`, `onDelete`, `onApply`, `onSelect`).
  - Contains zero side effects (no API calls, no global state).

Example shell:
```jsx
const SomePageUI = ({ data = [], loading, error, onAction }) => (
  <div>
    {error && <Alert type="error" message={error} />}
    {loading ? <LoadingSpinner /> : data.map(item => (
      <Card key={item.id} onClick={() => onAction(item.id)}>
        {item.title}
      </Card>
    ))}
  </div>
)
```


## Component Structure

All components in this folder are:
- **Presentational** - They receive data via props and display it
- **Reusable** - Can be used across different pages
- **No Logic** - No API calls, state management, or business logic
- **Props-based** - All data and callbacks come from parent components

## Available Components

### 1. Button
**Purpose**: Reusable button component with different variants and sizes

**Props**:
- `variant`: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "outline"
- `size`: "sm" | "md" | "lg"
- `children`: Button text
- `onClick`: Click handler function
- `disabled`: Boolean
- `type`: "button" | "submit" | "reset"
- `className`: Additional CSS classes

**Example**:
```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

---

### 2. Input
**Purpose**: Text input field with label and error handling

**Props**:
- `label`: Label text
- `type`: Input type (text, email, password, etc.)
- `name`: Input name
- `value`: Input value
- `onChange`: Change handler
- `placeholder`: Placeholder text
- `required`: Boolean
- `error`: Error message string
- `className`: Additional CSS classes

**Example**:
```jsx
<Input
  label="Email"
  type="email"
  name="email"
  value={email}
  onChange={handleChange}
  required
/>
```

---

### 3. Textarea
**Purpose**: Multi-line text input

**Props**:
- `label`: Label text
- `name`: Textarea name
- `value`: Textarea value
- `onChange`: Change handler
- `placeholder`: Placeholder text
- `required`: Boolean
- `error`: Error message
- `rows`: Number of rows
- `className`: Additional CSS classes

**Example**:
```jsx
<Textarea
  label="Description"
  name="description"
  value={description}
  onChange={handleChange}
  rows={5}
/>
```

---

### 4. Alert
**Purpose**: Display success, error, warning, or info messages

**Props**:
- `type`: "success" | "error" | "warning" | "info"
- `message`: Message text
- `onClose`: Optional close handler
- `className`: Additional CSS classes

**Example**:
```jsx
<Alert type="success" message="Operation successful!" />
<Alert type="error" message="Something went wrong" onClose={handleClose} />
```

---

### 5. Card
**Purpose**: Container component with shadow and padding

**Props**:
- `children`: Card content
- `title`: Optional card title
- `className`: Additional CSS classes
- `onClick`: Optional click handler
- `hover`: Boolean for hover effect

**Example**:
```jsx
<Card title="User Info" hover onClick={handleClick}>
  <p>Card content here</p>
</Card>
```

---

### 6. JobCard
**Purpose**: Display job information in a card format

**Props**:
- `job`: Job object with title, company, location, salary, description, createdAt
- `onClick`: Click handler for the card
- `onViewDetails`: Click handler for view details button

**Example**:
```jsx
<JobCard 
  job={jobData} 
  onClick={() => navigate(`/job/${jobData._id}`)}
  onViewDetails={() => navigate(`/job/${jobData._id}`)}
/>
```

---

### 7. FileUpload
**Purpose**: File upload input with preview

**Props**:
- `label`: Label text
- `accept`: Accepted file types (e.g., ".pdf,.jpg,.png")
- `onChange`: File change handler
- `fileName`: Current file name to display
- `onRemove`: Remove file handler
- `disabled`: Boolean
- `helperText`: Helper text below label
- `className`: Additional CSS classes

**Example**:
```jsx
<FileUpload
  label="Upload CV"
  accept=".pdf,.jpg,.png"
  onChange={handleFileChange}
  fileName={selectedFile?.name}
  onRemove={handleRemoveFile}
  helperText="Max 5MB"
/>
```

---

### 8. StatCard
**Purpose**: Display statistics with gradient background

**Props**:
- `title`: Stat title
- `value`: Stat value
- `icon`: Emoji or icon
- `gradient`: Tailwind gradient classes (e.g., "from-blue-500 to-blue-600")
- `className`: Additional CSS classes

**Example**:
```jsx
<StatCard
  title="Total Jobs"
  value={100}
  icon="💼"
  gradient="from-blue-500 to-blue-600"
/>
```

---

### 9. StatusBadge
**Purpose**: Display status with color coding

**Props**:
- `status`: "applied" | "in_review" | "accepted" | "rejected"
- `className`: Additional CSS classes

**Example**:
```jsx
<StatusBadge status="accepted" />
<StatusBadge status="in_review" />
```

---

### 10. LoadingSpinner
**Purpose**: Loading indicator

**Props**:
- `size`: "sm" | "md" | "lg"
- `message`: Loading message
- `className`: Additional CSS classes

**Example**:
```jsx
<LoadingSpinner size="md" message="Loading jobs..." />
```

---

### 11. EmptyState
**Purpose**: Display when there's no data

**Props**:
- `message`: Message to display
- `actionLabel`: Button label (optional)
- `onAction`: Action button handler (optional)
- `icon`: Emoji icon
- `className`: Additional CSS classes

**Example**:
```jsx
<EmptyState
  message="No jobs available"
  actionLabel="Create Job"
  onAction={() => navigate("/job/create")}
  icon="📭"
/>
```

---

### 12. JobForm
**Purpose**: Complete job creation/editing form

**Props**:
- `formData`: Object with title, company, location, salary, description
- `onChange`: Change handler for all inputs
- `onSubmit`: Form submit handler
- `loading`: Boolean for loading state
- `error`: Error message
- `success`: Success message
- `onCancel`: Cancel handler (optional)

**Example**:
```jsx
<JobForm
  formData={jobForm}
  onChange={handleChange}
  onSubmit={handleSubmit}
  loading={isLoading}
  error={errorMessage}
  success={successMessage}
  onCancel={() => navigate("/dashboard")}
/>
```

---

## Usage Pattern

### In Pages (Container Components):
```jsx
// Pages contain LOGIC
const JobCreatePage = () => {
  // State management
  const [form, setForm] = useState({...})
  const [loading, setLoading] = useState(false)
  
  // Event handlers (LOGIC)
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // API call logic here
  }
  
  // Render UI components (PRESENTATION)
  return (
    <div>
      <JobForm
        formData={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  )
}
```

---

## Page UI Components

These are complete page-level UI components that can be used to separate presentation from logic. Each component receives all data via props and exposes callbacks for user interactions.

### 13. LandingpageUI
**Purpose**: Display all available jobs in a grid layout

**Props**:
- `jobs`: Array of job objects
- `loading`: Boolean for loading state
- `error`: Error message string
- `onJobClick`: Callback when job card is clicked (receives job object)
- `onViewDetails`: Callback when "View Details" button is clicked (receives job object)

**Example**:
```jsx
<LandingpageUI
  jobs={jobsList}
  loading={isLoading}
  error={errorMessage}
  onJobClick={(job) => navigate(`/job/${job._id}`)}
  onViewDetails={(job) => navigate(`/job/${job._id}`)}
/>
```

---

### 14. JobDetailUI
**Purpose**: Display single job details with application functionality

**Props**:
- `job`: Job object with all details
- `isJobProvider`: Boolean - is user a job provider
- `isJobOwner`: Boolean - does user own this job
- `isJobSeeker`: Boolean - is user a job seeker
- `loading`: Boolean for loading state
- `error`: Error message string
- `success`: Success message string
- `hasApplied`: Boolean - has user applied
- `applicationStatus`: String - application status ("applied", "in_review", etc.)
- `applying`: Boolean - is application in progress
- `cvFileName`: String - name of uploaded CV file
- `onBack`: Callback for back button
- `onApply`: Callback for apply button
- `onFileChange`: Callback for file input change
- `onFileRemove`: Callback for remove file button
- `onViewApplications`: Callback for view applications button (job provider)
- `onViewMyApplications`: Callback for view my applications link

**Example**:
```jsx
<JobDetailUI
  job={jobData}
  isJobProvider={userRole === "jobprovider"}
  isJobOwner={jobData.UserId === currentUserId}
  isJobSeeker={userRole === "jobseeker"}
  hasApplied={hasApplied}
  applicationStatus={status}
  applying={isApplying}
  cvFileName={selectedFile?.name}
  onBack={() => navigate("/")}
  onApply={handleApply}
  onFileChange={handleFileChange}
  onFileRemove={handleRemoveFile}
  onViewApplications={() => navigate(`/job/${jobId}/applications`)}
/>
```

---

### 15. JobCreateUI
**Purpose**: Form for creating a new job

**Props**:
- `formData`: Object with {title, company, location, salary, description}
- `loading`: Boolean for loading state
- `error`: Error message string
- `success`: Success message string
- `onChange`: Change handler for form inputs
- `onSubmit`: Submit handler for form
- `onCancel`: Cancel handler

**Example**:
```jsx
<JobCreateUI
  formData={jobForm}
  loading={isLoading}
  error={errorMessage}
  success={successMessage}
  onChange={handleChange}
  onSubmit={handleSubmit}
  onCancel={() => navigate("/dashboard")}
/>
```

---

### 16. DashboardUI
**Purpose**: Interactive dashboard with sidebar navigation

**Props**:
- `user`: User object with name, email, role
- `isJobProvider`: Boolean - is user a job provider
- `sidebarOpen`: Boolean - is sidebar open
- `activeTab`: String - current active tab ("overview", "profile", "settings")
- `stats`: Object with {totalJobs, myJobs, applications}
- `onToggleSidebar`: Callback to toggle sidebar
- `onNavigate`: Callback for navigation (receives path string)
- `onLogout`: Callback for logout button

**Example**:
```jsx
<DashboardUI
  user={userData}
  isJobProvider={userData?.role === "jobprovider"}
  sidebarOpen={isSidebarOpen}
  activeTab={currentTab}
  stats={{totalJobs: 100, myJobs: 5, applications: 3}}
  onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
  onNavigate={(path) => navigate(path)}
  onLogout={handleLogout}
/>
```

---

### 17. JobApplicationsUI
**Purpose**: Display and manage applications for a job (Job Provider view)

**Props**:
- `job`: Job object
- `applications`: Array of application objects
- `loading`: Boolean for loading state
- `error`: Error message string
- `success`: Success message string
- `onBack`: Callback for back button
- `onAccept`: Callback for accept button (receives applicationId)
- `onReject`: Callback for reject button (receives applicationId)
- `onInReview`: Callback for mark as in review button (receives applicationId)

**Example**:
```jsx
<JobApplicationsUI
  job={jobData}
  applications={applicationsList}
  loading={isLoading}
  error={errorMessage}
  success={successMessage}
  onBack={() => navigate(`/job/${jobId}`)}
  onAccept={(appId) => handleStatusUpdate(appId, "accepted")}
  onReject={(appId) => handleStatusUpdate(appId, "rejected")}
  onInReview={(appId) => handleStatusUpdate(appId, "in_review")}
/>
```

---

### 18. MyApplicationsUI
**Purpose**: Display all applications by a job seeker

**Props**:
- `applications`: Array of application objects with populated JobId
- `loading`: Boolean for loading state
- `error`: Error message string
- `onBrowseJobs`: Callback for browse jobs button
- `onViewJob`: Callback when application card is clicked (receives jobId)

**Example**:
```jsx
<MyApplicationsUI
  applications={myApplications}
  loading={isLoading}
  error={errorMessage}
  onBrowseJobs={() => navigate("/")}
  onViewJob={(jobId) => navigate(`/job/${jobId}`)}
/>
```

---

### 19. MyJobsUI
**Purpose**: Display and manage jobs posted by job provider

**Props**:
- `jobs`: Array of job objects
- `loading`: Boolean for loading state
- `error`: Error message string
- `success`: Success message string
- `editId`: String - ID of job being edited (null if not editing)
- `editForm`: Object with {title, company, location, salary, description}
- `onCreateJob`: Callback for create new job button
- `onStartEdit`: Callback to start editing (receives job object)
- `onEditChange`: Change handler for edit form
- `onSaveEdit`: Callback to save edit
- `onCancelEdit`: Callback to cancel edit
- `onDelete`: Callback for delete button (receives jobId)
- `onViewJob`: Callback to view job details (receives jobId)

**Example**:
```jsx
<MyJobsUI
  jobs={myJobsList}
  loading={isLoading}
  error={errorMessage}
  success={successMessage}
  editId={editingJobId}
  editForm={editFormData}
  onCreateJob={() => navigate("/job/create")}
  onStartEdit={(job) => startEdit(job)}
  onEditChange={handleEditChange}
  onSaveEdit={handleSaveEdit}
  onCancelEdit={handleCancelEdit}
  onDelete={(jobId) => handleDelete(jobId)}
  onViewJob={(jobId) => navigate(`/job/${jobId}`)}
/>
```

---

### 20. LoginUI
**Purpose**: Login form component

**Props**:
- `formData`: Object with {email, password}
- `loading`: Boolean for loading state
- `error`: Error message string
- `onChange`: Change handler for form inputs
- `onSubmit`: Submit handler for form
- `onNavigateToRegister`: Callback for register link

**Example**:
```jsx
<LoginUI
  formData={loginForm}
  loading={isLoading}
  error={errorMessage}
  onChange={handleChange}
  onSubmit={handleSubmit}
  onNavigateToRegister={() => navigate("/register")}
/>
```

---

### 21. RegisterUI
**Purpose**: Registration form component

**Props**:
- `formData`: Object with {name, email, password, role}
- `loading`: Boolean for loading state
- `error`: Error message string
- `onChange`: Change handler for form inputs
- `onSubmit`: Submit handler for form
- `onNavigateToLogin`: Callback for login link

**Example**:
```jsx
<RegisterUI
  formData={registerForm}
  loading={isLoading}
  error={errorMessage}
  onChange={handleChange}
  onSubmit={handleSubmit}
  onNavigateToLogin={() => navigate("/login")}
/>
```

---

## Complete Page UI Components Structure

For teaching purposes, you can create separate UI components for each page:

```
components/
├── ui/                    # Small reusable components
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Alert.jsx
│   └── ...
└── pages/                 # Page-level UI components (NEW)
    ├── LandingpageUI.jsx
    ├── JobDetailUI.jsx
    ├── JobCreateUI.jsx
    ├── DashboardUI.jsx
    ├── JobApplicationsUI.jsx
    ├── MyApplicationsUI.jsx
    ├── MyJobsUI.jsx
    ├── LoginUI.jsx
    └── RegisterUI.jsx
```

## Complete Example: Separating UI from Logic

### Before (Mixed Logic and UI):
```jsx
// pages/JobCreate.jsx - Contains both logic and UI
const JobCreate = () => {
  const [form, setForm] = useState({...})
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = async (e) => {
    // API call logic
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* All UI here */}
    </form>
  )
}
```

### After (Separated):
```jsx
// components/pages/JobCreateUI.jsx - Pure UI
const JobCreateUI = ({ formData, loading, error, onChange, onSubmit, onCancel }) => {
  return (
    <form onSubmit={onSubmit}>
      {/* All UI here - no logic */}
    </form>
  )
}

// pages/JobCreate.jsx - Only Logic
const JobCreate = () => {
  const [form, setForm] = useState({...})
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = async (e) => {
    // API call logic
  }
  
  return (
    <JobCreateUI
      formData={form}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}
```

## Teaching Notes

1. **Separation of Concerns**: UI components handle presentation, pages handle logic
2. **Reusability**: UI components can be used in multiple pages
3. **Props Down**: Data flows from parent (page) to child (UI component)
4. **Events Up**: User interactions flow from child (UI component) to parent (page) via callbacks
5. **No Side Effects**: UI components don't make API calls or manage global state
6. **Easy Testing**: Pure components are easier to test
7. **Teaching Strategy**: Students can learn UI design separately from business logic
8. **Code Organization**: Clear separation makes codebase more maintainable

