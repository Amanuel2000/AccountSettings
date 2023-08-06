import { Card, LoadingOverlay } from "@mantine/core";

export function FallBackPage() {
    return <Card className="h-full "><LoadingOverlay visible={true} overlayBlur={2} zIndex={80} /></Card>
  }
  