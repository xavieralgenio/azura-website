import express, { Request, Response } from "express";
import {
  createDemoBooking,
  createContactSubmission,
  subscribeToNewsletter,
  createPricingInquiry,
  submitFeedback,
  trackAnalyticsEvent,
  getDemoBookings,
  getContactSubmissions,
  getNewsletterSubscribers,
  getPricingInquiries,
  getFeedback,
  getAnalyticsEvents,
  updateDemoBookingStatus,
  updateContactSubmissionStatus,
  updatePricingInquiryStatus,
  updateFeedbackStatus,
  getReceptionistSettings,
  saveReceptionistSettings,
  getAppointments,
  createAppointment,
  updateAppointmentStatus,
} from "./db";
import { getUserFromToken } from "./lib/supabase";

const router = express.Router();

function getBearerToken(req: Request) {
  const auth = req.headers.authorization;
  if (!auth) return null;
  const match = auth.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : null;
}

async function requireUser(req: Request, res: Response) {
  const token = getBearerToken(req);
  if (!token) {
    res.status(401).json({ error: "Authorization token missing" });
    return null;
  }

  const user = await getUserFromToken(token);
  if (!user) {
    res.status(401).json({ error: "Invalid or expired token" });
    return null;
  }

  return user;
}

router.post("/api/demo-bookings", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, hotelName, hotelSize, message, preferredDate } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: "Missing required fields: firstName, lastName, email" });
    }

    await createDemoBooking({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      hotel_name: hotelName,
      hotel_size: hotelSize,
      message,
      preferred_date: preferredDate ? new Date(preferredDate).toISOString() : null,
      status: "pending",
    });

    await trackAnalyticsEvent({
      event_type: "demo_booked",
      user_email: email,
      event_data: JSON.stringify({ hotelName, hotelSize }),
    });

    res.status(201).json({ success: true, message: "Demo booking created successfully" });
  } catch (error) {
    console.error("[API] Error creating demo booking:", error);
    res.status(500).json({ error: "Failed to create demo booking" });
  }
});

router.get("/api/demo-bookings", async (req: Request, res: Response) => {
  try {
    const limit = Math.min(parseInt(req.query.limit as string) || 50, 100);
    const offset = parseInt(req.query.offset as string) || 0;

    const bookings = await getDemoBookings(limit, offset);
    res.json({ data: bookings, count: bookings.length });
  } catch (error) {
    console.error("[API] Error fetching demo bookings:", error);
    res.status(500).json({ error: "Failed to fetch demo bookings" });
  }
});

router.patch("/api/demo-bookings/:id/status", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: "Status is required" });
    }

    await updateDemoBookingStatus(parseInt(id, 10), status);
    res.json({ success: true, message: "Demo booking status updated" });
  } catch (error) {
    console.error("[API] Error updating demo booking status:", error);
    res.status(500).json({ error: "Failed to update demo booking status" });
  }
});

router.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message, category } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await createContactSubmission({
      name,
      email,
      subject,
      message,
      category,
      status: "new",
    });

    await trackAnalyticsEvent({
      event_type: "contact_submitted",
      user_email: email,
      event_data: JSON.stringify({ category, subject }),
    });

    res.status(201).json({ success: true, message: "Contact submission received" });
  } catch (error) {
    console.error("[API] Error creating contact submission:", error);
    res.status(500).json({ error: "Failed to submit contact form" });
  }
});

router.get("/api/contact", async (req: Request, res: Response) => {
  try {
    const limit = Math.min(parseInt(req.query.limit as string) || 50, 100);
    const offset = parseInt(req.query.offset as string) || 0;

    const submissions = await getContactSubmissions(limit, offset);
    res.json({ data: submissions, count: submissions.length });
  } catch (error) {
    console.error("[API] Error fetching contact submissions:", error);
    res.status(500).json({ error: "Failed to fetch contact submissions" });
  }
});

