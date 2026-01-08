landing page
```
const LandingpageUI = ({ jobs = [], loading = false, error = "", onJobClick, onViewDetails }) => {
  const formatDate = (dateString) =>
    dateString ? new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : ""

  return (
    <div className="max-w-6xl mx-auto my-12 px-5">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Find Your Dream Job</h1>
        <p className="text-gray-600">Browse all available job opportunities</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">
          <p>Loading jobs...</p>
        </div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No jobs available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onJobClick?.(job)}
            >
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-blue-600 font-medium mb-2">{job.company}</p>
              <p className="text-gray-600 text-sm mb-2">📍 {job.location}</p>
              <p className="text-green-600 font-semibold mb-3">₹{job.salary?.toLocaleString()}</p>
              <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                {job.description}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>Posted: {formatDate(job.createdAt)}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onViewDetails?.(job)
                  }}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LandingpageU
```

  ##JobDetailUI.jsx
  ```
const JobDetailUI = ({
  job,
  isJobProvider = false,
  isJobOwner = false,
  isJobSeeker = false,
  loading = false,
  error = "",
  success = "",
  hasApplied = false,
  applicationStatus = "",
  applying = false,
  cvFileName = "",
  onBack,
  onApply,
  onFileChange,
  onFileRemove,
  onViewApplications,
  onViewMyApplications,
}) => {
  const formatDate = (dateString) =>
    dateString ? new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto my-12 px-5">
        <div className="text-center py-8">
          <p>Loading job details...</p>
        </div>
      </div>
    )
  }

  if (error && !job) {
    return (
      <div className="max-w-4xl mx-auto my-12 px-5">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600">
            {error}
          </div>
          <button onClick={onBack} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto my-12 px-5">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p>Job not found</p>
          <button onClick={onBack} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto my-12 px-5">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <button onClick={onBack} className="mb-4 text-blue-600 hover:text-blue-800">
          ← Back to Jobs
        </button>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
          <p className="text-xl text-blue-600 font-medium mb-4">{job.company}</p>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <span>📍 {job.location}</span>
            <span>💰 ₹{job.salary?.toLocaleString()}</span>
            <span>📅 Posted: {formatDate(job.createdAt)}</span>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <div className="text-gray-700 whitespace-pre-line leading-relaxed">
            {job.description}
          </div>
        </div>

        {job.UserId && (
          <div className="mt-6 pt-6 border-t">
            <p className="text-sm text-gray-500">
              Posted by: {job.UserId.username || job.UserId.email}
            </p>
          </div>
        )}

        {/* Application Section */}
        <div className="mt-6 pt-6 border-t">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-600">
              {success}
            </div>
          )}

          {isJobProvider && isJobOwner ? (
            <button
              onClick={onViewApplications}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View Applications
            </button>
          ) : isJobSeeker ? (
            <div>
              {hasApplied ? (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 font-semibold mb-2">You have already applied for this job</p>
                  <p className="text-sm text-blue-600">
                    Status: <span className="capitalize font-medium">{applicationStatus?.replace("_", " ") || "Applied"}</span>
                  </p>
                  <button
                    onClick={onViewMyApplications}
                    className="mt-3 text-blue-600 hover:text-blue-800 underline text-sm"
                  >
                    View My Applications
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">
                      Upload CV/Resume (Optional)
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Accepted formats: JPEG, PNG, GIF, PDF (Max 5MB)
                    </p>
                    <div className="flex items-center gap-3">
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png,.gif,image/*,application/pdf"
                          onChange={onFileChange}
                          className="hidden"
                          disabled={applying}
                        />
                        <div className="px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors text-center">
                          {cvFileName ? (
                            <span className="text-blue-600">{cvFileName}</span>
                          ) : (
                            <span className="text-gray-600">Choose file or drag here</span>
                          )}
                        </div>
                      </label>
                      {cvFileName && (
                        <button
                          onClick={onFileRemove}
                          className="px-3 py-2 text-red-600 hover:text-red-800"
                          disabled={applying}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={onApply}
                    disabled={applying}
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:opacity-60"
                  >
                    {applying ? "Applying..." : "Apply for this Job"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onApply}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Apply for this Job
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobDetailUI
```

