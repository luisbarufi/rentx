import { container } from "tsyringe";

import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/implementations/DayjsDateProvider";
import { IMailProvaider } from "./MailProvaider/IMailProvaider";
import { EtherealMailProvider } from "./MailProvaider/implementations/EtherealMailProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);

container.registerInstance<IMailProvaider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
);
