import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button";

export default function AlertDialogRenderer({ settings }: any) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="outline">{settings.buttonText || "Show dialog"}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{settings.title || "Title"}</AlertDialogTitle>
          <AlertDialogDescription>
            {settings.dialogDescription || "Description"}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>{settings.dialogAction || "Action"}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
