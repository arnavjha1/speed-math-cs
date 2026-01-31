import { BoardMember } from "@/data/team";
import { User } from "lucide-react";

interface BoardMemberCardProps {
  member: BoardMember;
}

const BoardMemberCard = ({ member }: BoardMemberCardProps) => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4 mx-auto">
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <User className="w-10 h-10 text-muted-foreground" />
        )}
      </div>
      
      <div className="text-center">
        <h3 className="font-display font-bold text-lg">{member.name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
        <p className="text-muted-foreground text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default BoardMemberCard;
