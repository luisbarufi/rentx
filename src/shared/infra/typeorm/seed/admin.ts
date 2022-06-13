import { v4 as uuidV4 } from "uuid";
import { hash } from "bcrypt";

import { dataSource } from "..";

async function create() {
  const connection = dataSource;

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
     values('${id}', 'admin', 'admin@rentalx.com', '${password}', true, 'now()', 'xxxxxxx') 
    `
  );
}

create().then(() => console.log("User admin created!"));