router.patch("/api/contact/:id/status", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: "Status is required" });
    }

    await updateContactSubmissionStatus(parseInt(id, 10), status);
    res.json({ success: true, message: "Contact submission status updated" });
  } catch (error) {
    console.error("[API] Error updating contact submission status:", error);
    res.status(500).json({ error: "Failed to update contact submission status" });
  }
});

router.post("/api/newsletter/subscribe", async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    await subscribeToNewsletter({ email, name });

    await trackAnalyticsEvent({
      event_type: "newsletter_subscribed",
      user_email: email,
    });

    res.status(201).json({ success: true, message: "Successfully subscribed to newsletter" });
  } catch (error) {
    console.error("[API] Error subscribing to newsletter:", error);
    res.status(500).json({ error: "Failed to subscribe to newsletter" });
  }
});

router.get("/api/newsletter/subscribers", async (req: Request, res: Response) => {
  try {
    const limit = Math.min(parseInt(req.query.limit as string) || 100, 500);
    const offset = parseInt(req.query.offset as string) || 0;

    const subscribers = await getNewsletterSubscribers(limit, offset);
    res.json({ data: subscribers, count: subscribers.length });
  } catch (error) {
    console.error("[API] Error fetching newsletter subscribers:", error);
    res.status(500).json({ error: "Failed to fetch newsletter subscribers" });
  }
});

router.post("/api/pricing-inquiry", async (req: Request, res: Response) => {
  try {
    const { name, email, company, currentPlan, inquiryType, details } = req.body;

    if (!name || !email || !inquiryType) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await createPricingInquiry({
      name,
      email,
      company,
      current_plan: currentPlan,
      inquiry_type: inquiryType,
      details,
      status: "pending",
    });

    await trackAnalyticsEvent({
      event_type: "pricing_inquiry",
      user_email: email,
      event_data: JSON.stringify({ currentPlan, inquiryType }),
    });

    res.status(201).json({ success: true, message: "Pricing inquiry submitted" });
  } catch (error) {
    console.error("[API] Error creating pricing inquiry:", error);
    res.status(500).json({ error: "Failed to submit pricing inquiry" });
  }
});

router.get("/api/pricing-inquiry", async (req: Request, res: Response) => {
  try {
    const limit = Math.min(parseInt(req.query.limit as string) || 50, 100);
    const offset = parseInt(req.query.offset as string) || 0;

    const inquiries = await getPricingInquiries(limit, offset);
    res.json({ data: inquiries, count: inquiries.length });
  } catch (error) {
    console.error("[API] Error fetching pricing inquiries:", error);
    res.status(500).json({ error: "Failed to fetch pricing inquiries" });
  }
});

router.patch("/api/pricing-inquiry/:id/status", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: "Status is required" });
    }

    await updatePricingInquiryStatus(parseInt(id, 10), status);
    res.json({ success: true, message: "Pricing inquiry status updated" });
  } catch (error) {
    console.error("[API] Error updating pricing inquiry status:", error);
    res.status(500).json({ error: "Failed to update pricing inquiry status" });
  }
});

