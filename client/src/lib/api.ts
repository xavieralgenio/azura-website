/**
 * API utility functions for communicating with the backend
 */

interface ApiResponse<T = any> {
  success?: boolean;
  data?: T;
  error?: string;
  message?: string;
  count?: number;
}

const API_BASE = "";

export async function apiCall<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.text();
      return { error: error || `HTTP ${response.status}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API call failed: ${endpoint}`, error);
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// ============ Demo Bookings ============

export async function submitDemoBooking(booking: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  hotelName?: string;
  hotelSize?: string;
  message?: string;
  preferredDate?: string;
}) {
  return apiCall("/api/demo-bookings", {
    method: "POST",
    body: JSON.stringify(booking),
  });
}

export async function getDemoBookings(limit = 50, offset = 0) {
  return apiCall("/api/demo-bookings", {
    method: "GET",
  });
}

// ============ Contact Submissions ============

export async function submitContactForm(contact: {
  name: string;
  email: string;
  subject: string;
  message: string;
  category?: string;
}) {
  return apiCall("/api/contact", {
    method: "POST",
    body: JSON.stringify(contact),
  });
}

export async function getContactSubmissions(limit = 50, offset = 0) {
  return apiCall("/api/contact", {
    method: "GET",
  });
}

// ============ Newsletter ============

export async function subscribeToNewsletter(email: string, name?: string) {
  return apiCall("/api/newsletter/subscribe", {
    method: "POST",
    body: JSON.stringify({ email, name }),
  });
}

export async function getNewsletterSubscribers(limit = 100, offset = 0) {
  return apiCall("/api/newsletter/subscribers", {
    method: "GET",
  });
}

// ============ Pricing Inquiries ============

export async function submitPricingInquiry(inquiry: {
  name: string;
  email: string;
  company?: string;
  currentPlan?: string;
  inquiryType: string;
  details?: string;
}) {
  return apiCall("/api/pricing-inquiry", {
    method: "POST",
    body: JSON.stringify(inquiry),
  });
}

export async function getPricingInquiries(limit = 50, offset = 0) {
  return apiCall("/api/pricing-inquiry", {
    method: "GET",
  });
}

// ============ Receptionist Settings ============

export async function getReceptionistSettings() {
  return apiCall("/api/receptionist-settings", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("supabaseAccessToken") || ""}`,
    },
  });
}

export async function saveReceptionistSettings(settings: Record<string, unknown>) {
  return apiCall("/api/receptionist-settings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("supabaseAccessToken") || ""}`,
    },
    body: JSON.stringify(settings),
  });
}

// ============ Appointments ============

export async function getAppointments(limit = 50, offset = 0) {
  return apiCall("/api/appointments", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("supabaseAccessToken") || ""}`,
    },
  });
}

export async function createAppointment(appointment: Record<string, unknown>) {
  return apiCall("/api/appointments", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("supabaseAccessToken") || ""}`,
    },
    body: JSON.stringify(appointment),
  });
}

// ============ Feedback ============

export async function submitFeedback(feedback: {
  email: string;
  feedbackType: string;
  title: string;
  description: string;
  rating?: number;
}) {
  return apiCall("/api/feedback", {
    method: "POST",
    body: JSON.stringify(feedback),
  });
}

export async function getFeedback(limit = 50, offset = 0) {
  return apiCall("/api/feedback", {
    method: "GET",
  });
}

// ============ Analytics ============

export async function trackEvent(eventType: string, eventData?: any) {
  return apiCall("/api/analytics/track", {
    method: "POST",
    body: JSON.stringify({
      eventType,
      eventData,
      userEmail: undefined,
      sessionId: sessionStorage.getItem("sessionId"),
      sourceUrl: window.location.href,
    }),
  });
}

export async function getAnalyticsEvents(limit = 100, offset = 0) {
  return apiCall("/api/analytics/events", {
    method: "GET",
  });
}

// Initialize session ID
if (typeof window !== "undefined" && !sessionStorage.getItem("sessionId")) {
  sessionStorage.setItem("sessionId", Math.random().toString(36).substring(7));
}
