const JOB_CATEGORIES = [
  "IT",
  "Finance",
  "Marketing",
  "Customer Service",
  "Web Development",
  "Design",
  "Writing",
  "Other",
  "Student Part-Time"
];

const DEFAULT_ADMIN = {
  name: "Site Admin",
  email: "admin@connectwork.com",
  password: "admin123",
  role: "admin",
  profile: {
    location: "Platform Office",
    skills: "User management, oversight, support",
    education: "System administration",
    experience: "Manages user access, platform activity, and account review."
  }
};

const SAMPLE_JOBS = [
  {
    id: "sample-1",
    title: "Build a responsive company website",
    category: "Web Development",
    budget: 650000,
    company: "Kigali Creative Studio",
    location: "Kigali, Rwanda",
    description: "Create a polished, mobile-friendly website for a growing creative agency.",
    requirements: "HTML, CSS, JavaScript, responsive design, and a portfolio of previous work.",
    responsibilities: "Build the core pages, test across screen sizes, and hand over the finished source files.",
    postedBy: "sample@connectwork.local",
    postedAt: "2026-10-01T09:00:00.000Z"
  },
  {
    id: "sample-2",
    title: "Social media campaign assistant",
    category: "Marketing",
    budget: 280000,
    company: "Imanzi Foods",
    location: "Remote",
    description: "Help plan and publish a month of social media content for a local food brand.",
    requirements: "Strong writing skills and experience with Instagram or Facebook.",
    responsibilities: "Prepare a content calendar, write captions, and track engagement.",
    postedBy: "sample@connectwork.local",
    postedAt: "2026-10-03T09:00:00.000Z"
  },
  {
    id: "sample-3",
    title: "Junior finance assistant",
    category: "Finance",
    budget: 420000,
    company: "BrightPath Consulting",
    location: "Kigali, Rwanda",
    description: "Support a small finance team with monthly reporting and record keeping.",
    requirements: "Basic spreadsheet skills, attention to detail, and an interest in accounting.",
    responsibilities: "Organize receipts, update spreadsheets, and help prepare monthly summaries.",
    postedBy: "sample@connectwork.local",
    postedAt: "2026-10-04T09:00:00.000Z"
  },
  {
    id: "sample-4",
    title: "Customer support representative",
    category: "Customer Service",
    budget: 350000,
    company: "Horizon Learning",
    location: "Remote",
    description: "Respond to learner questions and help customers get the most from an online course.",
    requirements: "Clear communication, patience, and reliable internet access.",
    responsibilities: "Answer support messages, document common issues, and escalate technical problems.",
    postedBy: "sample@connectwork.local",
    postedAt: "2026-10-05T09:00:00.000Z"
  }
];

const STUDENT_SAMPLE_JOBS = [
  {
    id: "student-sample-1", title: "Waiter / Waitress", category: "Student Part-Time",
    studentFriendly: true, payType: "hourly", hourlyRate: 2000, budget: 2000,
    company: "Sample Café Employer", location: "Kigali, Rwanda",
    description: "Help serve customers during evening and weekend shifts. Shifts can be arranged around your class timetable.",
    requirements: "Friendly communication, reliability, and a willingness to learn. Previous experience is helpful but not required.",
    responsibilities: "Welcome customers, take orders, serve food, and help keep the dining area tidy.",
    postedBy: "sample@connectwork.local", postedAt: "2026-10-05T09:00:00.000Z"
  },
  {
    id: "student-sample-2", title: "Library Assistant", category: "Student Part-Time",
    studentFriendly: true, payType: "hourly", hourlyRate: 1800, budget: 1800,
    company: "Sample Community Library", location: "Kigali, Rwanda",
    description: "A part-time library role with flexible shifts that can fit around lectures and study time.",
    requirements: "Organized, dependable, and comfortable helping visitors find information.",
    responsibilities: "Shelve books, assist visitors, update borrowing records, and keep study areas organized.",
    postedBy: "sample@connectwork.local", postedAt: "2026-10-04T09:00:00.000Z"
  },
  {
    id: "student-sample-3", title: "Weekend Event Assistant", category: "Student Part-Time",
    studentFriendly: true, payType: "hourly", hourlyRate: 2500, budget: 2500,
    company: "Sample Events Team", location: "Kigali, Rwanda",
    description: "Pick up occasional weekend shifts supporting local events, leaving weekdays open for classes.",
    requirements: "Good communication, punctuality, and the ability to work as part of a team.",
    responsibilities: "Welcome guests, help prepare event spaces, and assist the event team during activities.",
    postedBy: "sample@connectwork.local", postedAt: "2026-10-03T09:00:00.000Z"
  },
  {
    id: "student-sample-4", title: "Shop Assistant / Cashier", category: "Student Part-Time",
    studentFriendly: true, payType: "hourly", hourlyRate: 2200, budget: 2200,
    company: "Sample Neighbourhood Market", location: "Kigali, Rwanda",
    description: "Part-time evening and weekend shifts at a neighbourhood shop, with scheduling agreed around classes.",
    requirements: "Dependable, polite with customers, and comfortable with basic arithmetic.",
    responsibilities: "Assist customers, keep shelves tidy, and support checkout during busy periods.",
    postedBy: "sample@connectwork.local", postedAt: "2026-10-02T09:00:00.000Z"
  },
  {
    id: "student-sample-5", title: "After-school Tutor", category: "Student Part-Time",
    studentFriendly: true, payType: "hourly", hourlyRate: 3000, budget: 3000,
    company: "Sample Learning Centre", location: "Kigali, Rwanda",
    description: "Tutor school learners for a few afternoons each week in subjects you know well.",
    requirements: "Strong knowledge of at least one school subject, patience, and clear communication.",
    responsibilities: "Prepare short learning activities, explain concepts, and encourage learners.",
    postedBy: "sample@connectwork.local", postedAt: "2026-10-01T09:00:00.000Z"
  },
  {
    id: "student-sample-6", title: "Café Barista Assistant", category: "Student Part-Time",
    studentFriendly: true, payType: "hourly", hourlyRate: 2300, budget: 2300,
    company: "Sample Corner Café", location: "Kigali, Rwanda",
    description: "Join a café team for flexible morning, evening, or weekend shifts.",
    requirements: "Friendly service, punctuality, and interest in learning how to prepare café drinks.",
    responsibilities: "Take orders, prepare simple drinks, serve customers, and help clean the counter.",
    postedBy: "sample@connectwork.local", postedAt: "2026-09-30T09:00:00.000Z"
  }
];