router.post("/api/feedback", async (req: Request, res: Response) => {
  try {
    const { email, feedbackType, title, description, rating } = req.body;

    if (!email || !feedbackType || !title || !description) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await submitFeedback({
      email,
      feedback_type: feedbackType,
      title,
      description,
      rating,
      status: "new",
    });

    await trackAnalyticsEvent({
      event_type: "feedback_submitted",
      user_email: email,
      event_data: JSON.stringify({ feedbackType, rating }),
    });

    res.status(201).json({ success: true, message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("[API] Error submitting feedback:", error);
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

router.get("/api/feedback", async (req: Request, res: Response) => {
  try {
    const limit = Math.min(parseInt(req.query.limit as string) || 50, 100);
    const offset = parseInt(req.query.offset as string) || 0;

    const feedbackList = await getFeedback(limit, offset);
    res.json({ data: feedbackList, count: feedbackList.length });
  } catch (error) {
    console.error("[API] Error fetching feedback:", error);
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
});

router.patch("/api/feedback/:id/status", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: "Status is required" });
    }

    await updateFeedbackStatus(parseInt(id, 10), status);
    res.json({ success: true, message: "Feedback status updated" });
  } catch (error) {
    console.error("[API] Error updating feedback status:", error);
    res.status(500).json({ error: "Failed to update feedback status" });
  }
});

router.get("/api/receptionist-settings", async (req: Request, res: Response) => {
  try {
    const user = await requireUser(req, res);
    if (!user) return;

    const settings = await getReceptionistSettings(user.id);
    res.json({ data: settings });
  } catch (error) {
    console.error("[API] Error fetching receptionist settings:", error);
    res.status(500).json({ error: "Failed to fetch receptionist settings" });
  }
});

router.post("/api/receptionist-settings", async (req: Request, res: Response) => {
  try {
    const user = await requireUser(req, res);
    if (!user) return;

    const payload = req.body;
    const settings = await saveReceptionistSettings(user.id, payload);
    res.status(201).json({ data: settings, message: "Receptionist settings saved" });
  } catch (error) {
    console.error("[API] Error saving receptionist settings:", error);
    res.status(500).json({ error: "Failed to save receptionist settings" });
  }
});

router.get("/api/appointments", async (req: Request, res: Response) => {
  try {
    const user = await requireUser(req, res);
    if (!user) return;

    const limit = Math.min(parseInt(req.query.limit as string) || 50, 100);
    const offset = parseInt(req.query.offset as string) || 0;
    const appointments = await getAppointments(user.id, limit, offset);
    res.json({ data: appointments, count: appointments.length });
  } catch (error) {
    console.error("[API] Error fetching appointments:", error);
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});

router.post("/api/appointments", async (req: Request, res: Response) => {
  try {
    const user = await requireUser(req, res);
    if (!user) return;

    const { guestName, guestEmail, guestPhone, startTime, endTime, notes } = req.body;
    if (!guestName || !guestEmail || !startTime || !endTime) {
      return res.status(400).json({ error: "Missing required appointment fields" });
    }

    const appointment = await createAppointment(user.id, {
      guest_name: guestName,
      guest_email: guestEmail,
      guest_phone: guestPhone,
      start_time: new Date(startTime).toISOString(),
      end_time: new Date(endTime).toISOString(),
      status: "pending",
      notes,
    });

    res.status(201).json({ data: appointment, message: "Appointment created" });
  } catch (error) {
    console.error("[API] Error creating appointment:", error);
    res.status(500).json({ error: "Failed to create appointment" });
  }
});

router.patch("/api/appointments/:id/status", async (req: Request, res: Response) => {
  try {
    const user = await requireUser(req, res);
    if (!user) return;

    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ error: "Status is required" });
    }

    const updated = await updateAppointmentStatus(parseInt(id, 10), status, user.id);
    res.json({ data: updated, message: "Appointment status updated" });
  } catch (error) {
    console.error("[API] Error updating appointment status:", error);
    res.status(500).json({ error: "Failed to update appointment status" });
  }
});

router.post("/api/analytics/track", async (req: Request, res: Response) => {
  try {
    const { eventType, eventData, userEmail, sessionId, sourceUrl } = req.body;

    if (!eventType) {
      return res.status(400).json({ error: "Event type is required" });
    }

    await trackAnalyticsEvent({
      event_type: eventType,
      event_data: eventData ? JSON.stringify(eventData) : undefined,
      user_email: userEmail,
      session_id: sessionId,
      source_url: sourceUrl,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("[API] Error tracking analytics event:", error);
    res.status(500).json({ error: "Failed to track event" });
  }
});

router.get("/api/analytics/events", async (req: Request, res: Response) => {
  try {
    const limit = Math.min(parseInt(req.query.limit as string) || 100, 500);
    const offset = parseInt(req.query.offset as string) || 0;

    const events = await getAnalyticsEvents(limit, offset);
    res.json({ data: events, count: events.length });
  } catch (error) {
    console.error("[API] Error fetching analytics events:", error);
    res.status(500).json({ error: "Failed to fetch analytics events" });
  }
});

export default router;
