import cryto from "crypto";

const SECRETE = "OSCAR-REST-API";

export const random = () => cryto.randomBytes(120).toString("base64");

export const authentication = (salt: string, password: string) => {
  return cryto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRETE)
    .digest("hex");
};
