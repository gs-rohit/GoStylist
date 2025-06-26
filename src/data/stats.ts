import { Users, Heart, Star, Zap } from 'lucide-react';
import { Stat } from '../types';

export const stats: Stat[] = [
  { icon: Users, value: "50K+", label: "Happy Users" },
  { icon: Heart, value: "1M+", label: "Outfits Created" },
  { icon: Star, value: "4.9", label: "App Rating" },
  { icon: Zap, value: "99%", label: "Accuracy Rate" }
];