// ---------- Theme and storage ----------
function initTheme() {
  const stored = localStorage.getItem("theme") || "dark";
  document.body.setAttribute("data-theme", stored);
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.textContent = stored === "dark" ? "☀️" : "🌙";
  btn.addEventListener("click", () => {
    const next = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    btn.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

function readStore(key, fallback) {
  const value = localStorage.getItem(key);
  return value === null ? fallback : JSON.parse(value);
}

function ensurePlatformUsers() {
  const users = getUsers();
  const hasAdmin = users.some((user) => user.email && user.email.toLowerCase() === DEFAULT_ADMIN.email.toLowerCase());
  if (!hasAdmin) {
    users.push({ ...DEFAULT_ADMIN, createdAt: new Date().toISOString(), profile: { ...DEFAULT_ADMIN.profile } });
    saveUsers(users);
  }
  return getUsers();
}

function getUsers() {
  const users = readStore("cw_users", []);
  if (!Array.isArray(users)) return [];
  return users;
}
function saveUsers(users) { localStorage.setItem("cw_users", JSON.stringify(users)); }
function getActivityLog() { return readStore("cw_activity_log", []); }
function saveActivityLog(entries) { localStorage.setItem("cw_activity_log", JSON.stringify(entries)); }
function trackUserAction(type, details = {}) {
  const entries = getActivityLog();
  entries.unshift({
    id: Date.now() + Math.random(),
    type,
    details,
    createdAt: new Date().toISOString()
  });
  saveActivityLog(entries.slice(0, 100));
}
function getJobs() {
  const jobs = readStore("cw_jobs", null);
  const savedJobs = jobs === null ? SAMPLE_JOBS : jobs;
  if (jobs === null) saveJobs(SAMPLE_JOBS);
  return [...savedJobs, ...STUDENT_SAMPLE_JOBS.filter((sample) =>
    !savedJobs.some((job) => String(job.id) === String(sample.id)))];
}
function saveJobs(jobs) { localStorage.setItem("cw_jobs", JSON.stringify(jobs)); }
function getApplications() { return readStore("cw_applications", []); }
function saveApplications(applications) { localStorage.setItem("cw_applications", JSON.stringify(applications)); }
function getCurrentUser() {
  const email = localStorage.getItem("cw_loggedInUser");
  if (!email) return null;
  return getUsers().find((user) => user.email.toLowerCase() === email.toLowerCase()) || null;
}
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}
function showFieldError(inputEl, errorEl, message) {
  if (!inputEl || !errorEl) return;
  inputEl.classList.toggle("input-error", Boolean(message));
  errorEl.textContent = message || "";
}
function requireLogin() {
  if (getCurrentUser()) return true;
  window.location.href = "login.html";
  return false;
}
function logout() {
  localStorage.removeItem("cw_loggedInUser");
  localStorage.removeItem("cw_loggedInRole");
  window.location.href = "login.html";
}
function formatDate(value) {
  if (!value) return "Recently posted";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Recently posted" : date.toLocaleDateString();
}
function formatJobPay(job) {
  const amount = Number(job.payType === "hourly" ? job.hourlyRate : job.budget || 0);
  return `RWF ${amount.toLocaleString()}${job.payType === "hourly" ? " / hour" : ""}`;
}

// ---------- Shared job listings ----------
function jobCard(job, options = {}) {
  const applied = options.appliedIds && options.appliedIds.has(String(job.id));
  const showApply = options.showApply;
  return `
    <li class="job-card">
      <div class="job-card-top">
        <div>
          <div class="job-title">${escapeHtml(job.title)}</div>
          <div class="job-meta">
            <span class="job-tag">${escapeHtml(job.category)}</span>
            ${escapeHtml(job.company || "Independent client")} · ${escapeHtml(job.location || "Location not specified")}
          </div>
        </div>
        <div class="job-budget">${formatJobPay(job)}</div>
      </div>
      <p class="job-desc">${escapeHtml(job.description || job.desc || "")}</p>
      <div class="job-actions">
        <a class="btn btn-outline" href="job-details.html?id=${encodeURIComponent(job.id)}">View details</a>
        ${showApply ? applied
          ? `<span class="status-badge status-pending">Already applied</span>`
          : `<a class="btn" href="job-details.html?id=${encodeURIComponent(job.id)}#apply">Apply</a>`
          : ""}
      </div>
    </li>`;
}

function renderJobCollection(listEl, jobs, options = {}) {
  if (!jobs.length) {
    listEl.innerHTML = `<li class="empty-note">No jobs match your search. Try another keyword or category.</li>`;
    return;
  }
  listEl.innerHTML = jobs.map((job) => jobCard(job, options)).join("");
}

function initJobListings() {
  const list = document.getElementById("jobsList");
  if (!list) return;
  const search = document.getElementById("jobSearch");
  const category = document.getElementById("categoryFilter");
  const allJobsButton = document.getElementById("allJobsButton");
  const studentJobsButton = document.getElementById("studentJobsButton");
  const user = getCurrentUser();
  let studentOnly = false;

  if (!category.options.length) {
    category.innerHTML = `<option value="">All categories</option>${JOB_CATEGORIES.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("")}`;
  }

  function render() {
    const keyword = search.value.trim().toLowerCase();
    const selectedCategory = category.value;
    const jobs = getJobs().filter((job) => {
      const searchable = [job.title, job.company, job.location, job.description, job.requirements, job.category].join(" ").toLowerCase();
      return (!keyword || searchable.includes(keyword))
        && (!selectedCategory || job.category === selectedCategory)
        && (!studentOnly || job.studentFriendly || job.category === "Student Part-Time");
    }).sort((a, b) => new Date(b.postedAt || 0) - new Date(a.postedAt || 0));
    const appliedIds = new Set(getApplications()
      .filter((application) => user && application.freelancerEmail === user.email)
      .map((application) => String(application.jobId)));
    renderJobCollection(list, jobs, { showApply: user?.role === "freelancer", appliedIds });
  }

  search.addEventListener("input", render);
  category.addEventListener("change", render);
  if (allJobsButton && studentJobsButton) {
    allJobsButton.addEventListener("click", () => {
      studentOnly = false;
      allJobsButton.classList.remove("btn-outline");
      studentJobsButton.classList.add("btn-outline");
      render();
    });
    studentJobsButton.addEventListener("click", () => {
      studentOnly = true;
      studentJobsButton.classList.remove("btn-outline");
      allJobsButton.classList.add("btn-outline");
      render();
    });
  }
  render();
}

function initJobDetails() {
  const root = document.getElementById("jobDetailsRoot");
  if (!root) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const job = getJobs().find((item) => String(item.id) === id);
  const user = getCurrentUser();
  if (!job) {
    root.innerHTML = `<h1>Job not found</h1><p>This listing may have been removed.</p><a class="btn" href="jobs.html">Browse jobs</a>`;
    return;
  }

  const alreadyApplied = user && getApplications().some((application) =>
    String(application.jobId) === String(job.id) && application.freelancerEmail === user.email
  );
  let applyPanel = "";
  if (user?.role === "freelancer") {
    applyPanel = alreadyApplied
      ? `<div class="insight-box">You have already applied to this job.</div>`
      : `
        <div class="section-heading" id="apply">Apply for this job</div>
        <form class="auth-form form-wide" id="jobApplicationForm">
          <div class="form-group">
            <label for="coverLetter">Tell the client why you're a good fit</label>
            <textarea id="coverLetter" rows="5" required maxlength="2000" placeholder="Introduce yourself and describe relevant experience..."></textarea>
            <p class="error-text" id="coverLetterError"></p>
          </div>
          <button class="btn" type="submit">Send application</button>
          <p class="success-text" id="applicationSuccess" role="status"></p>
        </form>`;
  } else if (!user) {
    applyPanel = `<div class="insight-box">Create an account or log in as a freelancer to apply.</div><div class="btn-row"><a class="btn" href="register.html">Create an account</a><a class="btn btn-outline" href="login.html">Log in</a></div>`;
  } else {
    applyPanel = `<div class="insight-box">Client accounts can review and manage job applications from the dashboard.</div>`;
  }

  root.innerHTML = `
    <a href="jobs.html" class="back-link">← Back to jobs</a>
    <article class="job-detail-card">
      <span class="job-tag">${escapeHtml(job.category)}</span>
      <h1>${escapeHtml(job.title)}</h1>
      <p class="job-meta">${escapeHtml(job.company || "Independent client")} · ${escapeHtml(job.location || "Location not specified")} · Posted ${formatDate(job.postedAt)}</p>
      <div class="job-budget">${formatJobPay(job)}</div>
      <div class="section-heading">About the role</div>
      <p>${escapeHtml(job.description || job.desc || "")}</p>
      <div class="section-heading">Requirements</div>
      <p>${escapeHtml(job.requirements || "Discuss requirements with the client.")}</p>
      <div class="section-heading">Responsibilities</div>
      <p>${escapeHtml(job.responsibilities || "Responsibilities will be agreed with the client.")}</p>
      <div class="section-heading">How to apply</div>
      <p>Submit your application through ConnectWork. The client will review it from their dashboard.</p>
      ${applyPanel}
    </article>`;

  const form = document.getElementById("jobApplicationForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const coverLetter = document.getElementById("coverLetter");
      const error = document.getElementById("coverLetterError");
      const success = document.getElementById("applicationSuccess");
      if (!coverLetter.value.trim()) {
        showFieldError(coverLetter, error, "Please add a short application message.");
        return;
      }
      const applications = getApplications();
      if (applications.some((application) => String(application.jobId) === String(job.id) && application.freelancerEmail === user.email)) {
        success.textContent = "You have already applied to this job.";
        return;
      }
      applications.push({
        id: Date.now(),
        jobId: job.id,
        freelancerEmail: user.email,
        coverLetter: coverLetter.value.trim(),
        status: "pending",
        createdAt: new Date().toISOString()
      });
      saveApplications(applications);
      trackUserAction("application", { jobId: job.id, freelancerEmail: user.email, status: "pending" });
      form.innerHTML = `<p class="success-text" role="status">Application sent. You can track its status from your dashboard.</p><a class="btn" href="dashboard.html">Go to dashboard</a>`;
    });
  }
}

