import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import BookDemo from "./pages/BookDemo";
import SeeAzuraInAction from "./pages/SeeAzuraInAction";
import StartFreeTrial from "./pages/StartFreeTrial";
import Dashboard from "./pages/Dashboard";
import DashboardConversations from "./pages/DashboardConversations";
import DashboardBookings from "./pages/DashboardBookings";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardSettings from "./pages/DashboardSettings";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/book-demo"} component={BookDemo} />
      <Route path={"/see-azura"} component={SeeAzuraInAction} />
      <Route path={"/start-free-trial"} component={StartFreeTrial} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/dashboard/conversations"} component={DashboardConversations} />
      <Route path={"/dashboard/bookings"} component={DashboardBookings} />
      <Route path={"/dashboard/analytics"} component={DashboardAnalytics} />
      <Route path={"/dashboard/settings"} component={DashboardSettings} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
