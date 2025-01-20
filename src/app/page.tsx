import { TabComponent } from "../common/components/TabComponent";
import { DraggableContainer } from "../common/modules/Container";
import { FetchData } from "../common/modules/FetchData";
import { ModalsComponent } from "../common/modules/ModalsComponent";
import { SharedLinkPreview } from "../common/modules/SharedLinkPreview";
import { UserOnboardingGuide } from "../common/modules/UserOnboardingGuide";

export default function Home() {
  const tabData = [
    {
      title: "Fetch Data",
      value: "fetch_data",
      component: <FetchData />,
    },
    {
      title: "User onboarding guide",
      value: "user_onboarding_guide",
      component: <UserOnboardingGuide />,
    },
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
    {
      title: "container",
      value: "container",
      component: <DraggableContainer />,
    },
  ];
  return <TabComponent tabData={tabData} />;
}
