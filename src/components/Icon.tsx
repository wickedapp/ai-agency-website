'use client';

import {
  Bot,
  FileText,
  Settings,
  BarChart3,
  Search,
  Wrench,
  Target,
  Phone,
  MessageCircle,
  CheckCircle,
  ClipboardList,
  Mail,
  MapPin,
  Handshake,
  Flag,
  Lightbulb,
  Palette,
} from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  robot: Bot,
  document: FileText,
  gear: Settings,
  chart: BarChart3,
  search: Search,
  tools: Wrench,
  target: Target,
  phone: Phone,
  chat: MessageCircle,
  check: CheckCircle,
  clipboard: ClipboardList,
  email: Mail,
  location: MapPin,
  handshake: Handshake,
  japan: Flag,
  innovation: Lightbulb,
  design: Palette,
};

export default function Icon({ name, size = 32, className = '' }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;

  return (
    <IconComponent 
      size={size} 
      className={`text-[var(--color-primary)] ${className}`}
    />
  );
}
