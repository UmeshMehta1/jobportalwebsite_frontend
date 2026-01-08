# UI Components Documentation

This folder contains **Pure UI Components** - components that only handle presentation and have no business logic.

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

## Teaching Notes

1. **Separation of Concerns**: UI components handle presentation, pages handle logic
2. **Reusability**: UI components can be used in multiple pages
3. **Props Down**: Data flows from parent (page) to child (UI component)
4. **Events Up**: User interactions flow from child (UI component) to parent (page) via callbacks
5. **No Side Effects**: UI components don't make API calls or manage global state
6. **Easy Testing**: Pure components are easier to test

