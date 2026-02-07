import { Sponsor } from "@/data/team";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";

interface SponsorCardProps {
  sponsor: Sponsor;
}

const tierStyles = {
  platinum: "bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300",
  gold: "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-300",
  silver: "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300",
  bronze: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300",
};

const tierLabels = {
  platinum: "Platinum Sponsor",
  gold: "Gold Sponsor",
  silver: "Silver Sponsor",
  bronze: "Bronze Sponsor",
};

const SponsorCard = ({ sponsor }: SponsorCardProps) => {
  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block rounded-xl border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-card-hover",
        tierStyles[sponsor.tier]
      )}
    >
      <div className="flex flex-col items-center text-center">
        {sponsor.logo ? (
          <img 
            src={sponsor.logo} 
            alt={sponsor.name}
            className="h-12 w-auto mb-3 object-contain"
          />
        ) : (
          <Building2 className="w-12 h-12 mb-3 text-muted-foreground" />
        )}
        <h4 className="font-display font-bold">{sponsor.name}</h4>
        <span className="text-xs text-muted-foreground mt-1">{tierLabels[sponsor.tier]}</span>
      </div>
    </a>
  );
};

export default SponsorCard;