// ---------- Registration and login ----------
function initRegisterForm() {
  const form = document.getElementById("registerForm");
  if (!form) return;

  let selectedRole = "freelancer";
  const freelancerCard = document.getElementById("roleFreelancer");
  const clientCard = document.getElementById("roleClient");
  function setRole(role) {
    selectedRole = role;
    freelancerCard.classList.toggle("selected", role === "freelancer");
    clientCard.classList.toggle("selected", role === "client");
  }
  freelancerCard.addEventListener("click", () => setRole("freelancer"));
  clientCard.addEventListener("click", () => setRole("client"));
  setRole("freelancer");

  ensurePlatformUsers();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const success = document.getElementById("successMsg");
    let hasError = false;

    if (!name.value.trim()) { showFieldError(name, document.getElementById("nameError"), "Full name is required."); hasError = true; }
    else showFieldError(name, document.getElementById("nameError"), "");
    if (!email.value.trim()) { showFieldError(email, document.getElementById("emailError"), "Email is required."); hasError = true; }
    else if (!isValidEmail(email.value)) { showFieldError(email, document.getElementById("emailError"), "Enter a valid email address."); hasError = true; }
    else if (getUsers().some((user) => user.email.toLowerCase() === email.value.trim().toLowerCase())) { showFieldError(email, document.getElementById("emailError"), "An account with this email already exists."); hasError = true; }
    else showFieldError(email, document.getElementById("emailError"), "");
    if (!password.value) { showFieldError(password, document.getElementById("passwordError"), "Password is required."); hasError = true; }
    else if (password.value.length < 6) { showFieldError(password, document.getElementById("passwordError"), "Password must be at least 6 characters."); hasError = true; }
    else showFieldError(password, document.getElementById("passwordError"), "");
    if (!confirmPassword.value || confirmPassword.value !== password.value) { showFieldError(confirmPassword, document.getElementById("confirmPasswordError"), "Passwords do not match."); hasError = true; }
    else showFieldError(confirmPassword, document.getElementById("confirmPasswordError"), "");
    if (hasError) { success.textContent = ""; return; }

    const users = getUsers();
    users.push({ name: name.value.trim(), email: email.value.trim(), password: password.value, role: selectedRole, createdAt: new Date().toISOString(), profile: { location: "", skills: "", education: "", experience: "" } });
    saveUsers(users);
    trackUserAction("registration", { email: email.value.trim(), role: selectedRole, name: name.value.trim() });
    success.textContent = "Account created! Redirecting to login...";
    setTimeout(() => { window.location.href = "login.html"; }, 1200);
  });
}

