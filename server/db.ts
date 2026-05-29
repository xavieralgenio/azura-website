import { supabaseAdmin } from "./lib/supabase";

interface PaginationOptions {
  limit?: number;
  offset?: number;
}

function normalizePagination(options: PaginationOptions) {
  return {
    limit: Math.min(options.limit ?? 50, 500),
    offset: Math.max(options.offset ?? 0, 0),
  };
}

export async function createDemoBooking(booking: Record<string, unknown>) {
  const { data, error } = await supabaseAdmin
    .from("demo_bookings")
    .insert(booking)
    .select();
  if (error) throw error;
  return data;
}

export async function getDemoBookings(limit = 50, offset = 0) {
  const { data, error } = await supabaseAdmin
    .from("demo_bookings")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit)
    .range(offset, offset + limit - 1);
  if (error) throw error;
  return data;
}

export async function updateDemoBookingStatus(id: number, status: string) {
  const { data, error } = await supabaseAdmin
    .from("demo_bookings")
    .update({ status })
    .eq("id", id)
    .select();
  if (error) throw error;
  return data;
}

export async function createContactSubmission(submission: Record<string, unknown>) {
  const { data, error } = await supabaseAdmin
    .from("contact_submissions")
    .insert(submission)
    .select();
  if (error) throw error;
  return data;
}

export async function getContactSubmissions(limit = 50, offset = 0) {
  const { data, error } = await supabaseAdmin
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);
  if (error) throw error;
  return data;
}

export async function updateContactSubmissionStatus(id: number, status: string) {
  const { data, error } = await supabaseAdmin
    .from("contact_submissions")
    .update({ status })
    .eq("id", id)
    .select();
  if (error) throw error;
  return data;
}

export async function subscribeToNewsletter(subscription: Record<string, unknown>) {
  const { data, error } = await supabaseAdmin
    .from("newsletter_subscriptions")
    .upsert(
      {
        ...subscription,
        is_active: true,
        unsubscribed_at: null,
      },
      { onConflict: "email" }
    )
    .select();
  if (error) throw error;
  return data;
}

export async function unsubscribeFromNewsletter(email: string) {
  const { data, error } = await supabaseAdmin
    .from("newsletter_subscriptions")
    .update({ is_active: false, unsubscribed_at: new Date().toISOString() })
    .eq("email", email)
    .select();
  if (error) throw error;
  return data;
}

export async function getNewsletterSubscribers(limit = 100, offset = 0) {
  const { data, error } = await supabaseAdmin
    .from("newsletter_subscriptions")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);
  if (error) throw error;
  return data;
}

export async function createPricingInquiry(inquiry: Record<string, unknown>) {
  const { data, error } = await supabaseAdmin
    .from("pricing_inquiries")
    .insert(inquiry)
    .select();
  if (error) throw error;
  return data;
}

export async function getPricingInquiries(limit = 50, offset = 0) {
  const { data, error } = await supabaseAdmin
    .from("pricing_inquiries")
    .select("*")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);
  if (error) throw error;
  return data;
}

export async function updatePricingInquiryStatus(id: number, status: string) {
  const { data, error } = await supabaseAdmin
    .from("pricing_inquiries")
    .update({ status })
    .eq("id", id)
    .select();
  if (error) throw error;
  return data;
}

export async function submitFeedback(feedbackData: Record<string, unknown>) {
  const { data, error } = await supabaseAdmin
    .from("feedback")
    .insert(feedbackData)
    .select();
  if (error) throw error;
  return data;
}

export async function getFeedback(limit = 50, offset = 0) {
  const { data, error } = await supabaseAdmin
    .from("feedback")
    .select("*")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);
  if (error) throw error;
  return data;
}

export async function updateFeedbackStatus(id: number, status: string) {
  const { data, error } = await supabaseAdmin
    .from("feedback")
    .update({ status })
    .eq("id", id)
    .select();
  if (error) throw error;
  return data;
}

export async function trackAnalyticsEvent(event: Record<string, unknown>) {
  const { data, error } = await supabaseAdmin
    .from("analytics_events")
    .insert(event)
    .select();
  if (error) {
    console.error("[Analytics] Failed to track event:", error);
    throw error;
  }
  return data;
}

export async function getAnalyticsEvents(limit = 100, offset = 0) {
  const { data, error } = await supabaseAdmin
    .from("analytics_events")
    .select("*")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);
  if (error) throw error;
  return data;
}

export async function getReceptionistSettings(userId: string) {
  const { data, error } = await supabaseAdmin
    .from("receptionist_settings")
    .select("*")
    .eq("user_id", userId)
    .single();
  if (error && error.details !== "Results contain 0 rows") throw error;
  return data;
}

export async function saveReceptionistSettings(userId: string, settings: Record<string, unknown>) {
  const payload = {
    user_id: userId,
    ...settings,
  };

  const { data, error } = await supabaseAdmin
    .from("receptionist_settings")
    .upsert(payload, { onConflict: "user_id" })
    .select();
  if (error) throw error;
  return data;
}

export async function getAppointments(userId: string, limit = 50, offset = 0) {
  const { data, error } = await supabaseAdmin
    .from("appointments")
    .select("*")
    .eq("user_id", userId)
    .order("start_time", { ascending: false })
    .range(offset, offset + limit - 1);
  if (error) throw error;
  return data;
}

export async function createAppointment(userId: string, appointment: Record<string, unknown>) {
  const payload = {
    user_id: userId,
    ...appointment,
  };
  const { data, error } = await supabaseAdmin.from("appointments").insert(payload).select();
  if (error) throw error;
  return data;
}

export async function updateAppointmentStatus(id: number, status: string, userId: string) {
  const { data, error } = await supabaseAdmin
    .from("appointments")
    .update({ status })
    .eq("id", id)
    .eq("user_id", userId)
    .select();
  if (error) throw error;
  return data;
}
