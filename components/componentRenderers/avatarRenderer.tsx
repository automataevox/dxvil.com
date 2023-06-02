import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export default function AvatarRenderer({ settings }: any) {
  return (
      <Avatar className={`w-${settings.size} h-${settings.size}`}>
        <AvatarImage src={`${settings.url}`} />
        <AvatarFallback>{settings.fallback}</AvatarFallback>
      </Avatar>
  );
}