function initLoginForm() {
  const form = document.getElementById("loginForm");
  if (!form) return;
  ensurePlatformUsers();
  const adminLoginButton = document.getElementById("adminLoginButton");
  if (adminLoginButton) {
    adminLoginButton.addEventListener("click", () => {
      document.getElementById("email").value = DEFAULT_ADMIN.email;
      document.getElementById("password").value = DEFAULT_ADMIN.password;
      form.requestSubmit();
    });
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const success = document.getElementById("successMsg");
    let hasError = false;
    if (!email.value.trim()) { showFieldError(email, document.getElementById("emailError"), "Email is required."); hasError = true; }
    else if (!isValidEmail(email.value)) { showFieldError(email, document.getElementById("emailError"), "Enter a valid email address."); hasError = true; }
    else showFieldError(email, document.getElementById("emailError"), "");
    if (!password.value) { showFieldError(password, document.getElementById("passwordError"), "Password is required."); hasError = true; }
    else showFieldError(password, document.getElementById("passwordError"), "");

    const user = hasError ? null : getUsers().find((item) =>
      item.email.toLowerCase() === email.value.trim().toLowerCase() && item.password === password.value
    );
    if (!hasError && !user) {
      showFieldError(password, document.getElementById("passwordError"), "Incorrect email or password.");
      hasError = true;
    }
    if (hasError) { success.textContent = ""; return; }
    localStorage.setItem("cw_loggedInUser", user.email);
    localStorage.setItem("cw_loggedInRole", user.role);
    trackUserAction("login", { email: user.email, role: user.role, name: user.name });
    success.textContent = "Logged in! Redirecting...";
    setTimeout(() => { window.location.href = "dashboard.html"; }, 900);
  });
}

