import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useEffect, useState } from "react";
import { getReceptionistSettings, saveReceptionistSettings } from "@/lib/api";

interface SettingsState {
  propertyName: string;
  email: string;
  phone: string;
  timezone: string;
  language: string;
  aiTone: string;
  autoRespond: boolean;
  escalateToHuman: boolean;
}

const defaultSettings: SettingsState = {
  propertyName: "Ocean View Resort",
  email: "manager@oceanviewresort.com",
  phone: "+1-555-0123",
  timezone: "UTC-5",
  language: "English",
  aiTone: "Professional",
  autoRespond: true,
  escalateToHuman: true,
};

export default function DashboardSettings() {
  const [settings, setSettings] = useState<SettingsState>(defaultSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSettings() {
      const result = await getReceptionistSettings();
      if (result.error) {
        console.error("Failed to load settings:", result.error);
        alert("Unable to load settings. Please sign in or try again.");
      } else if (result.data) {
        setSettings((prev) => ({ ...prev, ...result.data }));
      }
      setIsLoading(false);
    }

    loadSettings();
  }, []);

  const handleChange = (field: keyof SettingsState, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const result = await saveReceptionistSettings(settings);
      if (result.error) {
        console.error("Save error:", result.error);
        alert("Unable to save settings. Please sign in or try again.");
      } else {
        alert("Settings saved successfully.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to save settings. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <DashboardLayout
      currentPage="Dashboard"
      breadcrumbs={[
        { label: "Dashboard", path: "/dashboard" },
        { label: "Settings" },
      ]}
    >
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
          <p className="text-slate-600">Manage your Azura AI configuration and preferences</p>
        </div>

        {isLoading ? (
          <Card className="p-6">Loading settings…</Card>
        ) : (
          <>
            <Card className="p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-6">Property Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Property Name
                  </label>
                  <input
                    type="text"
                    value={settings.propertyName}
                    onChange={(e) => handleChange("propertyName", e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-6">AI Configuration</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Timezone</label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => handleChange("timezone", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      <option>UTC-8</option>
                      <option>UTC-5</option>
                      <option>UTC</option>
                      <option>UTC+1</option>
                      <option>UTC+8</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Language</label>
                    <select
                      value={settings.language}
                      onChange={(e) => handleChange("language", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Chinese</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">AI Tone</label>
                  <select
                    value={settings.aiTone}
                    onChange={(e) => handleChange("aiTone", e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option>Professional</option>
                    <option>Friendly</option>
                    <option>Formal</option>
                    <option>Casual</option>
                  </select>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-6">Behavior Settings</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoRespond}
                    onChange={(e) => handleChange("autoRespond", e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300"
                  />
                  <span className="text-sm font-medium text-slate-700">Auto-respond to messages</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.escalateToHuman}
                    onChange={(e) => handleChange("escalateToHuman", e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300"
                  />
                  <span className="text-sm font-medium text-slate-700">Escalate to human when needed</span>
                </label>
              </div>
            </Card>

            <div className="flex gap-4">
              <Button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-600 hover:bg-slate-50"
                onClick={() => setSettings(defaultSettings)}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
