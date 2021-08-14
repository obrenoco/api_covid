import axios from "axios";

export default function handler(req, res) {
  const authorization = process.env.API_AUTHORIZATION;
  const cookie = process.env.API_COOKIE;
  const options = {
    method: "GET",
    url: "https://imunizacao-es.saude.gov.br/_search",
    headers: {
      cookie: cookie,
      Authorization: authorization,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      let data = response.data;
      res.status(200).json(data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
