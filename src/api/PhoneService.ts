import axios from "axios";

let endpointEnv = "prod"
if (process.env.NODE_ENV === 'development') {
  endpointEnv =  "dev"
}

export default class PhoneService {
  static endpoint = {
    dev: "https://988fe3aa-672e-4185-9967-0ae3d97cc674.mock.pstmn.io",
    prod: "https://75j6v3-8080.preview.csb.app/api/v1"
  }

  static triggerPin = async (msisdn: string, userId: string) => {
    try {
      const url = `${this.endpoint[endpointEnv]}/trigger-pin/?msisdn=${msisdn}&user_id=${userId}`;
      const res = await axios.get(url);
      
      return res?.data;
    } catch (error) {
      // we can log error cloudwatch but for now we'll just log it here
      console.log("Error", error);
    }
  };

  static verifyPin = async (pin: string, userId: string) => {
    try {
      const url = `${this.endpoint[endpointEnv]}/verify-pin/?pin=${pin}&user_id=${userId}`;
      const res = await axios.get(url);

      return res?.data;
    } catch (error) {
      // we can log error cloudwatch but for now we'll just log it here
      console.log("Error", error);
    }
  };
}
