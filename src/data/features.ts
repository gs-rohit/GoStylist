import { 
  Sparkles, 
  Camera, 
  Palette, 
  TrendingUp 
} from 'lucide-react';
import { Feature } from '../types';

export const features: Feature[] = [
  {
    icon: Sparkles,
    title: "AI Style Recommendations",
    description: "Get personalized outfit suggestions powered by advanced machine learning algorithms that understand your unique style preferences."
  },
  {
    icon: Camera,
    title: "Smart Wardrobe Analysis",
    description: "Upload your clothes and let AI analyze your existing wardrobe to create perfect combinations and identify missing pieces."
  },
  {
    icon: Palette,
    title: "Color Coordination",
    description: "Perfect color matching and seasonal palettes tailored to your skin tone, ensuring you always look your absolute best."
  },
  {
    icon: TrendingUp,
    title: "Trend Forecasting",
    description: "Stay ahead of fashion trends with AI-powered analysis and forecasting insights from global fashion data."
  }
];