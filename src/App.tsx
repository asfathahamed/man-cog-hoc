import withAllFeatures from "./hocs/withAllFeatures";
import SampleButton from "./components/SampleButton";
import SampleDropdown from "./components/SampleDropdown";
import { trackEvent } from "./utils/analytics";
import { translate } from "./utils/translation";

const ButtonWithAllFeatures = withAllFeatures(SampleButton, "button");
const DropdownWithAllFeatures = withAllFeatures(SampleDropdown, "dropdown");

const App = () => (
  <div>
    <ButtonWithAllFeatures
      aria={{ "aria-pressed": true }}
      trackEvent={trackEvent}
      t={translate}
    >
      <>{(key: string) => key}</>
    </ButtonWithAllFeatures>
    <DropdownWithAllFeatures
      aria={{ "aria-expanded": "false" }}
      trackEvent={trackEvent}
      t={translate}
      options={["option1", "option2", "option3"]}
    >
      {/* Options handled internally */}
    </DropdownWithAllFeatures>
  </div>
);

export default App;
