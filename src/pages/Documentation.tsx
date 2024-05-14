import { Cards } from "../components/Cards";
import { Buttons } from "../components/Buttons";
import { Alerts } from "../components/Alerts";
import { Tables } from "../components/Table";
import { Dialogs } from "../components/Dialog";
import Notifications from "../components/alerts/Notifications";
import { Subtitle, TextTitle } from "../components/Text";

function Documentation() {
  return (
    <div>
      {" "}
      <div className="space-y-3">
        <Buttons />
        <Cards />
        <Alerts />
        <Notifications />
        <Tables />
        <Dialogs />
        <TextTitle text="Titulo" />
        <Subtitle text="Subtitle" />
      </div>
    </div>
  );
}

export default Documentation;
