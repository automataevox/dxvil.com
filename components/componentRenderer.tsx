import { AccordionRenderer, AlertDialogRenderer, AvatarRenderer }from "./componentRenderers";
import { Alert, AlertDescription } from "./ui/alert";

export default function ComponentRenderer({ componentName, componentSettings }: any) {
  
  if (componentName) {
    switch ((componentName)) {
        case "Accordion":
            return <AccordionRenderer settings={componentSettings} />;
        case "Alert Dialog":
            return <AlertDialogRenderer settings={componentSettings} />;
        case "Avatar":
            return <AvatarRenderer settings={componentSettings} />;
        default:
            return (
                <Alert variant="destructive">
                    <AlertDescription>
                    Renderer has not been implemented yet.
                    </AlertDescription>
                </Alert>
            );
    }
  } else {
    return null;
  }
}
