# UI Components for Teaching - Tailwind CSS Version

This document contains the **UI/JSX code only** for Login, Register, Dashboard, and Home pages using **Tailwind CSS**. 
You can copy-paste these to teach students the UI structure, while you teach the logic separately.

---

## 📄 1. LOGIN PAGE UI (Tailwind CSS)

**File:** `src/pages/Login.jsx`

```jsx
const Login = () => {
  return (
    <div className="max-w-md mx-auto my-12 px-5">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="mb-5 text-center text-2xl font-semibold">Login</h2>

        {/* Error Message Display */}
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-5">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full py-3 rounded text-white font-medium text-base transition-colors ${
              status === 'loading' 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
            }`}
          >
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Link to Register */}
        <p className="mt-5 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}
```

**Key Tailwind Classes Used:**
- `max-w-md` - Maximum width (28rem/448px)
- `mx-auto` - Center horizontally
- `bg-white` - White background
- `p-8` - Padding (2rem)
- `rounded-lg` - Rounded corners
- `shadow-md` - Medium shadow
- `mb-4`, `mb-5` - Margin bottom
- `w-full` - Full width
- `border border-gray-300` - Gray border
- `focus:ring-2 focus:ring-blue-500` - Focus ring effect
- `bg-blue-600 hover:bg-blue-700` - Button colors with hover

---

## 📄 2. REGISTER PAGE UI (Tailwind CSS)

**File:** `src/pages/Register.jsx`

```jsx
const Register = () => {
  return (
    <div className="max-w-md mx-auto my-12 px-5">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="mb-5 text-center text-2xl font-semibold">Register</h2>

        {/* Error Message Display */}
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-5">
            {error}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Selected Role Display (Read-only) */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">Selected Role:</label>
            <p className="p-2.5 border border-gray-300 rounded bg-gray-50">
              <strong>{formData.role === 'jobseeker' ? 'Job Seeker' : 'Job Provider'}</strong>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              You selected this role on the home page.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full py-3 rounded text-white font-medium text-base transition-colors ${
              status === 'loading' 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
            }`}
          >
            {status === 'loading' ? 'Registering...' : 'Register'}
          </button>
        </form>

        {/* Link to Login */}
        <p className="mt-5 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}
```

**Key Tailwind Classes Used:**
- Same as Login page
- `bg-gray-50` - Light gray background for role display
- `text-xs` - Extra small text
- `mt-1` - Small margin top

---

## 📄 3. DASHBOARD PAGE UI (Tailwind CSS)

**File:** `src/pages/Dashboard.jsx`

```jsx
const Dashboard = () => {
  return (
    <div className="max-w-3xl mx-auto my-12 px-5">
      <div className="bg-white p-8 rounded-lg shadow-md">
        {/* Page Title */}
        <h1 className="mb-5 text-3xl font-bold">Dashboard</h1>

        {/* User Information Card */}
        <div className="mb-8 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Welcome, {user?.name}!</h2>
          <p className="mb-2"><strong>Email:</strong> {user?.email}</p>
          <p><strong>Role:</strong> {user?.role === 'jobseeker' ? 'Job Seeker' : 'Job Provider'}</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-5 py-2.5 bg-red-600 text-white border-none rounded cursor-pointer text-base hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
```

**Key Tailwind Classes Used:**
- `max-w-3xl` - Maximum width (48rem/768px) - wider than login/register
- `text-3xl` - Large heading
- `font-bold` - Bold text
- `bg-gray-50` - Light gray background for info card
- `bg-red-600 hover:bg-red-700` - Red button with hover effect
- `mb-8` - Large margin bottom

---

## 📄 4. HOME PAGE UI (Tailwind CSS)

**File:** `src/pages/Home.jsx`

### Part A: When User is Logged In

```jsx
// If user is already logged in
if (isAuthenticated) {
  return (
    <div className="text-center py-12 px-5">
      <h1 className="text-5xl mb-5">Welcome to Job Portal</h1>
      <p className="text-xl mb-10">
        Hello, <strong>{user?.name}</strong>! You are logged in as <strong>{user?.role}</strong>.
      </p>
      <button
        onClick={() => navigate('/dashboard')}
        className="px-6 py-3 bg-blue-600 text-white border-none rounded cursor-pointer text-base hover:bg-blue-700 transition-colors"
      >
        Go to Dashboard
      </button>
    </div>
  )
}
```

### Part B: Role Selection Cards (Initial State)

```jsx
{!selectedRole ? (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
    {/* Job Seeker Card */}
    <div
      onClick={() => handleRoleSelect('jobseeker')}
      className="bg-white p-10 rounded-xl shadow-md cursor-pointer transition-all duration-200 border-2 border-transparent hover:-translate-y-1 hover:shadow-lg hover:border-green-500"
    >
      <div className="text-5xl mb-5">👤</div>
      <h2 className="text-3xl mb-4 text-gray-800">Job Seeker</h2>
      <p className="text-gray-600 leading-relaxed mb-5">
        Looking for job opportunities? Browse and apply for jobs that match your skills.
      </p>
      <div className="mt-5 text-green-600 font-bold">
        Click to continue →
      </div>
    </div>

    {/* Job Provider Card */}
    <div
      onClick={() => handleRoleSelect('recruiter')}
      className="bg-white p-10 rounded-xl shadow-md cursor-pointer transition-all duration-200 border-2 border-transparent hover:-translate-y-1 hover:shadow-lg hover:border-blue-500"
    >
      <div className="text-5xl mb-5">🏢</div>
      <h2 className="text-3xl mb-4 text-gray-800">Job Provider</h2>
      <p className="text-gray-600 leading-relaxed mb-5">
        Hiring? Post job openings and find the perfect candidates for your company.
      </p>
      <div className="mt-5 text-blue-600 font-bold">
        Click to continue →
      </div>
    </div>
  </div>
) : (
  // Part C: Register/Login Options (after role selection)
  <div className="bg-white p-10 rounded-xl shadow-md">
    <div className="text-center mb-8">
      <button
        onClick={() => setSelectedRole(null)}
        className="bg-transparent border border-gray-300 px-4 py-2 rounded cursor-pointer mb-5 hover:bg-gray-50 transition-colors"
      >
        ← Back to Role Selection
      </button>
      <h2 className="text-4xl mb-3 text-gray-800">
        You selected:{' '}
        <span className={selectedRole === 'jobseeker' ? 'text-green-600' : 'text-blue-600'}>
          {selectedRole === 'jobseeker' ? 'Job Seeker' : 'Job Provider'}
        </span>
      </h2>
      <p className="text-gray-600">Choose an option to continue</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Register Button */}
      <button
        onClick={() => handleNavigate('register')}
        className="p-5 bg-green-600 text-white border-none rounded-lg cursor-pointer text-lg font-bold transition-colors hover:bg-green-700"
      >
        <div className="text-4xl mb-2">📝</div>
        <div>Register</div>
        <div className="text-sm mt-1 opacity-90">Create new account</div>
      </button>

      {/* Login Button */}
      <button
        onClick={() => handleNavigate('login')}
        className="p-5 bg-blue-600 text-white border-none rounded-lg cursor-pointer text-lg font-bold transition-colors hover:bg-blue-700"
      >
        <div className="text-4xl mb-2">🔐</div>
        <div>Login</div>
        <div className="text-sm mt-1 opacity-90">Sign in to account</div>
      </button>
    </div>
  </div>
)}
```

**Key Tailwind Classes Used:**
- `grid grid-cols-1 md:grid-cols-2` - Responsive grid (1 column on mobile, 2 on medium+)
- `gap-8` - Gap between grid items
- `rounded-xl` - Extra large rounded corners
- `hover:-translate-y-1` - Lift effect on hover
- `hover:shadow-lg` - Larger shadow on hover
- `transition-all duration-200` - Smooth transitions
- `text-5xl`, `text-4xl`, `text-3xl` - Large text sizes
- `leading-relaxed` - Relaxed line height
- `opacity-90` - Slight transparency

---

## 🎨 Common Tailwind CSS Patterns Used

### 1. **Centered Card Container**
```jsx
<div className="max-w-md mx-auto my-12 px-5">
  <div className="bg-white p-8 rounded-lg shadow-md">
    {/* Content */}
  </div>
</div>
```

### 2. **Form Input Styling**
```jsx
<div className="mb-4">
  <label className="block mb-2 font-medium">Label</label>
  <input
    type="text"
    className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
```

### 3. **Primary Button**
```jsx
<button className="w-full py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-colors">
  Button Text
</button>
```

### 4. **Error Message Display**
```jsx
{error && (
  <div className="bg-red-100 text-red-800 p-3 rounded mb-5">
    {error}
  </div>
)}
```

### 5. **Loading State Button**
```jsx
<button
  disabled={status === 'loading'}
  className={`w-full py-3 rounded text-white font-medium transition-colors ${
    status === 'loading' 
      ? 'bg-gray-400 cursor-not-allowed' 
      : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
  }`}
>
  {status === 'loading' ? 'Loading...' : 'Submit'}
</button>
```

### 6. **Responsive Grid**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {/* Grid items */}
</div>
```

### 7. **Hover Effects**
```jsx
<div className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
  {/* Content */}
</div>
```

---

## 📚 Tailwind CSS Utility Classes Reference

### Spacing
- `p-2`, `p-4`, `p-8` - Padding
- `px-5`, `py-3` - Padding X/Y axis
- `m-5`, `mx-auto`, `my-12` - Margin
- `mb-4`, `mt-5` - Margin bottom/top
- `gap-5`, `gap-8` - Gap (for flex/grid)

### Colors
- `bg-white`, `bg-gray-50`, `bg-gray-100` - Background colors
- `text-gray-600`, `text-gray-800` - Text colors
- `bg-blue-600`, `bg-green-600`, `bg-red-600` - Primary colors
- `hover:bg-blue-700` - Hover states

### Typography
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl` - Font sizes
- `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl` - Large headings
- `font-medium`, `font-semibold`, `font-bold` - Font weights
- `text-center` - Text alignment

### Layout
- `max-w-md`, `max-w-3xl`, `max-w-4xl` - Maximum widths
- `w-full` - Full width
- `mx-auto` - Center horizontally
- `grid`, `grid-cols-1`, `md:grid-cols-2` - Grid layout
- `flex`, `flex-col` - Flexbox

### Borders & Shadows
- `border`, `border-2` - Borders
- `border-gray-300` - Border color
- `rounded`, `rounded-lg`, `rounded-xl` - Border radius
- `shadow-md`, `shadow-lg` - Shadows

### Effects
- `hover:bg-blue-700` - Hover background
- `hover:-translate-y-1` - Hover lift effect
- `transition-colors`, `transition-all` - Transitions
- `duration-200` - Transition duration
- `focus:ring-2 focus:ring-blue-500` - Focus ring
- `cursor-pointer`, `cursor-not-allowed` - Cursor styles

---

## 📝 Notes for Teaching

1. **Utility-First Approach** - Tailwind uses utility classes instead of custom CSS
2. **Responsive Design** - Use `md:`, `lg:` prefixes for breakpoints
3. **Hover States** - Add `hover:` prefix for hover effects
4. **Focus States** - Use `focus:` prefix for form inputs
5. **Conditional Classes** - Use template literals for dynamic classes
6. **No Custom CSS Files** - Everything is done with classes
7. **Color Scheme**:
   - Primary: `blue-600` / `blue-700` (hover)
   - Success: `green-600` / `green-700` (hover)
   - Danger: `red-600` / `red-700` (hover)
   - Error: `red-100` background, `red-800` text

---

## 🚀 Quick Copy-Paste Checklist

- [ ] Login Page UI (Tailwind)
- [ ] Register Page UI (Tailwind)
- [ ] Dashboard Page UI (Tailwind)
- [ ] Home Page UI (all parts - Tailwind)
- [ ] Common Tailwind patterns
- [ ] Tailwind utility classes reference

---

## ⚙️ Setup Instructions

To use Tailwind CSS in your project:

1. **Install dependencies:**
```bash
npm install -D tailwindcss postcss autoprefixer
```

2. **Initialize Tailwind:**
```bash
npx tailwindcss init -p
```

3. **Update `tailwind.config.js`:**
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. **Update `src/index.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. **Start using Tailwind classes in your components!**

---

**Happy Teaching with Tailwind CSS! 🎓✨**
