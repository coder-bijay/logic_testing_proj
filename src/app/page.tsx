import { TabComponent } from "../common/components/TabComponent";
import { ModalsComponent } from "../common/modules/ModalsComponent";
import { SharedLinkPreview } from "../common/modules/SharedLinkPreview";

export default function Home() {
  const tabData = [
    {
      title: "Shared Link Preview",
      value: "shared_link_preview",
      component: <SharedLinkPreview />,
    },
    {
      title: "modals",
      value: "modals",
      component: <ModalsComponent />,
    },
  ];
  return <TabComponent tabData={tabData} />;
}