##JobCreateUI.jsx
```
const JobCreateUI = ({ formData, loading, error, success, onChange, onSubmit, onCancel }) => (
  <div className="max-w-3xl mx-auto my-12 px-5">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="mb-5 text-3xl font-bold">Create a Job</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-600">
          {success}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="title">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Full Stack Developer"
            required
          />
        </div>

        {/* Company */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="company">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            name="company"
            value={formData.company}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Company name"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="location">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            id="location"
            name="location"
            value={formData.location}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Remote / Bangalore / New York"
            required
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="salary">
            Salary <span className="text-red-500">*</span>
          </label>
          <input
            id="salary"
            name="salary"
            type="number"
            value={formData.salary}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 800000"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold" htmlFor="description">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the role, responsibilities, and requirements"
            required
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 bg-blue-600 text-white border-none rounded cursor-pointer text-base hover:bg-blue-700 disabled:opacity-60 transition-colors"
          >
            {loading ? "Creating..." : "Create Job"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 bg-gray-300 text-black border-none rounded cursor-pointer text-base hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)

export default JobCreateUI
```
##DashboardUI.jsx
```
const DashboardUI = ({
  user,
  isJobProvider = false,
  sidebarOpen = true,
  activeTab = "overview",
  stats = { totalJobs: 0, myJobs: 0, applications: 0 },
  onToggleSidebar,
  onNavigate,
  onLogout,
}) => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "profile", label: "Profile", icon: "👤" },
    ...(isJobProvider
      ? [
          { id: "myjobs", label: "My Jobs", icon: "💼", action: () => onNavigate?.("/job/my") },
          { id: "create", label: "Create Job", icon: "➕", action: () => onNavigate?.("/job/create") },
        ]
      : [
          { id: "applications", label: "My Applications", icon: "📝", action: () => onNavigate?.("/application/my") },
          { id: "browse", label: "Browse Jobs", icon: "🔍", action: () => onNavigate?.("/") },
        ]),
    { id: "settings", label: "Settings", icon: "⚙️" },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Total Jobs</p>
                    <p className="text-3xl font-bold mt-2">{stats.totalJobs}</p>
                  </div>
                  <div className="text-4xl opacity-80">💼</div>
                </div>
              </div>

              {isJobProvider ? (
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">My Posted Jobs</p>
                      <p className="text-3xl font-bold mt-2">{stats.myJobs}</p>
                    </div>
                    <div className="text-4xl opacity-80">📋</div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">My Applications</p>
                      <p className="text-3xl font-bold mt-2">{stats.applications}</p>
                    </div>
                    <div className="text-4xl opacity-80">📝</div>
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-lg text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm">Account Status</p>
                    <p className="text-xl font-bold mt-2">Active</p>
                  </div>
                  <div className="text-4xl opacity-80">✅</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {isJobProvider ? (
                  <>
                    <button
                      onClick={() => onNavigate?.("/job/create")}
                      className="p-4 border-2 border-dashed border-blue-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                    >
                      <div className="text-2xl mb-2">➕</div>
                      <h4 className="font-semibold text-gray-800">Create New Job</h4>
                      <p className="text-sm text-gray-600 mt-1">Post a new job opening</p>
                    </button>
                    <button
                      onClick={() => onNavigate?.("/job/my")}
                      className="p-4 border-2 border-dashed border-green-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left"
                    >
                      <div className="text-2xl mb-2">📋</div>
                      <h4 className="font-semibold text-gray-800">Manage My Jobs</h4>
                      <p className="text-sm text-gray-600 mt-1">View and edit your posted jobs</p>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => onNavigate?.("/")}
                      className="p-4 border-2 border-dashed border-blue-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                    >
                      <div className="text-2xl mb-2">🔍</div>
                      <h4 className="font-semibold text-gray-800">Browse Jobs</h4>
                      <p className="text-sm text-gray-600 mt-1">Explore available job opportunities</p>
                    </button>
                    <button
                      onClick={() => onNavigate?.("/application/my")}
                      className="p-4 border-2 border-dashed border-purple-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-left"
                    >
                      <div className="text-2xl mb-2">📝</div>
                      <h4 className="font-semibold text-gray-800">My Applications</h4>
                      <p className="text-sm text-gray-600 mt-1">Track your job applications</p>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      case "profile":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Profile Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {(user?.name || user?.username || "U")[0].toUpperCase()}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{user?.name || user?.username || "User"}</h4>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 border rounded-lg">
                  <label className="text-sm text-gray-600">Full Name</label>
                  <p className="font-semibold mt-1">{user?.name || user?.username || "N/A"}</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <label className="text-sm text-gray-600">Email</label>
                  <p className="font-semibold mt-1">{user?.email || "N/A"}</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <label className="text-sm text-gray-600">Role</label>
                  <p className="font-semibold mt-1">
                    {user?.role === 'jobseeker' ? 'Job Seeker' : 'Job Provider'}
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <label className="text-sm text-gray-600">Account Status</label>
                  <p className="font-semibold mt-1 text-green-600">Active</p>
                </div>
              </div>
            </div>
          </div>
        )
      case "settings":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Settings</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Notifications</h4>
                <p className="text-sm text-gray-600">Manage your notification preferences</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Privacy</h4>
                <p className="text-sm text-gray-600">Control your privacy settings</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Security</h4>
                <p className="text-sm text-gray-600">Update your password and security settings</p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${sidebarOpen ? "w-64" : "w-20"} bg-white shadow-lg transition-all duration-300 min-h-screen fixed left-0 top-16 z-10`}
        >
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              {sidebarOpen && (
                <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>
              )}
              <button
                onClick={onToggleSidebar}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {sidebarOpen ? "←" : "→"}
              </button>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.action) item.action()
                }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  activeTab === item.id ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <button
              onClick={onLogout}
              className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-all"
            >
              <span className="text-xl">🚪</span>
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"}`}>
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome back, {user?.name || user?.username || "User"}! 👋
              </h1>
              <p className="text-gray-600 mt-2">
                {isJobProvider
                  ? "Manage your job postings and track applications"
                  : "Find your dream job and track your applications"}
              </p>
            </div>

            {/* Content */}
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardUI
```
##JobApplicationsUI.jsx 
```
const JobApplicationsUI = ({
  job,
  applications = [],
  loading = false,
  error = "",
  success = "",
  onBack,
  onAccept,
  onReject,
  onInReview,
}) => {
  const formatDate = (dateString) =>
    dateString ? new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : ""

  return (
    <div className="max-w-6xl mx-auto my-12 px-5">
      <div className="mb-6">
        <button onClick={onBack} className="text-blue-600 hover:text-blue-800 mb-4">
          ← Back to Job Details
        </button>
        <h1 className="text-3xl font-bold">Job Applications</h1>
        {job && (
          <div className="mt-2">
            <p className="text-xl text-gray-700">{job.title}</p>
            <p className="text-gray-600">{job.company} - {job.location}</p>
          </div>
        )}
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-600">
          {success}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">
          <p>Loading applications...</p>
        </div>
      ) : applications.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-gray-500">No applications received yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((application) => (
            <div key={application._id} className="bg-white p-6 rounded-lg shadow-md border">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    {application.UserId?.username || application.UserId?.email || "Unknown User"}
                  </h3>
                  <p className="text-gray-600">{application.UserId?.email}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Applied on: {formatDate(application.appliedAt)}
                  </p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                  application.status === "accepted" ? "bg-green-100 text-green-800 border-green-200" :
                  application.status === "rejected" ? "bg-red-100 text-red-800 border-red-200" :
                  application.status === "in_review" ? "bg-yellow-100 text-yellow-800 border-yellow-200" :
                  "bg-blue-100 text-blue-800 border-blue-200"
                }`}>
                  {application.status?.replace("_", " ").toUpperCase() || "APPLIED"}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                {application.status === "applied" || application.status === "in_review" ? (
                  <>
                    <button
                      onClick={() => onAccept?.(application._id)}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => onReject?.(application._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    >
                      Reject
                    </button>
                    {application.status === "applied" && (
                      <button
                        onClick={() => onInReview?.(application._id)}
                        className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
                      >
                        Mark as In Review
                      </button>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-gray-600">
                    Application has been {application.status}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold mb-2">Application Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{applications.length}</p>
            <p className="text-sm text-gray-600">Total</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {applications.filter(a => a.status === "accepted").length}
            </p>
            <p className="text-sm text-gray-600">Accepted</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {applications.filter(a => a.status === "in_review").length}
            </p>
            <p className="text-sm text-gray-600">In Review</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">
              {applications.filter(a => a.status === "rejected").length}
            </p>
            <p className="text-sm text-gray-600">Rejected</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobApplicationsUI
```