// ---------- User profile ----------
function initProfile() {
  const form = document.getElementById("profileForm");
  if (!form) return;
  if (!requireLogin()) return;

  const user = getCurrentUser();
  const profile = user.profile || {};
  const name = document.getElementById("profileName");
  const location = document.getElementById("profileLocation");
  const skills = document.getElementById("profileSkills");
  const education = document.getElementById("profileEducation");
  const experience = document.getElementById("profileExperience");
  const photo = document.getElementById("profilePhoto");
  const photoInput = document.getElementById("profilePhotoInput");
  const photoError = document.getElementById("profilePhotoError");
  let profilePhoto = profile.photo || "";
  name.value = user.name || "";
  location.value = profile.location || "";
  skills.value = profile.skills || "";
  education.value = profile.education || "";
  experience.value = profile.experience || "";
  if (profilePhoto) {
    photo.src = profilePhoto;
    photo.hidden = false;
  }

  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    photoError.textContent = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      photoError.textContent = "Choose an image file.";
      photoInput.value = "";
      return;
    }
    if (file.size > 1024 * 1024) {
      photoError.textContent = "Choose an image smaller than 1 MB.";
      photoInput.value = "";
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result !== "string") {
        photoError.textContent = "The image could not be loaded. Please try another file.";
        return;
      }
      profilePhoto = reader.result;
      photo.src = profilePhoto;
      photo.hidden = false;
    });
    reader.addEventListener("error", () => {
      photoError.textContent = "The image could not be loaded. Please try another file.";
    });
    reader.readAsDataURL(file);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = document.getElementById("profileSuccess");
    if (!name.value.trim()) {
      showFieldError(name, document.getElementById("profileNameError"), "Full name is required.");
      return;
    }
    const users = getUsers();
    const index = users.findIndex((item) => item.email.toLowerCase() === user.email.toLowerCase());
    if (index < 0) {
      success.textContent = "Your account could not be found. Please log in again.";
      return;
    }
    users[index] = {
      ...users[index],
      name: name.value.trim(),
      profile: {
        location: location.value.trim(),
        skills: skills.value.trim(),
        education: education.value.trim(),
        experience: experience.value.trim(),
        photo: profilePhoto
      }
    };
    saveUsers(users);
    trackUserAction("profile_update", { email: user.email, role: user.role, name: name.value.trim() });
    success.textContent = "Profile saved.";
  });
}

// ---------- Contact ----------
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const message = document.getElementById("contactMessage");
    const success = document.getElementById("contactSuccess");
    let invalid = false;
    if (!name.value.trim()) { showFieldError(name, document.getElementById("contactNameError"), "Please enter your name."); invalid = true; }
    else showFieldError(name, document.getElementById("contactNameError"), "");
    if (!isValidEmail(email.value.trim())) { showFieldError(email, document.getElementById("contactEmailError"), "Enter a valid email address."); invalid = true; }
    else showFieldError(email, document.getElementById("contactEmailError"), "");
    if (!message.value.trim()) { showFieldError(message, document.getElementById("contactMessageError"), "Please enter a message."); invalid = true; }
    else showFieldError(message, document.getElementById("contactMessageError"), "");
    if (invalid) { success.textContent = ""; return; }

    const messages = readStore("cw_contactMessages", []);
    messages.push({
      id: Date.now(),
      name: name.value.trim(),
      email: email.value.trim(),
      subject: document.getElementById("contactSubject").value.trim(),
      message: message.value.trim(),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("cw_contactMessages", JSON.stringify(messages));
    form.reset();
    success.textContent = "Your message has been saved in this browser. This demo does not send email.";
  });
}

