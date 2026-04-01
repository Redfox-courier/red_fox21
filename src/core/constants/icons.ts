/**
 * Semantic Icon Registry
 *
 * Maps domain concepts → Lucide icons.
 * Import from here instead of lucide-react directly in domain/feature code.
 * Benefits:
 *   1. Swap an icon project-wide in one line
 *   2. Enforces naming that matches the design language
 *   3. Makes the icon palette easy to audit / document
 */
import {
  // Navigation & Layout
  LayoutDashboard,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,

  // Logistics domain
  Package,
  Package2,
  Truck,
  MapPin,
  Globe,
  Flame,
  Workflow,
  Warehouse,
  ClipboardList,

  // Status & Feedback
  CheckCircle2,
  XCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  Circle,
  Clock,
  Loader2,
  TrendingUp,

  // Actions
  Search,
  Plus,
  Pencil,
  Trash2,
  Download,
  Upload,
  Copy,
  Eye,
  EyeOff,
  Filter,
  SlidersHorizontal,
  MoreHorizontal,

  // User & Auth
  User,
  Users,
  LogIn,
  LogOut,
  Lock,
  Mail,
  Phone,
  Building2,

  // Finance
  CreditCard,
  Receipt,
  DollarSign,
  IndianRupee,

  // Communication
  Bell,
  MessageSquare,
  Send,
  Share2,

  // Misc
  Settings,
  HelpCircle,
  ExternalLink,
  Calendar,
  FileText,
  Image as ImageIcon,
  Star,
} from "lucide-react";

export type { LucideIcon } from "lucide-react";

/* ── Navigation ───────────────────────────────────────────── */
export const Icons = {
  nav: {
    dashboard:    LayoutDashboard,
    menu:         Menu,
    close:        X,
    chevronDown:  ChevronDown,
    chevronRight: ChevronRight,
    chevronLeft:  ChevronLeft,
    chevronUp:    ChevronUp,
    arrowUpRight: ArrowUpRight,
    arrowLeft:    ArrowLeft,
    arrowRight:   ArrowRight,
    external:     ExternalLink,
  },

  /* ── Logistics (core domain) ──────────────────────────── */
  logistics: {
    shipment:     Package,
    shipmentAlt:  Package2,
    truck:        Truck,
    tracking:     MapPin,
    globe:        Globe,
    trending:     Flame,
    workflow:     Workflow,
    warehouse:    Warehouse,
    manifest:     ClipboardList,
  },

  /* ── Status & Feedback ────────────────────────────────── */
  status: {
    success:      CheckCircle2,
    error:        XCircle,
    warning:      AlertTriangle,
    info:         Info,
    alert:        AlertCircle,
    pending:      Circle,
    clock:        Clock,
    loading:      Loader2,
    trending:     TrendingUp,
  },

  /* ── Actions ──────────────────────────────────────────── */
  action: {
    search:       Search,
    add:          Plus,
    edit:         Pencil,
    delete:       Trash2,
    download:     Download,
    upload:       Upload,
    copy:         Copy,
    show:         Eye,
    hide:         EyeOff,
    filter:       Filter,
    settings:     SlidersHorizontal,
    more:         MoreHorizontal,
    share:        Share2,
    send:         Send,
  },

  /* ── User & Auth ──────────────────────────────────────── */
  user: {
    profile:      User,
    team:         Users,
    login:        LogIn,
    logout:       LogOut,
    lock:         Lock,
    mail:         Mail,
    phone:        Phone,
    company:      Building2,
  },

  /* ── Finance ──────────────────────────────────────────── */
  finance: {
    card:         CreditCard,
    receipt:      Receipt,
    dollar:       DollarSign,
    rupee:        IndianRupee,
  },

  /* ── Communication ────────────────────────────────────── */
  comms: {
    bell:         Bell,
    message:      MessageSquare,
  },

  /* ── General ──────────────────────────────────────────── */
  general: {
    settings:     Settings,
    help:         HelpCircle,
    calendar:     Calendar,
    file:         FileText,
    image:        ImageIcon,
    star:         Star,
  },
} as const;