##MyApplicationsUI.jsx 
```
const MyApplicationsUI = ({
  applications = [],
  loading = false,
  error = "",
  onBrowseJobs,
  onViewJob,
}) => {
  const formatDate = (dateString) =>
    dateString ? new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : ""

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-800 border-green-200"
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200"
      case "in_review":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  return (
    <div className="max-w-6xl mx-auto my-12 px-5">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Applications</h1>
        <p className="text-gray-600 mt-2">Track all your job applications</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">
          <p>Loading your applications...</p>
        </div>
      ) : applications.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-gray-500 mb-4">You haven't applied for any jobs yet.</p>
          <button
            onClick={onBrowseJobs}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Browse Jobs
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{applications.length}</p>
                <p className="text-sm text-gray-600">Total</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {applications.filter(a => a.status === "accepted").length}
                </p>
                <p className="text-sm text-gray-600">Accepted</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">
                  {applications.filter(a => a.status === "in_review").length}
                </p>
                <p className="text-sm text-gray-600">In Review</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">
                  {applications.filter(a => a.status === "rejected").length}
                </p>
                <p className="text-sm text-gray-600">Rejected</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {applications.map((application) => (
              <div
                key={application._id}
                className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onViewJob?.(application.JobId?._id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {application.JobId?.title || "Job Title Not Available"}
                    </h3>
                    <p className="text-blue-600 font-medium mt-1">
                      {application.JobId?.company || "Company Not Available"}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                      {application.JobId?.location && (
                        <span>📍 {application.JobId.location}</span>
                      )}
                      {application.JobId?.salary && (
                        <span>💰 ₹{application.JobId.salary.toLocaleString()}</span>
                      )}
                      <span>📅 Applied: {formatDate(application.appliedAt)}</span>
                    </div>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(
                      application.status
                    )}`}
                  >
                    {application.status?.replace("_", " ").toUpperCase() || "APPLIED"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default MyApplicationsUI
I```