// ---------- Dashboard ----------
function initDashboard() {
  ensurePlatformUsers();
  const root = document.getElementById("dashboardRoot");
  if (!root) return;
  const email = localStorage.getItem("cw_loggedInUser");
  const role = localStorage.getItem("cw_loggedInRole");
  const users = getUsers();
  const me = users.find((user) => user.email.toLowerCase() === (email || "").toLowerCase());
  if (!email || !me || me.role !== role) {
    localStorage.removeItem("cw_loggedInUser");
    localStorage.removeItem("cw_loggedInRole");
    window.location.replace("login.html");
    return;
  }

  const firstName = me.name.split(" ")[0];
  const profileCard = renderDashboardProfile();
  if (role === "admin") renderAdminDashboard();
  else if (role === "client") renderClientDashboard();
  else renderFreelancerDashboard();

  function renderDashboardProfile() {
    const profile = me.profile || {};
    const initials = me.name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
    const avatar = profile.photo
      ? `<img class="profile-avatar-image" src="${escapeHtml(profile.photo)}" alt="${escapeHtml(me.name)}'s profile" />`
      : `<span>${escapeHtml(initials || "?")}</span>`;
    const skills = (profile.skills || "").split(",").map((skill) => skill.trim()).filter(Boolean);
    return `
      <section class="dashboard-profile" aria-labelledby="dashboardProfileTitle">
        <div class="dashboard-profile-cover">
          <div class="profile-avatar">${avatar}</div>
          <div class="profile-cover-copy">
            <p class="eyebrow">Your profile</p>
            <h2 id="dashboardProfileTitle">${escapeHtml(me.name)}</h2>
            <p>${escapeHtml(role === "client" ? "Client" : "Freelancer")} · ${escapeHtml(profile.location || "Add your location")}</p>
          </div>
          <a class="btn btn-outline profile-edit-link" href="profile.html">Edit profile</a>
        </div>
        <div class="dashboard-profile-details">
          <div><h3>About you</h3><p>${escapeHtml(profile.experience || "Add your experience and tell clients what you do.")}</p></div>
          <div><h3>Skills</h3>${skills.length
            ? `<div class="profile-skill-list">${skills.map((skill) => `<span class="job-tag">${escapeHtml(skill)}</span>`).join("")}</div>`
            : `<p>Add your skills to make your profile stand out.</p>`}</div>
          <div><h3>Education</h3><p>${escapeHtml(profile.education || "Add your education, qualifications, or courses.")}</p></div>
          <div><h3>Account</h3><p>${escapeHtml(me.email)}</p></div>
        </div>
      </section>`;
  }

  function renderAdminDashboard() {
    const allUsers = getUsers();
    const allJobs = getJobs();
    const allApplications = getApplications();
    const logEntries = getActivityLog().slice(0, 8);
    const stats = {
      totalUsers: allUsers.length,
      freelancers: allUsers.filter((user) => user.role === "freelancer").length,
      clients: allUsers.filter((user) => user.role === "client").length,
      totalApplications: allApplications.length,
      acceptedApplications: allApplications.filter((application) => application.status === "accepted").length,
      activeJobs: allJobs.length
    };

    root.innerHTML = `
      <h1>Welcome, ${escapeHtml(firstName)}</h1>
      <p>Monitor users, jobs, and platform activity.</p>
      ${profileCard}
      <div class="stat-grid">
        <div class="stat-card"><h3>${stats.totalUsers}</h3><p>Total users</p></div>
        <div class="stat-card"><h3>${stats.freelancers}</h3><p>Freelancers</p></div>
        <div class="stat-card"><h3>${stats.clients}</h3><p>Clients</p></div>
        <div class="stat-card"><h3>${stats.totalApplications}</h3><p>Applications</p></div>
        <div class="stat-card"><h3>${stats.acceptedApplications}</h3><p>Accepted</p></div>
        <div class="stat-card"><h3>${stats.activeJobs}</h3><p>Jobs live</p></div>
      </div>
      <div class="section-heading">User overview</div>
      <div class="table-wrap">
        <table class="admin-table">
          <thead>
            <tr><th>Name</th><th>Email</th><th>Role</th><th>Joined</th></tr>
          </thead>
          <tbody>
            ${allUsers.map((user) => `
              <tr>
                <td>${escapeHtml(user.name)}</td>
                <td>${escapeHtml(user.email)}</td>
                <td><span class="status-badge status-${escapeHtml(user.role)}">${escapeHtml(user.role)}</span></td>
                <td>${escapeHtml(user.createdAt ? formatDate(user.createdAt) : "New account")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div class="section-heading">Recent activity</div>
      <ul class="job-list">
        ${logEntries.length ? logEntries.map((entry) => `
          <li class="job-card">
            <div class="job-card-top">
              <div>
                <div class="job-title">${escapeHtml(entry.type)}</div>
                <div class="job-meta">${escapeHtml(new Date(entry.createdAt).toLocaleString())}</div>
              </div>
            </div>
            <p class="job-desc">${escapeHtml(JSON.stringify(entry.details))}</p>
          </li>
        `).join("") : `<li class="empty-note">No user activity recorded yet.</li>`}
      </ul>
      <div class="dashboard-actions"><button class="btn btn-outline" id="logoutBtn">Logout</button></div>`;
    document.getElementById("logoutBtn").addEventListener("click", logout);
  }

  function renderClientDashboard() {
    const jobs = getJobs().filter((job) => job.postedBy === email);
    const applications = getApplications();
    const totalApplicants = applications.filter((application) => jobs.some((job) => String(job.id) === String(application.jobId))).length;
    root.innerHTML = `
      <h1>Welcome, ${escapeHtml(firstName)}</h1>
      <p>Manage your job postings and review applicants.</p>
      ${profileCard}
      <div class="stat-grid">
        <div class="stat-card"><h3>${jobs.length}</h3><p>Jobs Posted</p></div>
        <div class="stat-card"><h3>${totalApplicants}</h3><p>Total Applicants</p></div>
        <div class="stat-card"><h3>${jobs.filter((job) => applications.some((application) => String(application.jobId) === String(job.id) && application.status === "accepted")).length}</h3><p>Hires Made</p></div>
      </div>
      <div class="section-heading">Post a New Job</div>
      <form class="auth-form form-wide" id="postJobForm">
        <div class="form-grid">
          <div class="form-group"><label for="jobTitle">Job title</label><input id="jobTitle" required maxlength="100" placeholder="e.g. Build a landing page" /></div>
          <div class="form-group"><label for="jobType">Job type</label><select id="jobType"><option value="project">Project / fixed budget</option><option value="student-part-time">Student part-time / hourly</option></select></div>
          <div class="form-group" id="jobCategoryGroup"><label for="jobCategory">Category</label><select id="jobCategory">${JOB_CATEGORIES.filter((item) => item !== "Student Part-Time").map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("")}</select></div>
          <div class="form-group"><label for="jobCompany">Company</label><input id="jobCompany" required maxlength="100" value="${escapeHtml(me.profile?.company || me.name)}" /></div>
          <div class="form-group"><label for="jobLocation">Location</label><input id="jobLocation" required maxlength="100" placeholder="Kigali, Rwanda or Remote" /></div>
          <div class="form-group"><label id="jobBudgetLabel" for="jobBudget">Budget (RWF)</label><input id="jobBudget" type="number" min="1" required placeholder="e.g. 50000" /></div>
          <div class="form-group"><label for="jobRequirements">Requirements</label><textarea id="jobRequirements" required maxlength="1200" placeholder="Skills and experience needed"></textarea></div>
        </div>
        <div class="form-group"><label for="jobDesc">Job description</label><textarea id="jobDesc" required maxlength="2000" placeholder="Describe the work..."></textarea></div>
        <div class="form-group"><label for="jobResponsibilities">Responsibilities</label><textarea id="jobResponsibilities" required maxlength="1200" placeholder="What will the freelancer do?"></textarea></div>
        <button type="submit" class="btn">Post job</button>
        <p class="success-text" id="jobPostSuccess" role="status"></p>
      </form>
      <div class="section-heading">Your Postings</div>
      <ul class="job-list" id="clientJobList"></ul>
      <div class="dashboard-actions"><button class="btn btn-outline" id="logoutBtn">Logout</button></div>`;

    renderClientJobs();
    const jobType = document.getElementById("jobType");
    const jobCategoryGroup = document.getElementById("jobCategoryGroup");
    const jobBudgetLabel = document.getElementById("jobBudgetLabel");
    jobType.addEventListener("change", () => {
      const studentJob = jobType.value === "student-part-time";
      jobCategoryGroup.hidden = studentJob;
      jobBudgetLabel.textContent = studentJob ? "Hourly pay (RWF per hour)" : "Budget (RWF)";
      document.getElementById("jobBudget").placeholder = studentJob ? "e.g. 2000" : "e.g. 50000";
    });
    document.getElementById("postJobForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const budget = Number(document.getElementById("jobBudget").value);
      if (!Number.isFinite(budget) || budget <= 0) {
        document.getElementById("jobPostSuccess").textContent = "Enter a budget greater than zero.";
        return;
      }
      const studentJob = jobType.value === "student-part-time";
      const jobs = getJobs();
      jobs.unshift({
        id: Date.now(),
        title: document.getElementById("jobTitle").value.trim(),
        category: studentJob ? "Student Part-Time" : document.getElementById("jobCategory").value,
        ...(studentJob ? { studentFriendly: true, payType: "hourly", hourlyRate: budget } : {}),
        budget,
        company: document.getElementById("jobCompany").value.trim(),
        location: document.getElementById("jobLocation").value.trim(),
        description: document.getElementById("jobDesc").value.trim(),
        requirements: document.getElementById("jobRequirements").value.trim(),
        responsibilities: document.getElementById("jobResponsibilities").value.trim(),
        postedBy: email,
        postedAt: new Date().toISOString()
      });
      saveJobs(jobs);
      trackUserAction("job_posted", { email, title: document.getElementById("jobTitle").value.trim(), budget, payType: studentJob ? "hourly" : "fixed" });
      renderClientDashboard();
    });
    document.getElementById("logoutBtn").addEventListener("click", logout);

    function renderClientJobs() {
      const list = document.getElementById("clientJobList");
      const myJobs = getJobs().filter((job) => job.postedBy === email);
      const allApplications = getApplications();
      if (!myJobs.length) {
        list.innerHTML = `<li class="empty-note">You haven't posted any jobs yet.</li>`;
        return;
      }
      list.innerHTML = myJobs.map((job) => {
        const applicants = allApplications.filter((application) => String(application.jobId) === String(job.id));
        const applicantsHtml = applicants.length
          ? applicants.map((application) => {
            const applicant = users.find((user) => user.email === application.freelancerEmail);
            return `<div class="applicant-row">
              <div><strong>${escapeHtml(applicant?.name || application.freelancerEmail)}</strong> · <span class="status-badge status-${escapeHtml(application.status)}">${escapeHtml(application.status)}</span>
              <p class="application-letter">${escapeHtml(application.coverLetter || "No application message was provided.")}</p></div>
              ${application.status === "pending" ? `<div class="applicant-actions"><button class="accept" data-action="accept" data-id="${escapeHtml(application.id)}">Accept</button><button class="decline" data-action="decline" data-id="${escapeHtml(application.id)}">Decline</button></div>` : ""}
            </div>`;
          }).join("")
          : `<p class="empty-note">No applicants yet.</p>`;
        return `<li class="job-card">
          <div class="job-card-top"><div><div class="job-title">${escapeHtml(job.title)}</div><div class="job-meta"><span class="job-tag">${escapeHtml(job.category)}</span>${applicants.length} applicant${applicants.length === 1 ? "" : "s"}</div></div><div class="job-budget">${formatJobPay(job)}</div></div>
          <p class="job-desc">${escapeHtml(job.description || job.desc || "")}</p>${applicantsHtml}
        </li>`;
      }).join("");
      list.querySelectorAll('[data-action="accept"], [data-action="decline"]').forEach((button) => {
        button.addEventListener("click", () => {
          const id = Number(button.dataset.id);
          const status = button.dataset.action === "accept" ? "accepted" : "declined";
          const updatedApplications = getApplications().map((application) => application.id === id ? { ...application, status } : application);
          saveApplications(updatedApplications);
          trackUserAction("application_status", { applicationId: id, status, clientEmail: email });
          renderClientDashboard();
        });
      });
    }
  }

  function renderFreelancerDashboard() {
    const applications = getApplications().filter((application) => application.freelancerEmail === email);
    const accepted = applications.filter((application) => application.status === "accepted").length;
    root.innerHTML = `
      <h1>Welcome, ${escapeHtml(firstName)}</h1>
      <p>Discover work, apply, and track your applications.</p>
      ${profileCard}
      <div class="stat-grid">
        <div class="stat-card"><h3>${applications.length}</h3><p>Applications sent</p></div>
        <div class="stat-card"><h3>${applications.filter((application) => application.status === "pending").length}</h3><p>Pending</p></div>
        <div class="stat-card"><h3>${accepted}</h3><p>Accepted</p></div>
      </div>
      <div class="dashboard-actions"><a class="btn" href="jobs.html">Browse all jobs</a><button class="btn btn-outline" id="logoutBtn">Logout</button></div>
      <div class="section-heading">Open Jobs</div><ul class="job-list" id="openJobsList"></ul>
      <div class="section-heading">My Applications</div><ul class="job-list" id="myApplicationsList"></ul>`;
    renderOpenJobs();
    renderMyApplications();
    document.getElementById("logoutBtn").addEventListener("click", logout);

    function renderOpenJobs() {
      const appliedIds = new Set(getApplications().filter((application) => application.freelancerEmail === email).map((application) => String(application.jobId)));
      renderJobCollection(document.getElementById("openJobsList"), getJobs(), { showApply: true, appliedIds });
    }
    function renderMyApplications() {
      const list = document.getElementById("myApplicationsList");
      const jobs = getJobs();
      const myApplications = getApplications().filter((application) => application.freelancerEmail === email);
      if (!myApplications.length) {
        list.innerHTML = `<li class="empty-note">You haven't applied to any jobs yet.</li>`;
        return;
      }
      list.innerHTML = myApplications.map((application) => {
        const job = jobs.find((item) => String(item.id) === String(application.jobId));
        if (!job) return "";
        return `<li class="job-card"><div class="job-card-top"><div><div class="job-title">${escapeHtml(job.title)}</div><div class="job-meta"><span class="job-tag">${escapeHtml(job.category)}</span>${escapeHtml(job.company || "")}</div></div><span class="status-badge status-${escapeHtml(application.status)}">${escapeHtml(application.status)}</span></div><p class="job-desc">${escapeHtml(application.coverLetter || "")}</p><a href="job-details.html?id=${encodeURIComponent(job.id)}">View job details</a></li>`;
      }).join("");
    }
  }
}

// ---------- Run on every page ----------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initRegisterForm();
  initLoginForm();
  initJobListings();
  initJobDetails();
  initProfile();
  initContactForm();
  initDashboard();
});
